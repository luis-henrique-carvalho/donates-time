"use server";

import { actionFormData } from "../schema";
import { ActionService } from "../services/actions.service";
import { IActionPostOrPatch } from "../types";

// Services
// Schema
// Types

export const updateAction = async (
  data: actionFormData,
  id: string
): Promise<IActionPostOrPatch> => {
  const response = await ActionService.updateActionService(data, id);

  if (!response || "error" in response) {
    return { data: { action: null }, error: response.error };
  }

  return {
    data: { action: response.data.action, message: response.data.message },
  };
};
