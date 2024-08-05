import React, { Suspense } from 'react';
// Components
import ActionList from '../../components/ActionList';
import PageContainer from '@/components/layout/PageContainer';
import { fetchActions } from '../../actions';
import { SkeletonCard } from '@/components/molecules/SkeletonCard';
import Págination from '@/components/molecules/Pagination';
import Search from '@/components/molecules/Seach';

const Actions = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const response = await fetchActions(query, currentPage);

    if ("error" in response) {
        return <div>Error: {response.error}</div>;
    }

    return (
        <PageContainer title='Actions'>
            <div className='flex-grow flex flex-col gap-4'>
                <Search placeholder={"Pesquise pelo nome da ação"} />

                <div>
                    <Suspense key={query + currentPage} fallback={<SkeletonCard />}>
                        <ActionList actions={response.data} />
                    </Suspense>
                </div>

                <div className="mt-5 flex w-full justify-center">
                    <Págination pagy={response.pagy} />
                </div>
            </div>
        </PageContainer>
    );
}

export default Actions;
