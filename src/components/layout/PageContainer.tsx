import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

const PageContainer = ({ children, title, className }: Props) => {
  return (
    <main
      className={cn(
        "container flex min-h-screen flex-col gap-4 rounded-xl bg-muted/40 p-4 pb-10 md:gap-8 md:p-8",
        className
      )}
    >
      {title && <h1 className='heading-1'>{title}</h1>}
      <div className='flex flex-grow flex-col'>{children}</div>
    </main>
  );
};

export default PageContainer;
