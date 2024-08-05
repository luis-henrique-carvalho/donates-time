import React from 'react';
import { SkeletonCard } from '@/components/molecules/SkeletonCard';
import Search from '@/components/molecules/Seach';
import PageContainer from '@/components/layout/PageContainer';

const Loading = () => {
    return (
        <PageContainer title='Actions'>
            <div className='flex-grow flex flex-col gap-4'>
                <Search placeholder={"Pesquise pelo nome da ação"} />

                <div>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>

                <div className="mt-5 flex w-full justify-center">

                </div>
            </div>
        </PageContainer>
    );
}

export default Loading;
