import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='rounde container h-14 min-h-screen items-center p-5'>
      {children}
    </div>
  );
};

export default Container;
