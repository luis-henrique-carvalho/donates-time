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

type Data = {
  navMain: {
    title: string
    url: string
    items?: {
      title: string
      url: string
      isActive?: boolean
      show?: boolean
    }[]
  }[]
}

export const NavRoutes: Data = {
  navMain: [
    {
      title: "Ongs",
      url: "/ongs",
      items: [
        {
          title: "Todas as Ongs",
          url: "/ongs",
        },
        {
          title: "Cadastrar Ong",
          url: "/ongs/create",
        },
        {
          title: "Minha Ong",
          url: "/ongs/my-ong",
        },
      ],
    },
    {
      title: "Ações",
      url: "/actions",
      items: [
        {
          title: "Todas as Ações",
          url: "/actions",
        },
        {
          title: "Cadastrar Ação",
          url: "/actions/create",
        },
      ],
    },
  ],
}
