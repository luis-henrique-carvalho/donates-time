import React, { Suspense } from "react";
// Components
import ActionList from "../../components/ActionList";
import PageContainer from "@/components/layout/PageContainer";
import { SkeletonCard } from "@/components/molecules/SkeletonCard";
import PaginationComponent from "@/components/molecules/PaginationComponent";
import Search from "@/components/molecules/Seach";
// Actions
import { fetchActions } from "../../actions";

const Actions = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const response = await fetchActions(query, currentPage);

  if ("error" in response) {
    return <div>Error: {response.error}</div>;
  }

  return (
    <PageContainer title='Ações Disponíveis'>
      <div className='flex flex-grow flex-col gap-4'>
        <Search placeholder={"Pesquise pelo nome da ação"} />

        <div>
          <Suspense key={query + currentPage} fallback={<SkeletonCard />}>
            <ActionList actions={response.data} />
          </Suspense>
        </div>

        <div className='mt-5 flex w-full justify-center'>
          <PaginationComponent pagy={response.pagy} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Actions;
