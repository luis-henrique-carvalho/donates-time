// Service
import { api } from "@/services/api.service";
// Types
import { IOngResponse, ICreateOngResponse } from "../types";
// Schema
import { ongFormData } from "../schema";
// Utils
import { getSessionUtils, handleApiError } from "@/utils";

export class OngService {
  static async getOngs(): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/ongs");
      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while fetching the ONGs");
    }
  }

  static async getOngById(
    id: string
  ): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get(`api/v1/ongs/${id}`);
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

  static async createOng(
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
