import { MapComponent } from "@/components/molecules/Map";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IOng } from "../types";
// Utils
import { format } from "date-fns";

type Props = {
  ong: IOng;
};

const OngAsideCard: React.FC<Props> = ({ ong }) => {
  const { name, description, email, created_at } = ong;

  const formattedCreatedAt = format(new Date(created_at), "dd/MM/yyyy");
  return (
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
  );
};

export default OngAsideCard;
