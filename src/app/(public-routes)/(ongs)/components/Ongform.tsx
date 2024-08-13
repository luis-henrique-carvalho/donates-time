"use client";

import { useState } from "react";
// Zod
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import FormFieldWithLabel from "@/components/molecules/FormFieldWithLabel";
// Types
import { ongFormData, ongSchema } from "../schema";
import { IOng } from "../types";
// Actions
import { createOng, updateOng } from "../actions";
// Hooks
import { useForm } from "react-hook-form";
// Next
import { useRouter } from "next/navigation";

interface OngFormProps {
  ong?: IOng;
}

const OngForm = ({ ong }: OngFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<ongFormData>({
    resolver: zodResolver(ongSchema),
    defaultValues: {
      name: ong?.name,
      email: ong?.email,
      category: ong?.category,
      city: ong?.city,
      state: ong?.state,
      description: ong?.description,
    },
  });

  const handleSubmission = async (data: ongFormData, isUpdate: boolean) => {
    setIsLoading(true);

    const response = isUpdate
      ? await updateOng(data, ong?.id!)
      : await createOng(data);

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
    }

    setIsLoading(false);

    if (isUpdate) {
      router.refresh();
    } else {
      router.push(`/ongs`);
    }
  };

  const onSubmit = (data: ongFormData) => handleSubmission(data, !!ong?.id);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-5'>
        <FormFieldWithLabel
          control={form.control}
          name='name'
          label='Nome da Ong'
          placeholder='Digite o Nome da Ong'
        />
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormFieldWithLabel
            control={form.control}
            name='email'
            label='E-mail'
            placeholder='Digite o E-mail da Ong'
            className='sm:w-1/2'
          />
          <FormFieldWithLabel
            control={form.control}
            name='category'
            label='Categoria'
            placeholder='Selecione a Categoria'
            renderSelect
            className='sm:w-1/2'
          />
        </div>
        <div className='flex flex-col justify-between gap-4 sm:flex-row'>
          <FormFieldWithLabel
            control={form.control}
            name='city'
            label='Cidade'
            placeholder='Digite a Cidade da Ong'
            className='sm:w-1/2'
          />
          <FormFieldWithLabel
            control={form.control}
            name='state'
            label='Estado'
            placeholder='Digite o Estado da Ong'
            className='sm:w-1/2'
          />
        </div>
        <FormFieldWithLabel
          control={form.control}
          name='description'
          label='Descrição'
          placeholder='Digite a Descrição da Ong'
          textarea
        />
        <Button className='mt-10 w-full' type='submit' disabled={isLoading}>
          {isLoading ? "Loading..." : ong?.id ? "Atualizar Ong" : "Criar Ong"}
        </Button>
      </form>
    </Form>
  );
};

export default OngForm;
