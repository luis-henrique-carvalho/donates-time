"use server";

import { OngService } from "../services/ongs.service";
import { IOng } from "../types";

export const fetchOngById = async (
  ong_id: string
): Promise<IOng | { error: string }> => {
  try {
    const response = await OngService.getOngById(ong_id);

    if (!response || "error" in response) {
      return { error: response.error || "Unknown error" };
    }

    return response.data;
  } catch (error: any) {
    console.error("Fetch ongs Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
