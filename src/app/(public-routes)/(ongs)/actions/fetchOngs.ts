// src/app/(public-routes)/(ongs)/actions/fetchOngs.ts
"use server";

import { OngService } from "../services/ongs.service";
import { IOngResponse } from "../types";

export const fetchOngs = async (): Promise<
  IOngResponse | { error: string }
> => {
  try {
    const response = await OngService.getOngs();

    if (!response || "error" in response) {
      throw new Error(response.error || "Unknown error");
    }

    return response;
  } catch (error: any) {
    console.error("Fetch Ongs Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
