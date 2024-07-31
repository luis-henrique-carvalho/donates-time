"use server";
// Services
import { AuthApiService } from "../services/auth-api.service";
// Types
import { ISignUp } from "../types";

export const signUpAction = async (signUpData: ISignUp) => {
  try {
    const response = await AuthApiService.signUp({ user: signUpData });

    if (!response || response.error) {
      throw new Error(response.error || "Unknown error");
    }

    return response;
  } catch (error: any) {
    console.error("SignUp Error:", error.message);
    return { error: error.message || "An error occurred" };
  }
};
