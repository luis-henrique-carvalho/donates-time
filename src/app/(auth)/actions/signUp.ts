"use server";
// Services
import { AuthApiService } from "../services/auth-api.service";
// Types
import { ISignUp, ISignUpResponse } from "../types";

export const signUpAction = async (
  signUpData: ISignUp
): Promise<ISignUpResponse> => {
  const response = await AuthApiService.signUp({ user: signUpData });

  if (!response || "error" in response) {
    return { data: null, error: response.error };
  }

  return { data: response.data };
};
