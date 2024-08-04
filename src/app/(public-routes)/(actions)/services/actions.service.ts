import { api } from "@/services/api.service";
import { IActionResponse } from "../types";

export class ActionService {
  static async getActions(): Promise<IActionResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/actions");
      return response.data;
    } catch (error: any) {
      console.error("Get Actions Error:", error.message);
      return { error: error.message || "An error occurred" };
    }
  }
}
