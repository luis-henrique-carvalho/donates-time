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
        "flex flex-1 flex-col gap-4 p-4 pt-0",
        className
      )}
    >
      {title && <h1 className='heading-1'>{title}</h1>}
      <div className='flex flex-grow flex-col'>{children}</div>
    </main>
  );
};

export default PageContainer;
