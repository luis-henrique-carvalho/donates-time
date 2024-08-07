import React from 'react'
import { IAction } from '../../(actions)/types'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    action: IAction
}

const OngActionCard = ({ action }: Props) => {
    return (

        <Card className='flex p-4 h-36 justify-between items-center bg-card/60'>
            <picture className='relative w-2/5 h-full'>
                <Image
                    src='https://plus.unsplash.com/premium_photo-1721858124916-c304fc371931?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='Photo by Drew Beamer'
                    layout='fill'
                    className='object-cover rounded-md'
                />
            </picture>

            <div className='flex flex-col'>
                <CardHeader className='p-2'>
                    <CardTitle className='text-sm line-clamp-1'>{action.title}</CardTitle>
                    <CardDescription>
                        <span className='font-bold text-primary mr-1'>Categoria:</span>
                        {action.category}
                    </CardDescription>
                </CardHeader>

                <CardFooter className='justify-between p-2'>
                    <p>16 vagas</p>
                    <Link
                        className={`${buttonVariants({ variant: "default" })} w-1/2`}
                        href={`/actions/${action.id}`}
                    >
                        Detalhes
                    </Link>
                </CardFooter>
            </div>

        </Card>

    )
}

export default OngActionCard
