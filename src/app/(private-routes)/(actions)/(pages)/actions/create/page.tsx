import { fetchUserById } from "@/app/(private-routes)/(users)/actions";
import ActionForm from "@/app/(public-routes)/(actions)/components/ActionForm";
import ActionNoOngFound from "@/app/(public-routes)/(actions)/components/ActionNoOngFound";
import PageContainer from "@/components/layout/PageContainer";
import { getSessionUtils } from "@/utils";
import Link from "next/link";
import React from "react";

const ActionsCreate = async () => {
  const session = await getSessionUtils();
  const user = await fetchUserById(session?.user.id);

  if (!user || "error" in user) {
    return <div>Erro: {user.error || "Falha ao carregar usuário."}</div>;
  }

  const { ong } = user.data;

  if (!ong) {
    return <ActionNoOngFound />;
  }

  return (
    <PageContainer title='Crie Sua Ação'>
      <div className='flex flex-col gap-4'>
        <p className='text-muted-foreground'>
          <span className='font-semibold text-primary dark:text-white'>
            Observações:
          </span>{" "}
          A ação será criada para a sua ONG:{" "}
          <Link
            href={`/ongs/${ong.id}`}
            className='text-primary dark:text-white'
          >
            {ong.name}
          </Link>
        </p>
        <div className='flex flex-grow flex-col gap-4'>
          <ActionForm ong_id={ong.id} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ActionsCreate;
