import React, { Suspense } from 'react';
import { fetchOngs } from '../../actions';
import { IOngResponse } from '../../types';
import OngList from '../../components/OngList';
import PageContainer from '@/components/layout/PageContainer';
import Search from '@/components/molecules/Seach';
import { SkeletonCard } from '@/components/molecules/SkeletonCard';
import Págination from '@/components/molecules/Pagination';

const OngsPage = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const response = await fetchOngs(query, currentPage);

    if ("error" in response) {
        return <div>Error: {response.error}</div>;
    }

    return (
        <PageContainer title='Ongs'>
            <div className='flex-grow flex flex-col gap-4'>
                <Search placeholder={"Pesquise pelo nome da ong"} />

                <div>
                    <Suspense key={query + currentPage} fallback={<SkeletonCard />}>
                        <OngList ongs={response.data} />
                    </Suspense>
                </div>

                <div className="mt-5 flex w-full justify-center">
                    <Págination pagy={response.pagy} />
                </div>
            </div>
        </PageContainer>
    );
};

export default OngsPage;
