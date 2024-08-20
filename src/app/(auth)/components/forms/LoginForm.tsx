"use client";
// Flow
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Schemas
import { signInFormData, signInSchema } from "../../schemas";
// Components
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Hooks
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<signInFormData>({
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(data: z.infer<typeof signInSchema>) {
    setIsLoading(true);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      console.error(result.error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid email or password",
      });
      return;
    }

    toast({
      variant: "primary",
      title: "Success",
      description: "You have successfully logged in",
    });

    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder='Digite seu E-mail' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex w-full justify-between'>
                <FormLabel>Senha</FormLabel>
                <Link
                  href='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Digite seu Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit' disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </Button>
        {/* <Button variant='outline' className='w-full'>
          Login with Google
        </Button> */}
      </form>
    </Form>
  );
}
