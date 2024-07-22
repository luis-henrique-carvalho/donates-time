import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface PublicLayoutProps {
    children: ReactNode
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <>
            <h1>PublicLayout</h1>
            {children}
        </>
    )
}
