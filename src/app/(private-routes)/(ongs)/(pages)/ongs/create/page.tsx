import Ongform from "@/app/(public-routes)/(ongs)/components/Ongform";
import PageContainer from "@/components/layout/PageContainer";
import { getSessionUtils } from "@/utils";
import { redirect } from "next/navigation";

import React from "react";

const OngsCreate = async () => {
  const session = await getSessionUtils();

  if (session?.user?.ong) {
    redirect("/ongs/my-ong");
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
