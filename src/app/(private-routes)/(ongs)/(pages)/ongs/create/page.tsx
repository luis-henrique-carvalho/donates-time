import Ongform from "@/app/(public-routes)/(ongs)/components/Ongform";
import PageContainer from "@/components/layout/PageContainer";
import { fetchOngByUserId } from "@/app/(public-routes)/(ongs)/actions/fetchOngByUserId";
import CannotProceed from "@/components/layout/CannotProceed";
import { redirect } from "next/navigation";
import React from "react";

const OngsCreate = async () => {
  const ongByUser = await fetchOngByUserId();

  if (ongByUser.data) {
    return (
      <CannotProceed
        pageTitle='Não é possível prosseguir'
        title='Você já possui uma ONG cadastrada'
        description='Você já possui uma ONG cadastrada, clique no botão abaixo para acessar a página da sua ONG'
        link='/ongs/my-ong'
      />
    );
  }

  return (
    <PageContainer title='Crie Sua Ong'>
      <div className='flex flex-grow flex-col gap-4'>
        <Ongform />
      </div>
    </PageContainer>
  );
};

export default OngsCreate;
