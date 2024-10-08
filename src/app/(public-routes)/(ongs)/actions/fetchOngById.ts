"use server";

import { OngService } from "../services/ongs.service";
import { IOng, IOngResponseUnique } from "../types";

export const fetchOngById = async (
  ong_id: string
): Promise<IOngResponseUnique> => {
  const response = await OngService.getOngById(ong_id);

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
