import { api } from "@/services/api.service";
import { IOngResponse, ICreateOngResponse } from "../types";
import { ongFormData } from "../schema";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/nextAuthOptions";

// Função auxiliar para tratar erros
const handleApiError = (error: any): { error: string } => {
  const errorMessage =
    error.response?.data?.errors ||
    error.response?.data?.error ||
    "An error occurred";
  return { error: errorMessage };
};

// Função auxiliar para obter a sessão
const getSession = async () => {
  const session = await getServerSession(nextAuthOptions);
  return session;
};

export class OngService {
  static async getOngs(): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get("api/v1/ongs");
      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }

  static async getOngById(
    id: string
  ): Promise<IOngResponse | { error: string }> {
    try {
      const response = await api.get(`api/v1/ongs/${id}`);
      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }

  static async getOngByUserId(): Promise<IOngResponse | { error: string }> {
    try {
      const session = await getSession();
      const response = await api.get(`api/v1/ongs/user/${session?.user?.id}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }

  static async createOng(
    data: ongFormData
  ): Promise<ICreateOngResponse | { error: string }> {
    try {
      const session = await getSession();
      const response = await api.post("api/v1/ongs", data, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }
}
