"use server";

import { ActionService } from "../services/actions.service";
import { IAction } from "../types";

export const fetchActionById = async (
  action_id: string
): Promise<IAction | { error: string }> => {
  try {
    const response = await ActionService.getActionById(action_id);

    if (!response || "error" in response) {
      throw new Error(response.error || "Unknown error");
    }

    console.log();
    return response.data;
  } catch (error: any) {
    console.error("Fetch Actions Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
