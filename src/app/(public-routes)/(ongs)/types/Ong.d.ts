import { ISignUp, IUser } from "@/app/(auth)/types";
import { IOngResponse } from "./Ong.d";
import { IPagination } from "@/types/Pagination";
import { IAction } from "../../(actions)/types";
import { IongCategory } from "../schema/ongSchema";

export interface IOng {
  id: string;
  category: IongCategory;
  city: string;
  description: string;
  email: string;
  name: string;
  state: string;
  user_id: string;
  created_at: date;
  updated_at: string;
  user?: ISignUp;
  volunteers_total: number;
  confirmed_volunteers?: number;
  actions_slots_total?: number;
  actions_slots_available?: number;
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

export interface IOngPostOrPatch {
  data: { message?: string; ong: IOng | null };
  error?: string;
}

export interface IOngResponseUnique {
  data: IOng | null;
  error?: string;
}
