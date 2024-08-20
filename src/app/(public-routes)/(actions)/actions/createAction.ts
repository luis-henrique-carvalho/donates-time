"use server";
// Services
import { ActionService } from "../services/actions.service";
// Types
import { ICreateActionResponse, IActionPostOrPatch } from "../types";
// Schema
import { actionFormData } from "../schema";

export const createAction = async (
  data: actionFormData
): Promise<IActionPostOrPatch> => {
  const response = await ActionService.createActionService(data);

  if (!response || "error" in response) {
    return { data: { action: null }, error: response.error };
  }

  return {
    data: { action: response.data.action, message: response.data.message },
  };
};
