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

// Next
import Image from "next/image";
import OngActionCard from "../../../components/OngActionCard";

const OngDetails = async ({ params }: { params: { ong_id: string } }) => {
  const ong = await fetchOngById(params.ong_id);

  if (!ong || "error" in ong) {
    return <div>{ong.error}</div>;
  }

  const { category, city, created_at, description, name, state, email, actions } = ong

  return (
    <main className='flex min-h-[95%] flex-col bg-muted/40 md:gap-8 md:p-8'>
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
          <h1 className='text-2xl font-semibold leading-none tracking-tight'>
            {name}
          </h1>
          <ul className='flex flex-col gap-2 text-base text-muted-foreground'>
            <li className='flex items-center gap-2'>
              <FaLocationDot className='text-primary' />
              <span>{city}</span>
            </li>
            <li className='flex items-center gap-2'>
              <BiSolidCategory className='text-primary' />
              <span>{category}</span>
            </li>
          </ul>
        </header>

        <Separator />

        <div className='flex items-center p-6'>
          <section className='flex flex-col gap-2'>
            <h4 className='heading-4 text-muted-foreground'>SOBRE NÓS</h4>
            <p>{description}</p>
          </section>
        </div>

        <Separator />

        <div className='flex items-center p-6'>
          <section className='flex w-full flex-col gap-3'>
            <h4 className='heading-4 text-muted-foreground'>Ações</h4>
            {
              actions && actions.length > 0 ? (
                actions.slice(0, 5).map((action) => (
                  <OngActionCard action={action} />
                ))
              ) : (
                <p>Essa ONG ainda não possui ações cadastradas.</p>
              )
            }
          </section>
        </div>

        <Separator />

        <div className='flex items-center p-6'>
          <section className='flex flex-col gap-2'>
            <h4 className='heading-4 text-muted-foreground'>Contato</h4>
            <ul className='flex flex-col gap-2 text-base'>
              <li className='flex items-center gap-2'>
                <MdEmail className='text-primary' />
                <span>{email}</span>
              </li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
};

export default OngDetails;
