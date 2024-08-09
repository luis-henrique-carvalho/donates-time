// src/types/next-auth.d.ts

import { IOng } from "@/app/(public-routes)/(ongs)/types";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      ong?: IOng;
    } & DefaultSession["user"];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    name: string;
    token?: string;
    ong?: IOng;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: {
      id: string;
      email: string;
      name: string;
      token?: string;
      ong?: IOng;
    };
  }
}
