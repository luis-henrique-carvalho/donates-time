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

export type IongCategory =
  | "education"
  | "health"
  | "environment"
  | "animal_welfare"
  | "arts_and_culture"
  | "human_rights"
  | "community_development"
  | "science_and_technology"
  | "disaster_relief"
  | "sports"
  | "youth"
  | "seniors";

export interface IOngFormData {
  name: string;
  email: string;
  city: string;
  state: string;
  category: IongCategory;
  description: string;
}

export interface IOng {
  id: string;
  type: string;
  attributes: IOngAttributes;
}

export interface IOngResponse {
  data: IOng[];
}
