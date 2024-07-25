import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container h-14 max-w-screen-2xl items-center">
            {children}
        </div>
    )
}

export default Container
