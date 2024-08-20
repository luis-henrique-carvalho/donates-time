import { api } from "@/services/api.service";
// Types
import {
  IActionPostOrPatch,
  IActionResponse,
  IActionResponseUnique,
  ICreateActionResponse,
} from "../types";
// Utils
import { getSessionUtils, handleApiError } from "@/utils";
// Schema
import { actionFormData } from "../schema";

export class ActionService {
  static async getActions(
    actionSearch: string,
    actionPage: number
  ): Promise<IActionResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/actions", {
        params: {
          q: {
            title_cont: actionSearch,
          },
          page: actionPage,
        },
      });
      return response.data;
    } catch (error: any) {
      return {
        error: error.response.data.errors || "An error occurred",
      };
    }
  }

  static async getActionById(
    action_id: string
  ): Promise<IActionResponseUnique> {
    try {
      const response = await api.get(`api/v1/actions/${action_id}`);
      return response.data;
    } catch (error: any) {
      return {
        data: null,
        ...handleApiError(error, "An error occurred while fetching the ONG"),
      };
    }
  }

  static async createActionService(
    data: actionFormData
  ): Promise<IActionPostOrPatch> {
    const session = await getSessionUtils();
    const body = {
      start_date: data.dateRange.from,
      end_date: data.dateRange.to,
      ...data,
    };

    try {
      const response = await api.post(`api/v1/actions`, body, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return {
        data: { action: null },
        ...handleApiError(error),
      };
    }
  }

  static async updateActionService(
    data: actionFormData,
    id: string
  ): Promise<IActionPostOrPatch> {
    const session = await getSessionUtils();
    const body = {
      start_date: data.dateRange.from,
      end_date: data.dateRange.to,
      ...data,
    };

    try {
      const response = await api.put(`api/v1/actions/${id}`, body, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return {
        data: { action: response.data.data, message: response.data.message },
      };
    } catch (error: any) {
      return {
        data: { action: null },
        ...handleApiError(error),
      };
    }
  }

  static async deleteActionService(
    action_id: string
  ): Promise<IActionResponseUnique> {
    try {
      const session = await getSessionUtils();
      const response = await api.delete(`api/v1/actions/${action_id}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return {
        data: null,
        ...handleApiError(error, "An error occurred while deleting the action"),
      };
    }
  }
}
