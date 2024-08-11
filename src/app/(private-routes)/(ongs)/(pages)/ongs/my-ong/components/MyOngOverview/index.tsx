import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IOng } from "@/app/(public-routes)/(ongs)/types";
import { format } from "date-fns";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { BiSolidCategory } from "react-icons/bi";
import MyOngActionsTable from "../MyOngActionsTable";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import StatsCard from "@/components/molecules/StatsCard";
import { IAction } from "@/app/(public-routes)/(actions)/types";
import { ClipboardCheck, ClipboardPen, Pickaxe, Users } from "lucide-react";

type Props = {
  ong: IOng;
};

const MyOngOverview = ({ ong }: Props) => {
  const {
    name,
    city,
    category,
    state,
    description,
    actions,
    email,
    created_at,
    volunteers_total,
    confirmed_volunteers,
    actions_slots_total,
    actions_slots_available,
  } = ong;

  const actionsTotal = actions?.length || 0;

  const formattedCreatedAt = format(created_at, "dd/MM/yyyy");

  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <StatsCard
          title='Quantidade de Ações'
          value={`${actionsTotal} ações cadastradas`}
          description='Quantidade de Ações Cadastradas'
          icon={<Pickaxe className='text-primary' />}
        />

        <StatsCard
          title='Vagas Totais'
          value={`${actions_slots_total} vagas totais`}
          description='Total de vagas disponíveis'
          icon={<ClipboardPen className='text-primary' />}
        />
        <StatsCard
          title='Vagas Disponíveis'
          value={`${actions_slots_available} vagas disponíveis`}
          description='Total de vagas disponíveis'
          icon={<ClipboardCheck className='text-primary' />}
        />
        <StatsCard
          title='Voluntários Totais'
          value={`${volunteers_total} voluntários totais`}
          description='Total de voluntários'
          icon={<Users className='text-primary' />}
        />
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-9'>
        <Card className='lg:col-span-6'>
          <CardHeader>
            <CardTitle>Lista de Ações</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <MyOngActionsTable data={actions || []} />
          </CardContent>
        </Card>
        <Card className='lg:col-span-3'>
          <CardHeader>
            <CardTitle>Detalhes da Ong</CardTitle>
            <CardDescription>Criada em {formattedCreatedAt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col'>
              <section className='flex flex-col space-y-3 p-6'>
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
              </section>

              <Separator />

              <div className='flex items-center p-6'>
                <section className='flex flex-col gap-2'>
                  <h4 className='heading-4 text-muted-foreground'>SOBRE NÓS</h4>
                  <p>{description}</p>
                </section>
              </div>

              <Separator />

              <div className='flex items-center p-4'>
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
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MyOngOverview;
