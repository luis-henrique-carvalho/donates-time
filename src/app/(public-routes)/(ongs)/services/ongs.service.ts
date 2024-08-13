// Service
import { api } from "@/services/api.service";
// Types
import {
  IOngResponse,
  ICreateOngResponse,
  IOngResponseUnique,
  IOngPostOrPatch,
} from "../types";
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

  static async getOngById(ong_id: string): Promise<IOngResponseUnique> {
    try {
      const response = await api.get(`api/v1/ongs/${ong_id}`);
      return response.data;
    } catch (error: any) {
      return {
        data: null,
        ...handleApiError(error, "An error occurred while fetching the ONG"),
      };
    }
  }

  static async getOngByUserId(user_id?: string): Promise<IOngResponseUnique> {
    try {
      const session = await getSessionUtils();
      const id = user_id || session?.user?.id;

      const response = await api.get(`api/v1/users/${id}/ong`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        data: null,
        ...handleApiError(error),
      };
    }
  }

  static async createOngService(data: ongFormData): Promise<IOngPostOrPatch> {
    try {
      const session = await getSessionUtils();
      const response = await api.post("api/v1/ongs", data, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return { data: response.data };
    } catch (error: any) {
      return {
        data: { ong: null },
        ...handleApiError(error),
      };
    }
  }

  static async updateOngService(
    data: ongFormData,
    id: string
  ): Promise<IOngPostOrPatch> {
    try {
      const session = await getSessionUtils();
      const response = await api.put(`api/v1/ongs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      return { data: response.data };
    } catch (error: any) {
      return {
        data: { ong: null },
        ...handleApiError(error),
      };
    }
  }
}
