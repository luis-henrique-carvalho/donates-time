import React from "react";
import { IOng } from "../types";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  ong: IOng;
};

const OngCardDetails = ({ ong }: Props) => {
  return (
    <Card className='flex flex-col justify-between border-none'>
      <CardHeader>
        <CardTitle>SOBRE NÓS</CardTitle>
        <CardDescription>{ong.description}</CardDescription>
      </CardHeader>
      <CardContent className='h-4/5'>
        <div className='flex h-full items-center space-x-4 rounded-md border p-4'>
          <div className='flex-1 space-y-2'>
            <h3 className='text-center font-bold text-primary'>Descrição</h3>
            <div className='flex flex-col justify-between'>
              <span className='font-bold text-primary'>Cidade:</span>
              <span>
                {ong.city}-{ong.state}
              </span>
            </div>
            <div className='flex flex-col justify-between'>
              <span className='font-bold text-primary'>Data de criação:</span>
              <span>{ong.created_at}</span>
            </div>
            <p className='text-sm text-muted-foreground'>{ong.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a href={`/ongs/${ong.id}`} className='btn btn-default w-full'>
          Detalhes
        </a>
      </CardFooter>
    </Card>
  );
};

export default OngCardDetails;
