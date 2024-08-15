import { fetchActionById } from "@/app/(public-routes)/(actions)/actions/fetchActionById";
import PageContainer from "@/components/layout/PageContainer";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ActionForm from "@/app/(public-routes)/(actions)/components/ActionForm";
import { getSessionUtils } from "@/utils";

const ActionEdit = async ({ params }: { params: { action_id: string } }) => {
  const { data, error } = await fetchActionById(params.action_id);
  const session = await getSessionUtils();

  if (data?.ong.user_id !== session?.user.id) {
    return (
      <PageContainer title='Erro'>
        Você não tem permissão para acessar esta página
      </PageContainer>
    );
  }

  if (error) {
    return <PageContainer title='Erro'>{error}</PageContainer>;
  }

  return (
    <PageContainer title={`Editar ação ${data?.title}`}>
      <Card>
        <CardHeader>
          <CardTitle>Editar ação</CardTitle>
        </CardHeader>
        <CardContent>
          {data && <ActionForm action={data} ong_id={data.ong_id} />}
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default ActionEdit;
