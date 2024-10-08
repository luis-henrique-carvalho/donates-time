import type { ConfigRoutes } from "@/types/routes";

export const configRoutes: ConfigRoutes = {
  publicRoutes: [
    { title: "Home", href: "/" },
    { title: "Ongs", href: "/ongs" },
    { title: "Ong Details", href: "/ongs/[id]" },
    { title: "Actions", href: "/actions" },
    { title: "Action Details", href: "/actions/[id]" },
    { title: "Volunteers", href: "/volunteers" },
  ],
  authRotes: [
    { title: "Login", href: "/auth/login" },
    { title: "Register", href: "/auth/register}" },
  ],
  privateRoutes: [
    { title: "Create Ong", href: "/ongs/create" },
    { title: "Create Action", href: "/actions/create" },
    { title: "My Ong", href: "/ongs/my-ong" },
  ],
};
