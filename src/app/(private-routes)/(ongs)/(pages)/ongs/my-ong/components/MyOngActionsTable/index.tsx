import React from "react";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import { IAction } from "@/app/(public-routes)/(actions)/types";

type Props = {
  data: IAction[];
};

const MyOngActionsTable = ({ data }: Props) => {
  return <DataTable columns={columns} data={data} />;
};

export default MyOngActionsTable;
