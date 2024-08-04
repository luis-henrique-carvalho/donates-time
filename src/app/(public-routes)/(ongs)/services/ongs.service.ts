// src/app/(public-routes)/(ongs)/services/ongs.service.ts
import { api } from "@/services/api.service";
import { IOngResponse } from "../types";

export class OngService {
  static async getOngs(): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/ongs");
      return response.data;
    } catch (error: any) {
      return {
        error: error.response.data.errors || "An error occurred",
      };
    }
  }
}
