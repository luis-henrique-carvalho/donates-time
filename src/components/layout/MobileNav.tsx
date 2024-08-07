"use client";
// Flow
import React from "react";
// Components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileLink from "@/components/molecules/MobileLink";
// Icons
import { IoMdMenu } from "react-icons/io";
// Config
import { siteConfig } from "@/config/site";
import { configRoutes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {};

const MobileNav = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='flex sm:hidden'>
        <IoMdMenu className='h-6 w-6' />
      </SheetTrigger>
      <SheetContent className='w-[350px]' side='left'>
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className='my-4 flex flex-col gap-2 pb-10 pl-6'>
          {configRoutes.navMenuRoutes.map((route) => (
            <div key={route.href}>
              <MobileLink href={route.href} onOpenChange={setOpen}>
                <span
                  className={cn(
                    "transition-colors hover:text-primary/80",
                    pathname === route.href
                      ? "text-primary"
                      : "text-foreground/60"
                  )}
                >
                  {route.title}
                </span>
              </MobileLink>
              {route.actions && (
                <div className='ml-4 flex flex-col gap-1'>
                  {route.actions.map((action) => (
                    <MobileLink
                      key={action.href}
                      href={action.href}
                      onOpenChange={setOpen}
                    >
                      <span
                        className={cn(
                          "transition-colors hover:text-primary/80",
                          pathname === action.href
                            ? "text-primary"
                            : "text-foreground/60"
                        )}
                      >
                        {action.title}
                      </span>
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
