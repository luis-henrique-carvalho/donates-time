// Services
import { api } from "@/services/api.service";
// Types
import { ISignUp } from "../types";
// Utils
import { handleApiError } from "@/utils";

export class AuthApiService {
  static async signUp(user: { user: ISignUp }) {
    try {
      const response = await api.post("/auth/signup", user);
      return response.data;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while signing up");
    }
  }

  static async signIn(email: string, password: string) {
    try {
      const response = await api.post("/auth/login", {
        user: {
          email: email,
          password: password,
        },
      });

      return response;
    } catch (error: any) {
      return handleApiError(error, "An error occurred while signing in");
    }
  }
}
