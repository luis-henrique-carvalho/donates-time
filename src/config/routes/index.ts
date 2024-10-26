import {
  BadgePlus,
  Building2,
  GalleryVerticalEnd,
  List,
  LucideProps,
  Users,
} from "lucide-react";
import type { ConfigRoutes } from "@/types/routes";
import { ForwardRefExoticComponent, RefAttributes } from "react";

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
    title: string;
    icon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    url: string;
    items?: {
      icon?: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
      title: string;
      url: string;
      isActive?: boolean;
      show?: boolean;
    }[];
  }[];
};

export const NavRoutes: Data = {
  navMain: [
    {
      title: "Ongs",
      icon: Building2,
      url: "/ongs",
      items: [
        {
          title: "Todas as Ongs",
          icon: List,
          url: "/ongs",
        },
        {
          title: "Cadastrar Ong",
          icon: BadgePlus,
          url: "/ongs/create",
        },
        {
          title: "Minha Ong",
          icon: GalleryVerticalEnd,
          url: "/ongs/my-ong",
        },
      ],
    },
    {
      title: "Ações",
      icon: Users,
      url: "/actions",
      items: [
        {
          title: "Todas as Ações",
          icon: List,
          url: "/actions",
        },
        {
          title: "Cadastrar Ação",
          icon: BadgePlus,
          url: "/actions/create",
        },
      ],
    },
  ],
};
