import { api } from "@/services/api.service";

import { getSessionUtils, handleApiError } from "@/utils";
import { IUserResponseUnique } from "../types/User";

export class UserService {
  static async getUserByID(user_id: string): Promise<IUserResponseUnique> {
    const session = await getSessionUtils();
    try {
      const response = await api.get(`api/v1/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return {
        data: null,
        ...handleApiError(error),
      };
    }
  }
}
