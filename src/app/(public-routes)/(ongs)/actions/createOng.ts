"use server";

import { ongFormData } from "../schema";
import { OngService } from "../services/ongs.service";
import { ICreateOngResponse } from "../types";
import { IOngPostOrPatch } from "../types/Ong";

export const createOng = async (
  data: ongFormData
): Promise<IOngPostOrPatch> => {
  const response = await OngService.createOngService(data);

  if (!response || "error" in response) {
    return { data: { ong: null }, error: response.error };
  }

  return { data: { ong: response.data.ong, message: response.data.message } };
};
