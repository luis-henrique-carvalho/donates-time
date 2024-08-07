import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='rounde h-14 min-h-screen items-center py-5'>{children}</div>
  );
};

export default Container;
