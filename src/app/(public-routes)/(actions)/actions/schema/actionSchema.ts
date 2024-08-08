import { isAfter, max } from "date-fns";

import { z } from "zod";

export enum IactionCategory {
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

export const actionDefaultValues = {
  title: "",
  category: IactionCategory.Education,
  max_volunteers: 0,
  dateRange: {
    from: new Date(),
    to: new Date(),
  },
  description: "",
};

export const actionSchema = z
  .object({
    title: z.string().min(5),
    dateRange: z.object(
      {
        from: z.date(),
        to: z.date(),
      },
      {
        required_error: "Please select a date range",
      }
    ),
    category: z.nativeEnum(IactionCategory),
    max_volunteers: z.coerce.number().int().positive(),
    description: z.string().min(200),
    // ong id is passed as a prop
    ong_id: z.string().optional(),
  })
  .refine((data) => data.dateRange.from < data.dateRange.to, {
    path: ["dateRange"],
    message: "From date must be before to date",
  });

export type actionFormData = z.infer<typeof actionSchema>;
