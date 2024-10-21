"use client";

import * as React from "react";
import { usePathname } from 'next/navigation';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavRoutes } from "@/config/routes";

type BreadcrumbItem = {
    title: string;
    url: string;
};

const BreadcrumbComponent = () => {
    const pathname = usePathname();

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const breadcrumbs: BreadcrumbItem[] = [];
        const path = pathname || "/";  // URL atual

        NavRoutes.navMain.forEach((navItem) => {
            if (path.startsWith(navItem.url)) {
                breadcrumbs.push({ title: navItem.title, url: navItem.url });

                if (navItem.items) {
                    navItem.items.forEach((subItem) => {
                        if (path === subItem.url) {
                            breadcrumbs.push({ title: subItem.title, url: subItem.url });
                        }
                    });
                }
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={breadcrumb.url}>
                                {breadcrumb.title}
                            </BreadcrumbLink>
                            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbComponent;
