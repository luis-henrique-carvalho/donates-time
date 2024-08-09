import React from "react";
// Actions
import { fetchUserById } from "@/app/(private-routes)/(users)/actions";
// Components
import ActionForm from "@/app/(public-routes)/(actions)/components/ActionForm";
import ActionNoOngFound from "@/app/(public-routes)/(actions)/components/ActionNoOngFound";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// Layout
import PageContainer from "@/components/layout/PageContainer";
// Utils
import { getSessionUtils } from "@/utils";
// Next
import Link from "next/link";
// Icons
import { LuShieldAlert } from "react-icons/lu";

const ActionsCreate = async () => {
  const session = await getSessionUtils();
  const { data, error } = await fetchUserById(session?.user.id);

  const ong = data?.ong;

  if (!ong) {
    return <ActionNoOngFound />;
  }

  return (
    <PageContainer title='Crie Sua Ação'>
      <div className='flex flex-col gap-4'>
        <Alert variant='primary'>
          <LuShieldAlert className='h-4 w-4' />
          <AlertTitle>Atenção!</AlertTitle>
          <AlertDescription>
            A ação será criada para a sua ONG:{" "}
            <Link
              href={`/ongs/${ong?.id}`}
              className='text-primary dark:text-white'
            >
              {ong?.name}
            </Link>
          </AlertDescription>
        </Alert>
        <div className='flex flex-grow flex-col gap-4'>
          <ActionForm ong_id={ong?.id} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ActionsCreate;
