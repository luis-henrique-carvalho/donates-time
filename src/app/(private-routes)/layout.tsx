import { ReactNode } from "react";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    return (
        <>
            <h1>PrivateLayout</h1>
            {children}
        </>
    )
}
