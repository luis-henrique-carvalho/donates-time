// src/app/(public-routes)/(Actions)/actions/fetchActions.ts
"use server";

import { ActionService } from "../services/actions.service";
import { IActionResponse } from "../types";

export const fetchActions = async (
  actionSearch: string,
  actionPage: number
): Promise<IActionResponse | { error: string }> => {
  try {
    const response = await ActionService.getActions(actionSearch, actionPage);

    if (!response || "error" in response) {
      throw new Error(response.error || "Unknown error");
    }

    return response;
  } catch (error: any) {
    console.error("Fetch Actions Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
