"use server";

import { ongFormData } from "../schema";
import { OngService } from "../services/ongs.service";
import { ICreateOngResponse } from "../types";

export const createOng = async (
  data: ongFormData
): Promise<ICreateOngResponse | { error: string }> => {
  const response = await OngService.createOngService(data);

  if (!response || "error" in response) {
    return { error: response.error || "Unknown error" };
  }

  return response;
};
