"use server";
// Services
import { OngService } from "../services/ongs.service";
// Schema
import { ongFormData } from "../schema";
// Types
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
