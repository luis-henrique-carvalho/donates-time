"use client";
// Components
import Link from 'next/link';
import React from 'react';
// Config
import { siteConfig } from '@/config/site';
import { configRoutes } from '@/config/routes';
// Utils
import { cn } from "@/lib/utils";
// Hooks
import { usePathname } from 'next/navigation';

type Props = {}

const MainNav = (props: Props) => {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden sm:flex">
            <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
                <span className="font-bold">
                    {siteConfig.name}
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <div className="flex items-center gap-2">
                    {configRoutes.navMenuRoutes.map(route => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === route.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {route.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default MainNav;
