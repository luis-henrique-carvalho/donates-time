"use server";

import { ongFormData } from "../schema";
import { OngService } from "../services/ongs.service";
import { IOngPostOrPatch } from "../types";

export const updateOng = async (
  data: ongFormData,
  id: string
): Promise<IOngPostOrPatch> => {
  const response = await OngService.updateOngService(data, id);

  if (!response || "error" in response) {
    return { data: { ong: null }, error: response.error };
  }

  return { data: { ong: response.data.ong, message: response.data.message } };
};
