import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container p-5 bg-muted/40 h-14 min-h-screen items-center">
            {children}
        </div>
    )
}

export default Container
