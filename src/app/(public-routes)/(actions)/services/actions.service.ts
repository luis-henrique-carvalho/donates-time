import { api } from "@/services/api.service";
// Types
import {
  IActionResponse,
  IActionResponseUnique,
  ICreateActionResponse,
} from "../types";
// Utils
import { getSessionUtils } from "@/utils";
// Schema
import { actionFormData } from "../actions/schema";

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
  ): Promise<IActionResponseUnique | { error: string }> {
    try {
      const response = await api.get(`api/v1/actions/${action_id}`);
      return response.data;
    } catch (error: any) {
      return {
        error: error.response.data.errors || "An error occurred",
      };
    }
  }

  static async createActionService(
    data: actionFormData
  ): Promise<ICreateActionResponse | { error: string }> {
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
        error: error.response.data.errors || "An error occurred",
      };
    }
  }
}
