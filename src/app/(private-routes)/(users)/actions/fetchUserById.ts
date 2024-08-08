"use server";

import { UserService } from "../services/users.service";
import { IUserResponseUnique } from "../types/User";

export const fetchUserById = async (
  user_id: string = ""
): Promise<IUserResponseUnique | { error: string }> => {
  const response = await UserService.getUserByID(user_id);

  if (!response || "error" in response) {
    return { error: response.error || "Unknown error" };
  }

  return response;
};
