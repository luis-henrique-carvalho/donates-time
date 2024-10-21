import React from "react";
// Actions
import { fetchOngById } from "../../../actions";
// Components
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import OngActionCard from "../../../components/OngActionCard";
import OngAsideCard from "../../../components/OngAsideCard";
//  Icons
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
// Next
import Image from "next/image";
import { LuShieldAlert } from "react-icons/lu";
import { Alert, AlertDescription } from "@/components/ui/alert";

const OngDetails = async ({ params }: { params: { ong_id: string } }) => {
  const { data: ong, error } = await fetchOngById(params.ong_id);

  if (error) {
    console.error(error);
  }

  const { category, city, description, name, state, email, actions } =
    ong || {};

  return (
    <>
      {ong ? (
        <>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-10'>
            <main className='flex min-h-[95%] flex-col bg-muted/40 xl:w-8/12 xl:gap-8 xl:p-8'>
              <AspectRatio ratio={12 / 6} className='bg-muted'>
                <Image
                  src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
                  alt='Photo by Drew Beamer'
                  fill
                  className='object-cover md:rounded-md'
                />
              </AspectRatio>

              <div className='flex flex-col'>
                <header className='flex flex-col space-y-3 p-6'>
                  <h1 className='text-2xl font-semibold leading-none tracking-tight md:text-4xl'>
                    {name}
                  </h1>
                  <ul className='flex flex-col gap-2 text-base text-muted-foreground'>
                    <li className='flex items-center gap-2'>
                      <FaLocationDot className='text-primary' />
                      <span>{city}</span> - <span>{state}</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <BiSolidCategory className='text-primary' />
                      <span>{category}</span>
                    </li>
                  </ul>
                </header>

                <Separator />

                <div className='flex items-center p-6 xl:hidden'>
                  <section className='flex flex-col gap-2'>
                    <h4 className='heading-4 text-muted-foreground'>
                      SOBRE NÓS
                    </h4>
                    <p>{description}</p>
                  </section>
                </div>

                <Separator className='xl:hidden' />

                <div className='flex items-center p-6'>
                  <section className='flex w-full flex-col gap-3'>
                    <h4 className='heading-4 text-muted-foreground'>Ações</h4>
                    {actions && actions.length > 0 ? (
                      <div className='grid auto-rows-min gap-4 lg:grid-cols-2'>
                        {actions.slice(0, 6).map((action) => (
                          <OngActionCard key={action.id} action={action} />
                        ))}
                      </div>
                    ) : (
                      <Alert variant={"primary"}>
                        <LuShieldAlert className='h-4 w-4' />
                        <AlertDescription>
                          A ong ainda não possui ações cadastradas.{" "}
                        </AlertDescription>
                      </Alert>
                    )}
                  </section>
                </div>

                <Separator className='xl:hidden' />

                <div className='flex items-center p-4 xl:hidden'>
                  <section className='flex flex-col gap-2'>
                    <h4 className='heading-4 text-muted-foreground'>Contato</h4>
                    <ul className='flex flex-col gap-2 text-base'>
                      <li className='flex items-center gap-2'>
                        <MdEmail className='text-2xl text-primary' />
                        <span>{email}</span>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </main>
            <OngAsideCard ong={ong} />
          </div>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default OngDetails;
