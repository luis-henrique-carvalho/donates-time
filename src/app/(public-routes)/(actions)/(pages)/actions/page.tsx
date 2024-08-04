"use client"
import React from 'react';
import { useActionStore } from '../../store/action.store';
import { Input } from '@/components/ui/input';
import PaginationComponent from '@/components/molecules/Pagination';

const Actions = () => {
    const { actions,
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
    }, [actionPage, actionSearch]);

    console.log(actionPagination)

    const handlePageChange = (page: number) => {
        setActionPage(page);
    }

    if (actionError) {
        return <div>Error: {actionError}</div>;
    }

    return (
        <div className='flex flex-1 min-h-[95%] bg-muted/40 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <Input
                value={actionSearch}
                onChange={(e) => {
                    e.preventDefault();
                    setActionSearch(e.target.value);
                }}
            />
            {isLoadingActions ? (
                <div>Loading...</div>
            ) : (
                <div className='flex flex-col gap-4'>
                    <div>
                        {actions.map((action) => (
                            <div key={action.id}>{action.attributes.title}</div>
                        ))}
                    </div>
                </div>

            )}
            {actionPagination && (
                <PaginationComponent
                    currentPage={actionPagination.page}
                    totalPages={actionPagination.pages}
                    handlePageChange={handlePageChange}
                    series={actionPagination.series}
                />
            )}
        </div>
    );
}

export default Actions;
