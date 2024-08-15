"use server";

import { ActionService } from "../services/actions.service";
import { IAction, IActionResponseUnique } from "../types";

export const fetchActionById = async (
  action_id: string
): Promise<IActionResponseUnique> => {
  const response = await ActionService.getActionById(action_id);

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
