import React from "react";
// Actions
import { fetchOngById } from "../../../actions";
// Components
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OngCardDetails from "../../../components/OngCardDetails";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

//  Icons
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
// Utils
import { format } from "date-fns";

// Next
import Image from "next/image";
import OngActionCard from "../../../components/OngActionCard";
import { MapComponent } from "@/components/molecules/Map";

const OngDetails = async ({ params }: { params: { ong_id: string } }) => {
  const ong = await fetchOngById(params.ong_id);

  if (!ong || "error" in ong) {
    return <div>{ong.error}</div>;
  }

  const {
    category,
    city,
    created_at,
    description,
    name,
    state,
    email,
    actions,
  } = ong;

  const formattedCreatedAt = format(
    new Date(created_at),
    "dd/MM/yyyy 'às' HH'hrs'"
  );
  return (
    <div className='flex flex-col xl:container xl:flex-row xl:justify-between'>
      <main className='flex min-h-[95%] flex-col bg-muted/40 xl:w-7/12 xl:gap-8 xl:p-8'>
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
              <h4 className='heading-4 text-muted-foreground'>SOBRE NÓS</h4>
              <p>{description}</p>
            </section>
          </div>

          <Separator className='xl:hidden' />

          <div className='flex items-center p-6'>
            <section className='flex w-full flex-col gap-3'>
              <h4 className='heading-4 text-muted-foreground'>Ações</h4>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {actions && actions.length > 0 ? (
                  actions
                    .slice(0, 6)
                    .map((action) => <OngActionCard action={action} />)
                ) : (
                  <p>Essa ONG ainda não possui ações cadastradas.</p>
                )}
              </div>
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
      <aside className='hidden w-4/12 flex-col xl:flex'>
        <Card className='bg-muted/40' variant={"show"}>
          <MapComponent
            defaultMapCenter={{
              lat: -23.5505199,
              lng: -46.6333094,
            }}
            defaultMapZoom={12}
            defaultMapOptions={{
              zoomControl: true,
              tilt: 45,
              gestureHandling: "greedy",
              mapTypeId: "roadmap",
            }}
            className='h-48 rounded-md'
          />
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>Criado em: {formattedCreatedAt}</CardDescription>
          </CardHeader>
          <CardContent>
            <section className='flex flex-col gap-2'>
              <h4 className='heading-4 text-muted-foreground'>SOBRE NÓS</h4>
              <p>{description}</p>
            </section>
          </CardContent>
          <CardFooter>
            <section className='flex flex-col gap-2'>
              <h4 className='heading-4 text-muted-foreground'>Contato</h4>
              <ul className='flex flex-col gap-2 text-base'>
                <li className='flex items-center gap-2'>
                  <MdEmail className='text-2xl text-primary' />
                  <span className='break-all'>{email}</span>
                </li>
              </ul>
            </section>
          </CardFooter>
        </Card>
      </aside>
    </div>
  );
};

export default OngDetails;
