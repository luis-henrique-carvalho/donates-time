"use server";

import { ActionService } from "../services/actions.service";
import { IActionResponseUnique } from "../types";

export const deleteAction = async (
  action_id: string
): Promise<IActionResponseUnique> => {
  const response = await ActionService.deleteActionService(action_id);

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
