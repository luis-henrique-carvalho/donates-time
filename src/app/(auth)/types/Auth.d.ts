import { IUser } from "./User";

export interface IAuth {
  token: string;
  user: IUser;
}
