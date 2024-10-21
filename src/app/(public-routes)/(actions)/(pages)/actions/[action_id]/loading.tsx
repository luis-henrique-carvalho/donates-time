import React from "react";
// Components
import Search from "@/components/molecules/Seach";
import PageContainer from "@/components/layout/PageContainer";
import { ActionSkeletonCard } from "../../../components/ActionSkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <PageContainer>
      <div className='flex flex-grow flex-col gap-4'>
        <Search placeholder={"Pesquise pelo nome da ação"} />

        <div className='flex flex-grow flex-col gap-4'>
          <ActionSkeletonCard />
        </div>

        <div className='mt-5 flex w-full justify-center'>
          <Skeleton />
        </div>
      </div>
    </PageContainer>
  );
};

export default Loading;
