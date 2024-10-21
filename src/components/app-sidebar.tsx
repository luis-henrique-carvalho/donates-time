import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { getSessionUtils } from "@/utils"
import { fetchUserById } from "@/app/(private-routes)/(users)/actions"

type Data = {
  navMain: {
    title: string
    url: string
    items?: {
      title: string
      url: string
      isActive?: boolean
    }[]
  }[]
}


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = await getSessionUtils();
  const { data: user } = await fetchUserById(session?.user.id);

  console.log(session)

  console.log(user?.ong ? false : true)

  const data: Data = {
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
            title: "Minha Ong",
            url: "/ongs/my-ong",
            isActive: false,
          },
        ],
      },
    ],
  }

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Doa Tempo</span>
                  <span className="">Cada minuto importa</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        {item.isActive ? (<>ativo</>) : (<>inativo</>)}
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
