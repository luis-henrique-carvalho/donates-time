import { fetchUserById } from "@/app/(private-routes)/(users)/actions";
import ActionForm from "@/app/(public-routes)/(actions)/components/ActionForm";
import PageContainer from "@/components/layout/PageContainer";
import { getSessionUtils } from "@/utils";
import { redirect } from "next/navigation";

import React from "react";

const ActionsCreate = async () => {
  const session = await getSessionUtils();
  const user = await fetchUserById(session?.user.id);

  if (!user || "error" in user) {
    return <div>{user.error}</div>;
  }

  if (!user.data.ong) {
    redirect("/ongs/create");
  }

  return (
    <PageContainer title='Crie Sua Ação'>
      <div className='flex flex-grow flex-col gap-4'>
        <ActionForm ong_id={user.data.ong.id} />
      </div>
    </PageContainer>
  );
};

export default ActionsCreate;
