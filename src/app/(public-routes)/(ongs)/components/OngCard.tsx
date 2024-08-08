// src/app/(public-routes)/(ongs)/components/OngCard.tsx
import React from "react";
// Components
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Types
import { IOng } from "../types";
// Icons
import { Check } from "lucide-react";
// Utils
import { format } from "date-fns";
// Next
import Link from "next/link";

type Props = {
  ong: IOng;
};

const OngCard = ({ ong }: Props) => {
  const formattedDate = format(new Date(ong.created_at), "dd MMMM yyyy");

  return (
    <Card className='flex flex-col justify-between'>
      <CardHeader>
        <CardTitle>{ong.name}</CardTitle>
        <CardDescription>
          <span className='font-bold text-primary'>Categoria:</span>
          {ong.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex items-center space-x-4 p-4'>
          <div className='w-full space-y-2'>
            <h3 className='text-center font-bold text-primary'>Descrição</h3>
            <div className='flex flex-col justify-between'>
              <span className='font-bold text-primary'>Cidade:</span>
              <span>
                {ong.city}-{ong.state}
              </span>
            </div>
            <div className='flex flex-col justify-between'>
              <span className='font-bold text-primary'>Data de criação:</span>
              <span>{formattedDate}</span>
            </div>
            <p className='text-sm text-muted-foreground break-all line-clamp-3'>{ong.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          className={`${buttonVariants({ variant: "default" })} w-full`}
          href={`/ongs/${ong.id}`}
        >
          <Check className='mr-2 h-4 w-4' />
          Detalhes
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OngCard;
