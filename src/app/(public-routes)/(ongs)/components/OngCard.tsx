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
import Link from 'next/link';
import { Check } from "lucide-react"
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';


type Props = {
    ong: IOng;
};

const OngCard = ({ ong }: Props) => {
    const formattedDate = format(new Date(ong.attributes.created_at), 'dd MMMM yyyy');

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ong.attributes.name}</CardTitle>
                <CardDescription> <span className='font-bold text-primary'>Categoria:</span> {ong.attributes.category}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-primary text-center">
                            Descrição
                        </h3>
                        <div className='flex flex-col justify-between'>
                            <span className='font-bold text-primary'>Cidade:</span>
                            <span>{ong.attributes.city}-{ong.attributes.state}</span>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='font-bold text-primary'>Data de criação:</span>
                            <span>{formattedDate}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {ong.attributes.description}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Check className="mr-2 h-4 w-4" /> Ver detalhes
                </Button>
            </CardFooter>
        </Card>
    );
};

export default OngCard;
