"use server";

import { OngService } from "../services/ongs.service";
import { IOngResponse } from "../types";

export const fetchOngs = async (
  ongSearch: string,
  ongPage: number
): Promise<IOngResponse | { error: string }> => {
  const response = await OngService.getOngs(ongSearch, ongPage);

  if (!response || "error" in response) {
    return { error: response.error || "Unknown error" };
  }

  return response;
};
