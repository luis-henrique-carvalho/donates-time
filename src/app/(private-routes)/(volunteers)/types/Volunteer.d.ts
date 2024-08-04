import { IActionStatus } from "@/app/(public-routes)/(actions)/types";
import { IPagination } from "@/types/Pagination";

export interface IVolunteerAttributes {
  id: string;
  confirmed: boolean;
  user_id: string;
  action_id: string;
  created_at: string;
  updated_at: string;
  user: {
    name: string;
    email: string;
  };
  action: {
    title: string;
    status: IActionStatus;
    category: string;
    start_date: string;
    end_date: string;
  };
}

export interface IVolunteer {
  id: string;
  type: string;
  attributes: IVolunteerAttributes;
}

export interface IVolunteerResponse {
  data: IVolunteer[];
  pagy: IPagination;
}

export interface IVolunteerResponseUnique {
  data: IVolunteer;
}
