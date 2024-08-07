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
import { configRoutes } from "@/config/routes";
// Utils
import { cn } from "@/lib/utils";

const MainNav = () => {
  return (
    <div className='mr-4 hidden sm:flex'>
      <Link href='/' className='mr-4 flex items-center space-x-2 lg:mr-6'>
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className='border-none'>
          {configRoutes.navMenuRoutes.map((route) => (
            <NavigationMenuItem key={route.href}>
              <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[300x] gap-3 p-4 md:w-[400px] md:grid-cols-2'>
                  {route.actions?.map((action) => (
                    <ListItem
                      key={action.title}
                      title={action.title}
                      href={action.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
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
  );
});

export default MainNav;
