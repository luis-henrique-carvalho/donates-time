import { IActionStatus } from "@/app/(public-routes)/(actions)/types";
import { IPagination } from "@/types/Pagination";

export interface IVolunteer {
  id: string;
  action_id: string;
  action_ong_name: string;
  action_title: string;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
  user_email: string;
  user_id: string;
  user_name: string;
}

export interface ISuccessResponse {
  data: {
    volunteers: IVolunteer[];
    pagy: IPagination;
  };
}

export interface IErrorResponse {
  error: string;
}

export type IVolunteerResponse = ISuccessResponse | IErrorResponse;

export interface IVolunteerResponseUnique {
  data: IVolunteer;
}
