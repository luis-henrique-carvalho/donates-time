"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";

import { IAction } from "@/app/(public-routes)/(actions)/types";

export const columns: ColumnDef<IAction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Título
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "start_date",
    header: () => <div className='text-right'>Data de início</div>,
    cell: ({ row }) => {
      const formatedStartDate = format(
        row.getValue("start_date"),
        "dd/MM/yyyy"
      );

      return <div className='text-right font-medium'>{formatedStartDate}</div>;
    },
  },
  {
    accessorKey: "end_date",
    header: () => <div className='text-right'>Data de início</div>,
    cell: ({ row }) => {
      const formatedEndDate = format(row.getValue("end_date"), "dd/MM/yyyy");

      return <div className='text-right font-medium'>{formatedEndDate}</div>;
    },
  },
  {
    accessorKey: "volunteer_count",
    header: "Voluntários",
    cell: ({ row }) => <div>{row.getValue("volunteer_count")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const IAction = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(IAction.id)}
            >
              Copy IAction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View IAction details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];