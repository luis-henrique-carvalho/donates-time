export interface ISignUp {
  email: string;
  password: string;
  name: string;
}

export interface ISignUpResponse {
  data: IUser | null;
  error?: string;
}
