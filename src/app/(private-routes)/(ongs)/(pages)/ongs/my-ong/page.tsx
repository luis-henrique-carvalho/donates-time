import React from "react";
// Actions
import { fetchOngByUserId } from "@/app/(public-routes)/(ongs)/actions";
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageContainer from "@/components/layout/PageContainer";
import MyOngOverview from "./components/MyOngOverview";
import MyOngEdit from "./components/MyOngEdit";

const MyOng = async () => {
  const { data: ong, error } = await fetchOngByUserId();

  return (
    <>
      {ong ? (
        <>
          <PageContainer title='Minha Ong'>
            <Tabs defaultValue='overview' className='space-y-4'>
              <TabsList>
                <TabsTrigger value='overview'>Visão geral</TabsTrigger>
                <TabsTrigger value='edit'>Editar</TabsTrigger>
                <TabsTrigger value='volunteers'>Reports</TabsTrigger>
              </TabsList>
              <TabsContent value='overview' className='space-y-4'>
                <MyOngOverview ong={ong} />
              </TabsContent>
              <TabsContent value='edit' className='space-y-4'>
                <MyOngEdit ong={ong} />
              </TabsContent>
            </Tabs>
          </PageContainer>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default MyOng;
