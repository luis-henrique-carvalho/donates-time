import Ongform from "@/app/(public-routes)/(ongs)/components/Ongform";
import { IOng } from "@/app/(public-routes)/(ongs)/types";
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  ong: IOng;
};

function MyOngEdit({ ong }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Editar ONG</CardTitle>
      </CardHeader>
      <CardContent>
        <Ongform ong={ong} />
      </CardContent>
    </Card>
  );
}

export default MyOngEdit;
