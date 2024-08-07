import nextAuthOptions from "@/nextAuthOptions";
import { getServerSession } from "next-auth";

export const getSessionUtils = async () => {
  const session = await getServerSession(nextAuthOptions);
  return session;
};
