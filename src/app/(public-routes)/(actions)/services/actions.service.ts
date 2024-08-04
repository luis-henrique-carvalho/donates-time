import { api } from "@/services/api.service";
import { IActionResponse, IActionResponseUnique } from "../types";

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
}
