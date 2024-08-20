"use client";
import React, { useState } from "react";

// Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Hooks
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { actionFormData, actionSchema } from "../schema";
import { IactionCategory } from "../schema/actionSchema";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { IAction } from "../types";
import { updateAction, createAction } from "../actions";

interface Props {
  ong_id: string;
  action?: IAction;
}

const ActionForm = ({ ong_id, action }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const from_date = action?.start_date
    ? new Date(action.start_date)
    : new Date();
  const to_date = action?.end_date ? new Date(action.end_date) : new Date();

  const form = useForm<actionFormData>({
    resolver: zodResolver(actionSchema),
    defaultValues: {
      title: action?.title || "",
      category: action?.category || IactionCategory.Education,
      max_volunteers: action?.max_volunteers || 0,
      dateRange: {
        from: from_date,
        to: to_date,
      },
      description: action?.description || "",
      ong_id,
    },
  });

  async function handleSubmission(data: actionFormData, isUpdate: boolean) {
    setIsLoading(true);
    const response = isUpdate
      ? await updateAction(data, action?.id!)
      : await createAction(data);

    if ("error" in response) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    } else {
      toast({
        variant: "default",
        title: "Success",
        description: response.data.message,
      });
      router.push(`/ongs/my-ong`);
    }

    setIsLoading(false);
  }

  const onSubmit = (data: actionFormData) =>
    handleSubmission(data, !!action?.id);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-5'>
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Título da Ação</FormLabel>
                <FormControl>
                  <Input placeholder='Digite o Título da Ação' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dateRange'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Start and End Date</FormLabel>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <Button
                      id='date'
                      variant='outline'
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {field.value.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='center'>
                    <Calendar
                      initialFocus
                      mode='range'
                      defaultMonth={field.value.from}
                      selected={{
                        from: field.value.from!,
                        to: field.value.to,
                      }}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Select the start and end date</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione a Categoria' />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(IactionCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='max_volunteers'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Número Máximo de Voluntários</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Digite o Número Máximo de Voluntários'
                    type='number'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Digite a Descrição da Ação'
                  className='h-52 resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-10 w-full' type='submit' disabled={isLoading}>
          {isLoading
            ? "Loading..."
            : action?.id
              ? "Atualizar Ação"
              : "Criar Ação"}
        </Button>
      </form>
    </Form>
  );
};

export default ActionForm;
