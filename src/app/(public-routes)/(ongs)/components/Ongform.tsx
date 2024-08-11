"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ongFormData, ongSchema } from "../schema";

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

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IongCategory } from "../schema/ongSchema";
import { Textarea } from "@/components/ui/textarea";
import { createOng } from "../actions/createOng";

const Ongform = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<ongFormData>({
    resolver: zodResolver(ongSchema),
  });

  async function onSubmit(data: ongFormData) {
    setIsLoading(true);
    const response = await createOng(data);

    if ("error" in response) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
      setIsLoading(false);

      return;
    }

    toast({
      variant: "primary",
      title: "Success",
      description: `Ong ${response.data.name} criada com sucesso`,
    });

    setIsLoading(false);

    router.replace(`/ongs`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-5'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Ong</FormLabel>
              <FormControl>
                <Input placeholder='Digite o Nome da Ong' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder='Digite o E-mail da Ong' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    {Object.values(IongCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input placeholder='Digite a Cidade da Ong' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem className='sm:w-1/2'>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder='Digite o Estado da Ong' {...field} />
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
                  placeholder='Digite a Descrição da Ong'
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
          {isLoading ? "Loading..." : "Criar Ong"}
        </Button>
      </form>
    </Form>
  );
};

export default Ongform;
