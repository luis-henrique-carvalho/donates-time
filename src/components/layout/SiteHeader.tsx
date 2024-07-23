import React from 'react'
import MainNav from './MainNav'
import MobileNav from './MobileNav'

type Props = {}

const SiteHeader = (props: Props) => {
    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                <MobileNav />
            </div>
        </header>
    )
}

export default SiteHeader
