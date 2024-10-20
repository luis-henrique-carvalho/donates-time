import { api } from "@/services/api.service";
import { IVolunteerResponse, IVolunteerResponseUnique } from "../types";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/nextAuthOptions";
import { handleApiError } from "@/utils";

export class VolunteerService {
  static async createVolunteer(
    action_id: string
  ): Promise<IVolunteerResponseUnique | { error: string }> {
    const session = await getServerSession(nextAuthOptions);

    try {
      const response = await api.post(
        "api/v1/volunteers",
        {
          action_id: action_id,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }

  static async getVolunteersByOngId(
    ong_id: string
  ): Promise<IVolunteerResponse> {
    const session = await getServerSession(nextAuthOptions);

    try {
      const response = await api.get(`/api/v1/ongs/${ong_id}/volunteers`, {
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
