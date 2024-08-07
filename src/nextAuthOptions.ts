import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthApiService } from "./app/(auth)/services/auth-api.service";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await AuthApiService.signIn(
          credentials!.email,
          credentials!.password
        );

        if ("error" in response) {
          return null;
        }

        if (response.data && response.statusText === "OK") {
          const user: User = {
            id: response.data.user.id,
            email: response.data.user.email,
            name: response.data.user.name,
            token: response.data.token,
          };
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as User;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

export default nextAuthOptions;
