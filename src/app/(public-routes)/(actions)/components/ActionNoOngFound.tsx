import PageContainer from "@/components/layout/PageContainer";
import { Assets } from "@/app/(public-routes)/assets/index";
import Card, {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const ActionNoOngFound = () => (
  <PageContainer title='Crie Sua Ação'>
    <div className='w-full grid-cols-1 items-center space-y-10 lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:space-x-10 lg:space-y-0 xl:min-h-[800px]'>
      <div className='flex items-center justify-center'>
        <Assets.WarningRafiki className='sm:max-w-96 lg:max-w-none' />
      </div>
      <div>
        <Card className='justify-center-center w-full text-center'>
          <CardHeader className='pb-3'>
            <CardTitle>É necessário criar uma ONG</CardTitle>
            <CardDescription className='flex justify-center'>
              Para criar uma ação, é necessário criar uma ONG. Clique no botão
              abaixo para criar uma nova ONG.
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-center'>
            <Link
              className={buttonVariants({ variant: "default" })}
              href='/ongs/create'
            >
              Click Aqui
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  </PageContainer>
);

export default ActionNoOngFound;
