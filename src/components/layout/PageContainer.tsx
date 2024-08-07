import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const PageContainer = ({ children, title }: Props) => {
  return (
    <main className='container flex min-h-[95%] flex-col gap-4 rounded-xl bg-muted/40 p-4 md:gap-8 md:p-8'>
      {title && <h1 className='heading-1'>{title}</h1>}
      <div className='flex flex-grow flex-col'>{children}</div>
    </main>
  );
};

export default PageContainer;
