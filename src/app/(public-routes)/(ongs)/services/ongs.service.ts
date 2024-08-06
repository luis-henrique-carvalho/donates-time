import { api } from "@/services/api.service";
import { IOngResponse } from "../types";

export class OngService {
  static async getOngs(): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/ongs");
      return response.data;
    } catch (error: any) {
      // Se o erro não tiver uma resposta estruturada, forneça uma mensagem padrão
      const errorMessage = error.response?.data?.errors || "An error occurred";
      return { error: errorMessage };
    }
  }
}
