import React from 'react'

type Props = {
    children: React.ReactNode
    title?: string
}

const PageContainer = ({ children, title }: Props) => {
    return (
        <main className='flex rounded-xl min-h-[95%] bg-muted/40 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            {
                title &&
                <h1 className='heading-1'>{title}</h1>
            }
            <div className='flex flex-col flex-grow'>
                {children}
            </div>
        </main>
    )
}

export default PageContainer
