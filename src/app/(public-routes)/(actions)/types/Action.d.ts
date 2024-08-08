import { IVolunteer } from "@/app/(private-routes)/(volunteers)/types";
import { IOng } from "../../(ongs)/types";
import { IActionResponse } from "./Action.d";
import { IPagination } from "@/types/Pagination";

export type IActionStatus = "pending" | "active" | "completed" | "canceled";

export interface IAction {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: IActionStatus;
  max_volunteers: number;
  category: string;
  ong_id: string;
  ong: IOng;
  created_at: string;
  updated_at: string;
  volunteer_count: number;
  volunteers?: IVolunteer[];
}

export interface IActionResponse {
  data: IAction[];
  pagy: IPagination;
}

export interface IActionResponseUnique {
  data: IAction;
}

export interface ICreateActionResponse {
  message: string;
  data: IAction;
}
