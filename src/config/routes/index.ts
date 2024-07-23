import type { ConfigRoutes } from "@/types/routes";

export const configRoutes: ConfigRoutes = {
  publicRoutes: [
    { title: "Home", href: "/" },
    { title: "Login", href: "/auth/login" },
    { title: "Register", href: "/auth/register" },
    { title: "Ongs", href: "/ongs" },
    { title: "Actions", href: "/actions" },
    { title: "Volunteers", href: "/volunteers" },
  ],
  privateRoutes: [{ title: "Create Ong", href: "/ongs/create" }],
  navMenuRoutes: [
    { title: "Ongs", href: "/ongs" },
    { title: "Actions", href: "/actions" },
  ],
};
