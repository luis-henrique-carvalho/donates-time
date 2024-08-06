// src/app/(public-routes)/(ongs)/types/index.ts
export interface IOngAttributes {
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

export interface IOng {
  id: string;
  type: string;
  attributes: IOngAttributes;
}

export interface IOngResponse {
  data: IOng[];
}

export interface ICreateOngResponse {
  message: string;
  data: IOng;
}
