import React from "react";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Types
import { IOng } from "@/app/(public-routes)/(ongs)/types";
// Form
import Ongform from "@/app/(public-routes)/(ongs)/components/Ongform";
interface Props {
  ong: IOng;
}

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
