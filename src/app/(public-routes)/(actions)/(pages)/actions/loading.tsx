import React from "react";
// Components
import { SkeletonCard } from "@/components/molecules/SkeletonCard";
import Search from "@/components/molecules/Seach";
import PageContainer from "@/components/layout/PageContainer";

const Loading = () => {
  return (
    <PageContainer title='Actions'>
      <div className='flex flex-grow flex-col gap-4'>
        <Search placeholder={"Pesquise pelo nome da ação"} />

        <div className='flex flex-grow flex-col gap-4'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>

        <div className='mt-5 flex w-full justify-center'></div>
      </div>
    </PageContainer>
  );
};

export default Loading;
