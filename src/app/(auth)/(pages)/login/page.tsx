// Next
import Image from "next/image";
import Link from "next/link";
// Components
import { LoginForm } from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <div className='container w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='hidden bg-muted lg:block'>
        <Image
          src='/placeholder.svg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Faça login para acessar sua conta
            </p>
          </div>
          <LoginForm />
          <div className='mt-4 text-center text-sm'>
            <span>Não tem uma conta? </span>
            <Link href='/register' className='underline'>
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
