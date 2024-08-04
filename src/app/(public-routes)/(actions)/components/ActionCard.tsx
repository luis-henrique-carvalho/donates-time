import React from 'react';
// Types
import { IAction } from '../types';
// Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
// Icons
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaCalendarTimes } from "react-icons/fa";
// Utils
import { format } from 'date-fns';
// Next
import Link from 'next/link';

type Props = {
    action: IAction;
}

const ActionCard = ({ action }: Props) => {
    const { title, status, ong, start_date, end_date, max_volunteers, volunteers_count, category, description } = action.attributes;

    const formattedStartDate = start_date ? format(new Date(start_date), "dd/MM/yyyy 'às' HH'hrs'") : 'N/A';
    const formattedEndDate = end_date ? format(new Date(end_date), "dd/MM/yyyy 'às' HH'hrs'") : 'N/A';
    const volunteerPercentage = max_volunteers > 0 ? (volunteers_count / max_volunteers) * 100 : 0;

    return (
        <Card>
            <CardHeader className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
                    <div className='flex flex-row justify-between items-center'>
                        <p><span className='font-semibold'>Categoria:</span> {category}</p>
                        <Badge variant={status} className='text-sm'>{status}</Badge>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <div className='flex items-center gap-2'>
                        <CgProfile className='text-primary' /> <span className='font-semibold'>ONG:</span> {ong.name}
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCalendarAlt className='text-primary' /> <span className='font-semibold'>Início:</span> {formattedStartDate}
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCalendarTimes className='text-primary' /> <span className='font-semibold'>Fim:</span> {formattedEndDate}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between bold'>
                        <p>Voluntários</p>
                        <p className='font-bold'>{volunteerPercentage.toFixed(0)} %</p>
                    </div>
                    <Progress value={volunteerPercentage} />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className='line-clamp-5'>
                    <p>{description || 'No description available.'}</p>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <div className='flex flex-row gap-2'>
                    <Button asChild>
                        <Link href={`/actions/${action.id}`}>Ver detalhes</Link>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ActionCard;
