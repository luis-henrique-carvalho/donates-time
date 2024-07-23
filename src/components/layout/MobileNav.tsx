"use client";
// Flow
import React from 'react'
// Components
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MobileLink from '@/components/molecules/MobileLink';
// Icons
import { IoMdMenu } from "react-icons/io";
// Config
import { siteConfig } from '@/config/site';
import { configRoutes } from '@/config/routes';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {}

const MobileNav = (props: Props) => {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex sm:hidden'>
                <IoMdMenu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="w-[350px]" side="left" >
                <SheetHeader>
                    <SheetTitle>{siteConfig.name}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 my-4 pb-10 pl-6">
                    {configRoutes.navMenuRoutes.map(route => (
                        <MobileLink key={route.href} href={route.href} onOpenChange={setOpen}>
                            <span className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === route.href ? "text-foreground" : "text-foreground/60"
                            )}>
                                {route.title}
                            </span>
                        </MobileLink>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
