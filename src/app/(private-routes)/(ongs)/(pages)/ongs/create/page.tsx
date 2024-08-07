import Ongform from "@/app/(public-routes)/(ongs)/components/Ongform";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";

const OngsCreate = () => {
  return (
    <PageContainer title='Crie Sua Ong'>
      <div className='flex flex-grow flex-col gap-4'>
        <Ongform />
      </div>
    </PageContainer>
  );
};

export default OngsCreate;
