import { IActionResponse } from "./Action.d";
import { IPagination } from "@/types/Pagination";

export type IActionStatus = "pending" | "active" | "completed" | "canceled";

export interface IActionAttributes {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: IActionStatus;
  max_volunteers: number;
  category: string;
  ong_id: string;
  ong: {
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
  volunteers_count: number;
}

export interface IAction {
  id: string;
  type: string;
  attributes: IActionAttributes;
}

export interface IActionResponse {
  data: IAction[];
  pagy: IPagination;
}

export interface IActionResponseUnique {
  data: IAction;
}
