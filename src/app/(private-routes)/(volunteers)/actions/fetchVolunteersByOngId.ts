"use server";

import { VolunteerService } from "../services/volunteer.service";
import { IVolunteerResponse } from "../types";

export const fetchVolunteersByOngId = async (
  ong_id: string
): Promise<IVolunteerResponse> => {
  const response = await VolunteerService.getVolunteersByOngId(ong_id);

  if (!response || "error" in response) {
    return { error: response.error };
  }

  return { data: response.data };
};
