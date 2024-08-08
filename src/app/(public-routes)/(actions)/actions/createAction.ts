"use server";
// Services
import { ActionService } from "../services/actions.service";
// Types
import { ICreateActionResponse } from "../types";
// Schema
import { actionFormData } from "./schema";

export const createAction = async (
  data: actionFormData
): Promise<ICreateActionResponse | { error: string }> => {
  const response = await ActionService.createActionService(data);

  if (!response || "error" in response) {
    return { error: response.error || "Unknown error" };
  }

  return response;
};
