import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { MapProvider } from "@/providers/MapProvider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import { fetchUserById } from "@/app/(private-routes)/(users)/actions";
import { getSessionUtils } from "@/utils";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Separator } from "@/components/ui/separator"
import UserNav from '../molecules/UserNav';
import ThemeToggle from '../molecules/ThemeToggle';

interface RootLayoutProps {
    children: React.ReactNode;
}

const SideBar = async ({ children }: RootLayoutProps) => {
    const session = await getSessionUtils();
    const { data: user } = await fetchUserById(session?.user.id);

    return (
        <div>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "19rem",
                    } as React.CSSProperties
                }
            >
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className='ml-auto flex items-center space-x-4'>
                            {session ? (
                                <UserNav session={session} />
                            ) : (
                                <div className='flex items-center space-x-4'>
                                    <Link href='/login'>
                                        <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                                            Sign in
                                        </span>
                                    </Link>

                                    <Link href='/register'>
                                        <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                                            Register
                                        </span>
                                    </Link>
                                </div>
                            )}
                            <ThemeToggle />
                        </div>
                    </header>
                    <MapProvider>
                        {children}
                        <Toaster />
                    </MapProvider>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

export default SideBar
