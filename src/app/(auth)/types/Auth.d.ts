import { ISignIn } from "./SignIn";

export interface IAuth {
  token: string;
  user: ISignIn;
}
