import React from "react";
// Actions
import { fetchUserById } from "@/app/(private-routes)/(users)/actions";
// Components
import ActionForm from "@/app/(public-routes)/(actions)/components/ActionForm";
import ActionNoOngFound from "@/app/(public-routes)/(actions)/components/ActionNoOngFound";
// Layout
import PageContainer from "@/components/layout/PageContainer";
// Utils
import { getSessionUtils } from "@/utils";
// Icons
import { LuShieldAlert } from "react-icons/lu";
import AlertWithLink from "@/components/molecules/AlertWithLink";

const ActionsCreate = async () => {
  const session = await getSessionUtils();
  const { data } = await fetchUserById(session?.user.id);

  const ong = data?.ong;

  if (!ong) {
    return <ActionNoOngFound />;
  }

  return (
    <PageContainer>
      <div className='flex flex-col gap-4'>
        <AlertWithLink
          variant='primary'
          icon={<LuShieldAlert className='h-4 w-4' />}
          title='Atenção!'
          description='A ação será criada para a sua ONG: '
          linkHref={`/ongs/my-ong`}
          linkText={ong?.name || ""}
        />
        <div className='flex flex-grow flex-col gap-4'>
          <ActionForm ong_id={ong?.id} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ActionsCreate;
