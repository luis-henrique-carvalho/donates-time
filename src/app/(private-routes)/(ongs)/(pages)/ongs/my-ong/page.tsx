import React from "react";
// Actions

// Components

//  Icons

// Next

import { fetchOngByUserId } from "@/app/(public-routes)/(ongs)/actions";
import PageContainer from "@/components/layout/PageContainer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MyOngOverview from "./components/MyOngOverview";

const MyOng = async () => {
  const { data: ong, error } = await fetchOngByUserId();

  return (
    <>
      {ong ? (
        <>
          <PageContainer title='Minha Ong'>
            <Tabs defaultValue='overview' className='space-y-4'>
              <TabsList>
                <TabsTrigger value='overview'>Overview</TabsTrigger>
                <TabsTrigger value='analytics' disabled>
                  Analytics
                </TabsTrigger>
                <TabsTrigger value='reports' disabled>
                  Reports
                </TabsTrigger>
              </TabsList>
              <TabsContent value='overview' className='space-y-4'>
                <MyOngOverview ong={ong} />
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
