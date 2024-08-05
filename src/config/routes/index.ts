import type { ConfigRoutes } from "@/types/routes";

export const configRoutes: ConfigRoutes = {
  publicRoutes: [
    { title: "Home", href: "/" },
    { title: "Ongs", href: "/ongs" },
    { title: "Actions", href: "/actions" },
    { title: "Action Details", href: "/actions/[id]" },
    { title: "Volunteers", href: "/volunteers" },
  ],
  authRotes: [
    { title: "Login", href: "/auth/login" },
    { title: "Register", href: "/auth/register}" },
  ],
  privateRoutes: [{ title: "Create Ong", href: "/ongs/create" }],
  navMenuRoutes: [
    {
      title: "Ongs",
      href: "/ongs",
      actions: [
        { title: "Listar Ongs", href: "/ongs" },
        { title: "Criar Ong", href: "/ongs/create" },
      ],
    },
    {
      title: "Ação",
      href: "/actions",
      actions: [
        { title: "Listar Ação", href: "/actions" },
        { title: "Criar Ação", href: "/actions/create" },
      ],
    },
  ],
};
