import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='h-14 min-h-screen items-center rounded py-5'>
      {children}
    </div>
  );
};

export default Container;
