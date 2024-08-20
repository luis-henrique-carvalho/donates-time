import PageContainer from "@/components/layout/PageContainer";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";
import { fetchActionById } from "../../../actions/fetchActionById";
import ActionCard from "../../../components/ActionCard";

const ActionDetails = async ({ params }: { params: { action_id: string } }) => {
  const { data, error } = await fetchActionById(params.action_id);

  if (error) {
    console.error(error);
  }

  return (
    <>
      {data ? (
        <>
          <main className='flex min-h-[95%] flex-col gap-4 bg-muted/40 md:gap-8 md:p-8'>
            <AspectRatio ratio={12 / 3} className='bg-muted'>
              <Image
                src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
                alt='Photo by Drew Beamer'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
            <ActionCard action={data} variant='show' />
          </main>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default ActionDetails;
