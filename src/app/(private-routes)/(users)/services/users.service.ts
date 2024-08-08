import { api } from "@/services/api.service";

import { getSessionUtils, handleApiError } from "@/utils";

export class UserService {
  static async getUserByID(
    user_id: string
  ): Promise<{ data: any } | { error: string }> {
    const session = await getSessionUtils();
    try {
      const response = await api.get(`api/v1/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while fetching the user");
    }
  }
}
