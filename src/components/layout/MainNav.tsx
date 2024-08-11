import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
// Config
import { siteConfig } from "@/config/site";
// Utils
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { IUser } from "@/app/(private-routes)/(users)/types/User";

interface MainNavProps {
  session?: Session | null;
  user?: IUser | null | undefined;
}

const MainNav = ({ session, user }: MainNavProps) => {
  const ong = user?.ong;

  console.log(ong);

  return (
    <div className='mr-4 hidden sm:flex'>
      <Link href='/' className='mr-4 flex items-center space-x-2 lg:mr-6'>
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className='border-none'>
          {/* Ongs Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Ongs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2'>
                <div className={`${!session && "col-span-2 text-center"}`}>
                  <ListItem title='Listar Ongs' href='/ongs' />
                </div>
                {user && (
                  <>
                    {ong ? (
                      <ListItem title='Minha Ong' href={`/ongs/my-ong`} />
                    ) : (
                      <ListItem title='Criar Ong' href='/ongs/create' />
                    )}
                  </>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Ação Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Ação</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2'>
                <ListItem title='Listar Ações' href='/actions' />
                {session && (
                  <ListItem title='Criar Ação' href='/actions/create' />
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default MainNav;
