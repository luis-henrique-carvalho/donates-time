import React from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Components
import { RegisterForm } from "../../components/forms/RegisterForm";
import { Assets } from "@/app/(public-routes)/assets/index";

const Register = () => {
  return (
    <div className='container w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center'>
        <Assets.SignUpAmico className='max-w-60 sm:max-w-72 lg:max-w-none' />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Cadastre-se</h1>
            <p className='text-balance text-muted-foreground'>
              Crie uma conta para começar a ajudar
            </p>
          </div>
          <RegisterForm />
          <div className='mt-4 text-center text-sm'>
            <span>Já tem uma conta? </span>
            <Link href='/login' className='underline'>
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
