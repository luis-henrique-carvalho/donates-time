import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "../molecules/ThemeToggle";
import Link from "next/link";
import UserNav from "@/components/molecules/UserNav";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/nextAuthOptions";

type Props = {};

const SiteHeader = async () => {
  const session = await getServerSession(nextAuthOptions);

  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='ml-auto flex items-center space-x-4'>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
