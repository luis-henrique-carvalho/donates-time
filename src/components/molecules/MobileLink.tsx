"use client"
// Components
import React from 'react';
import Link, { LinkProps } from 'next/link';
// Utils
import { cn } from '@/lib/utils';
// Hooks
import { useRouter } from "next/navigation"

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

const MobileLink = ({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) => {
    const router = useRouter();

    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
};

export default MobileLink;
