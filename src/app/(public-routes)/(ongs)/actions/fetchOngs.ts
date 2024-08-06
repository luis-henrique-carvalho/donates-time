"use server";

import { OngService } from "../services/ongs.service";
import { IOngResponse } from "../types";

export const fetchOngs = async (): Promise<IOngResponse> => {
  const response = await OngService.getOngs();

  if (!response || "error" in response) {
    throw new Error(response.error || "Unknown error");
  }

  return response;
};
