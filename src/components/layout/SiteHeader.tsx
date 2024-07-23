'use client'

import React from 'react'
import MainNav from './MainNav'
import MobileNav from './MobileNav'
import ThemeToggle from '../molecules/ThemeToggle'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import UserNav from '@/components/molecules/UserNav'

type Props = {}

const SiteHeader: React.FC<Props> = () => {
    const { data: session } = useSession()

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                <MobileNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="ml-auto flex items-center space-x-4">
                        {session ? (
                            <UserNav session={session} />
                        ) : (
                            <div className='flex items-center space-x-4'>
                                <Link href="/auth/login">
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Sign in</span>
                                </Link>

                                <Link href="/auth/register">
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Register</span>
                                </Link>
                            </div>
                        )}
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default SiteHeader
