import React from "react";
// Types
import { IAction } from "../types";
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
// Icons
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaCalendarTimes } from "react-icons/fa";
// Utils
import { format } from "date-fns";
// Next
import Link from "next/link";
import CreateVolunteerButton from "@/app/(private-routes)/(volunteers)/components/CreateVolunteerButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  action: IAction;
  variant?: "default" | "show";
};

const ActionCard = ({ action, variant = "default" }: Props) => {
  const {
    title,
    status,
    ong,
    start_date,
    end_date,
    max_volunteers,
    volunteer_count,
    category,
    description,
  } = action;
  const { volunteers } = action;

  console.log(volunteers);
  const isPageShow = variant === "show";

  const formattedStartDate = start_date
    ? format(new Date(start_date), "dd/MM/yyyy 'às' HH'hrs'")
    : "N/A";
  const formattedEndDate = end_date
    ? format(new Date(end_date), "dd/MM/yyyy 'às' HH'hrs'")
    : "N/A";
  const volunteerPercentage =
    max_volunteers > 0 ? (volunteer_count / max_volunteers) * 100 : 0;

  return (
    <Card variant={variant} className='p-4'>
      <article>
        <CardHeader className='flex flex-col gap-4'>
          <header className='flex flex-col gap-3'>
            <CardTitle
              className={` ${isPageShow ? "text-2xl" : "text-lg"} font-semibold`}
            >
              {title}
            </CardTitle>
            <div className='flex flex-row items-center justify-between'>
              <p>
                <span className='font-semibold'>Categoria:</span> {category}
              </p>
              <Badge variant={status} className='text-md'>
                {status}
              </Badge>
            </div>
          </header>
          <section
            className={`flex flex-col gap-2 ${isPageShow ? "text-base" : "text-sm"}`}
          >
            <div className='flex items-center gap-2'>
              <CgProfile className='text-primary' />
              <span className='font-semibold'>ONG:</span> {ong.name}
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-primary' />
              <span className='font-semibold'>Início:</span>
              {formattedStartDate}
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarTimes className='text-primary' />
              <span className='font-semibold'>Fim:</span> {formattedEndDate}
            </div>
          </section>
          <section className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <div className='bold flex flex-row justify-between'>
                <p>Voluntários</p>
                <p className='font-bold'>{volunteerPercentage.toFixed(0)}%</p>
              </div>
              <Progress value={volunteerPercentage} />
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
              {volunteers.map((volunteer, index) => {
                return (
                  <Avatar key={index}>
                    <AvatarImage src={volunteer.id} />
                    <AvatarFallback>
                      {volunteer.user_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                );
              })}
            </div>
          </section>
        </CardHeader>
        <CardContent>
          <section>
            <h4 className='mb-2 text-lg font-medium'>Descrição</h4>
            <CardDescription className='line-clamp-5'>
              {description || "No description available."}
            </CardDescription>
          </section>
        </CardContent>
        <CardFooter className='flex flex-row justify-between'>
          <div className='flex gap-2'>
            {variant === "default" && (
              <Button asChild>
                <Link href={`/actions/${action.id}`}>Detalhes</Link>
              </Button>
            )}
          </div>

          <div className='flex gap-2'>
            <CreateVolunteerButton action_id={action.id} />
          </div>
        </CardFooter>
      </article>
    </Card>
  );
};

export default ActionCard;
