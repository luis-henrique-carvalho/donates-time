import { api } from "@/services/api.service";
import { IActionResponse } from "../types";

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
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Get Actions Error:", error.message);
        return { error: error.message || "An error occurred" };
      }
      return { error: "An unknown error occurred" };
    }
  }
}
