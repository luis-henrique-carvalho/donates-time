"use client";
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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { IUser } from "@/app/(private-routes)/(users)/types/User";

interface Props {
  session?: Session | null;
  user?: IUser | null | undefined;
}

const MobileNav = ({ session, user }: Props) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const ong = user?.ong;

  const NavMenuRoutes = () => {
    return (
      <nav className='my-4 flex flex-col gap-2 pb-10 pl-6'>
        <OngsMenuRoutes />
        <ActionsMenuRoutes />
      </nav>
    );
  };

  const isOngSelected = (path: string) => pathname === path;

  const OngsMenuRoutes = () => {
    return (
      <div>
        <span className='text-lg font-bold'>Ongs</span>
        <div className='ml-4 flex flex-col gap-1'>
          <MobileLink href='/ongs' onOpenChange={setOpen}>
            <span
              className={cn(
                "transition-colors hover:text-primary/80",
                isOngSelected("/ongs") ? "text-primary" : "text-foreground/60"
              )}
            >
              Listar Ongs
            </span>
          </MobileLink>
          {session && (
            <>
              {ong ? (
                <MobileLink href={`/ongs/${ong.id}`} onOpenChange={setOpen}>
                  <span
                    className={cn(
                      "transition-colors hover:text-primary/80",
                      isOngSelected(`/ongs/${ong.id}`)
                        ? "text-primary"
                        : "text-foreground/60"
                    )}
                  >
                    Minha Ong
                  </span>
                </MobileLink>
              ) : (
                <MobileLink href='/ongs/create' onOpenChange={setOpen}>
                  <span
                    className={cn(
                      "transition-colors hover:text-primary/80",
                      isOngSelected("/ongs/create")
                        ? "text-primary"
                        : "text-foreground/60"
                    )}
                  >
                    Criar Ong
                  </span>
                </MobileLink>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  const ActionsMenuRoutes = () => {
    return (
      <div>
        <span className='text-lg font-bold'>Ação</span>
        <div className='ml-4 flex flex-col gap-1'>
          <MobileLink href='/actions' onOpenChange={setOpen}>
            <span
              className={cn(
                "transition-colors hover:text-primary/80",
                isOngSelected("/actions")
                  ? "text-primary"
                  : "text-foreground/60"
              )}
            >
              Listar Ação
            </span>
          </MobileLink>
          {session && (
            <>
              <MobileLink href='/actions/create' onOpenChange={setOpen}>
                <span
                  className={cn(
                    "transition-colors hover:text-primary/80",
                    isOngSelected("/actions/create")
                      ? "text-primary"
                      : "text-foreground/60"
                  )}
                >
                  Criar Ação
                </span>
              </MobileLink>
              {ong && (
                <MobileLink href='/actions/my-actions' onOpenChange={setOpen}>
                  <span
                    className={cn(
                      "transition-colors hover:text-primary/80",
                      isOngSelected("/actions/my-actions")
                        ? "text-primary"
                        : "text-foreground/60"
                    )}
                  >
                    Minhas Ações
                  </span>
                </MobileLink>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='flex sm:hidden'>
        <IoMdMenu className='h-6 w-6' />
      </SheetTrigger>
      <SheetContent className='w-[350px]' side='left'>
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <NavMenuRoutes />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
