import { api } from "@/services/api.service";
import { IVolunteerResponseUnique } from "../types";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/nextAuthOptions";

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
      const errorMessage =
        error.response?.data?.errors ||
        error.response?.data?.error ||
        "An error occurred";
      return { error: errorMessage };
    }
  }
}
