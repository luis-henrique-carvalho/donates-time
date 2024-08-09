"use server";

import { UserService } from "../services/users.service";
import { IUserResponseUnique } from "../types/User";

export const fetchUserById = async (
  user_id: string = ""
): Promise<IUserResponseUnique> => {
  const response = await UserService.getUserByID(user_id);

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
