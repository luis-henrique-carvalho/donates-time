import { IOng } from "@/app/(public-routes)/(ongs)/types";

export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  ong?: IOng;
}

export interface IUserResponse {
  data: IUser[];
}

export interface IUserResponseUnique {
  data: IUser;
}
