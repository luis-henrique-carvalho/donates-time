import { z } from "zod";

export enum IongCategory {
  Education = "education",
  Health = "health",
  Environment = "environment",
  AnimalWelfare = "animal_welfare",
  ArtsAndCulture = "arts_and_culture",
  HumanRights = "human_rights",
  CommunityDevelopment = "community_development",
  ScienceAndTechnology = "science_and_technology",
  DisasterRelief = "disaster_relief",
  Sports = "sports",
  Youth = "youth",
  Seniors = "seniors",
}

export const ongSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  city: z.string().min(3),
  state: z.string().min(2),
  category: z.nativeEnum(IongCategory),
  description: z.string().min(3),
});

export type ongFormData = z.infer<typeof ongSchema>;
