import { IPagination } from "@/types/Pagination";

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
}

export interface IOngResponse {
  data: IOng[];
  pagy: IPagination;
}

export interface ICreateOngResponse {
  message: string;
  data: IOng;
}
