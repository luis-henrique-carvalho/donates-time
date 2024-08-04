
import React from 'react';
// Components
import ActionList from '../../components/ActionList';

const Actions = () => {
    return (
        <main className='flex min-h-[95%] bg-muted/40 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <h1 className='heading-1'>Ações</h1>
            <ActionList />
        </main>
    );
}

export default Actions;
