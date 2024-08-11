"use server";

import { OngService } from "../services/ongs.service";
import { IOngResponseUnique } from "../types";

export const fetchOngByUserId = async (
  user_id?: string
): Promise<IOngResponseUnique> => {
  const response = await OngService.getOngByUserId(user_id);

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
