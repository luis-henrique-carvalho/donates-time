"use client";

import React from "react";
import { GalleryVerticalEnd, Hourglass } from "lucide-react";
import { usePathname } from "next/navigation";

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
} from "@/components/ui/sidebar";
import { NavRoutes } from "@/config/routes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar variant='sidebar' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='default' asChild>
              <a href='#'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground'>
                  <Hourglass className='size-4 items-center' color='#16A34A' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-semibold'>Doa Tempo</span>
                  <span className=''>Cada minuto importa</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className='gap-2'>
            {NavRoutes.navMain.map((item) => {
              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`font-medium ${isActive ? "text-active" : ""}`}
                    >
                      {item.icon && <item.icon color='#16A34A' />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub className='ml-0 border-l-0 px-1.5'>
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.url;

                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubActive}
                            >
                              <a
                                href={subItem.url}
                                className={isSubActive ? "text-active" : ""}
                              >
                                {subItem.icon && <subItem.icon />}
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
