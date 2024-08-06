"use server";

import { ongFormData } from "../schema";
import { OngService } from "../services/ongs.service";
import { ICreateOngResponse } from "../types";

export const createOng = async (
  data: ongFormData
): Promise<ICreateOngResponse> => {
  const response = await OngService.createOng(data);

  if (!response || "error" in response) {
    throw new Error(response.error || "Unknown error");
  }

  return response;
};
