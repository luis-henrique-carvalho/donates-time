// src/app/(public-routes)/(ongs)/components/OngCard.tsx
import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { IOng } from '../types';
import { Check } from "lucide-react"
import { Button, buttonVariants } from '@/components/ui/button';
import { format } from 'date-fns';
import Link from 'next/link';

type Props = {
    ong: IOng;
};

const OngCard = ({ ong }: Props) => {
    const formattedDate = format(new Date(ong.created_at), 'dd MMMM yyyy');

    return (
        <Card className='flex flex-col justify-between'>
            <CardHeader>
                <CardTitle>{ong.name}</CardTitle>
                <CardDescription> <span className='font-bold text-primary'>Categoria:</span> {ong.category}</CardDescription>
            </CardHeader>
            <CardContent className="h-4/5">
                <div className=" flex items-center space-x-4 rounded-md border p-4 h-full">
                    <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-primary text-center">
                            Descrição
                        </h3>
                        <div className='flex flex-col justify-between'>
                            <span className='font-bold text-primary'>Cidade:</span>
                            <span>{ong.city}-{ong.state}</span>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='font-bold text-primary'>Data de criação:</span>
                            <span>{formattedDate}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {ong.description}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>


                <Link className={`${buttonVariants({ variant: "default" })} w-full`}
                    href={`/ongs/${ong.id}`}>
                    <Check className="mr-2 h-4 w-4" />
                    Detalhes
                </Link>

            </CardFooter>
        </Card>
    );
};

export default OngCard;
