// Service
import { api } from "@/services/api.service";
// Types
import { IOngResponse, ICreateOngResponse, IOngResponseUnique } from "../types";
// Schema
import { ongFormData } from "../schema";
// Utils
import { getSessionUtils, handleApiError } from "@/utils";

export class OngService {
  static async getOngs(
    ongSearch: string,
    ongPage: number
  ): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/ongs", {
        params: {
          q: {
            name_cont: ongSearch,
          },
          page: ongPage,
        },
      });
      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while fetching the ONGs");
    }
  }

  static async getOngById(
    ong_id: string
  ): Promise<IOngResponseUnique | { error: string }> {
    try {
      const response = await api.get(`api/v1/ongs/${ong_id}`);
      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while fetching the ONG");
    }
  }

  static async getOngByUserId(): Promise<IOngResponse | { error: string }> {
    try {
      const session = await getSessionUtils();
      const response = await api.get(`api/v1/ongs/user/${session?.user?.id}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while fetching the ONG");
    }
  }

  static async createOngService(
    data: ongFormData
  ): Promise<ICreateOngResponse | { error: string }> {
    try {
      const session = await getSessionUtils();
      const response = await api.post("api/v1/ongs", data, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while creating the ONG");
    }
  }
}
