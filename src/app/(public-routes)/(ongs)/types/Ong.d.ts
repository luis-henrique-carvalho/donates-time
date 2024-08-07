import { ISignUp, IUser } from "@/app/(auth)/types";
import { IOngResponse } from "./Ong.d";
import { IPagination } from "@/types/Pagination";
import { IAction } from "../../(actions)/types";

export interface IOng {
  id: string;
  category: string;
  city: string;
  description: string;
  email: string;
  name: string;
  state: string;
  user_id: string;
  created_at: date;
  updated_at: string;
  user?: ISignUp;
  actions?: IAction[];
}

export interface IOngResponse {
  data: IOng[];
  pagy: IPagination;
}

export interface ICreateOngResponse {
  message: string;
  data: IOng;
}

export interface IOngResponseUnique {
  data: IOng;
}
