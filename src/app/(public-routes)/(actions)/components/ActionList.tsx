"use client";
import React from 'react';
// Components
import PaginationComponent from '@/components/molecules/Pagination';
import ActionCard from './ActionCard';
import { Input } from '@/components/ui/input';
// Store
import { useActionStore } from '../store/action.store';


const ActionList = () => {
    const {
        actions,
        isLoadingActions,
        getActions,
        actionPage,
        actionSearch,
        setActionSearch,
        actionError,
        setActionPage,
        actionPagination
    } = useActionStore();

    React.useEffect(() => {
        getActions();
    }, [actionPage, actionSearch, getActions]);

    const handlePageChange = React.useCallback((page: number) => {
        setActionPage(page);
    }, [setActionPage]);

    if (actionError) {
        return <div>Error: {actionError}</div>;
    }

    return (
        <div className='flex flex-col flex-grow bg-muted/40 gap-4 p-4 md:gap-8 md:p-8'>
            <div className='flex-grow flex flex-col gap-4'>
                <Input
                    value={actionSearch}
                    placeholder='Search actions...'
                    onChange={(e) => {
                        e.preventDefault();
                        setActionSearch(e.target.value);
                    }}
                />
                {isLoadingActions ? (
                    <div>Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {actions.map((action) => (
                            <ActionCard key={action.id} action={action} />
                        ))}
                    </div>
                )}
            </div>
            <div className='flex justify-center mt-auto'>
                {actionPagination && (
                    <PaginationComponent
                        currentPage={actionPagination.page}
                        totalPages={actionPagination.pages}
                        handlePageChange={handlePageChange}
                        series={actionPagination.series}
                    />
                )}
            </div>
        </div>
    );
};

export default ActionList;
