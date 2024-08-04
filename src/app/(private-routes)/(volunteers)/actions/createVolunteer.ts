"use server";

import { VolunteerService } from "../services/volunteer.service";
import { IVolunteer } from "../types";

export const createVolunteer = async (
  action_id: string
): Promise<IVolunteer | { error: string }> => {
  try {
    const response = await VolunteerService.createVolunteer(action_id);

    console.log(response);
    if (!response || "error" in response) {
      throw new Error(response.error || "Unknown error");
    }

    console.log();
    return response.data;
  } catch (error: any) {
    console.error("Fetch Actions Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
