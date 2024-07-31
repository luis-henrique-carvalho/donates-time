// Services
import { api } from "@/services/api.service";
// Types
import { ISignUp } from "../types";

export class AuthApiService {
  static async signUp(user: { user: ISignUp }) {
    try {
      const response = await api.post("/auth/signup", user);

      return response.data;
    } catch (error: any) {
      console.log("SignUp Error:", error.response?.data?.status.message);
      return { error: error.response?.data?.status.message || error.message };
    }
  }
}
