// Assets
import { Assets } from "@/app/(public-routes)/assets/index";
// Components
import PageContainer from "@/components/layout/PageContainer";
import Card, {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
// Next
import Link from "next/link";

interface CannotProccedProps {
  pageTitle: string;
  title: string;
  description: string;
  link: string;
  button_text?: string;
}

const CannotProcced = ({
  pageTitle,
  title,
  description,
  link,
  button_text,
}: CannotProccedProps) => (
  <PageContainer title={pageTitle}>
    <div className='w-full grid-cols-1 items-center space-y-10 lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:space-x-10 lg:space-y-0 xl:min-h-[800px]'>
      <div className='flex items-center justify-center'>
        <Assets.WarningRafiki className='sm:max-w-96 lg:max-w-none' />
      </div>
      <div>
        <Card className='justify-center-center w-full text-center'>
          <CardHeader className='pb-3'>
            <CardTitle>{title}</CardTitle>
            <CardDescription className='flex justify-center'>
              {description}
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-center'>
            <Link
              className={buttonVariants({ variant: "default" })}
              href={link}
            >
              {button_text || "Clique aqui"}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  </PageContainer>
);

export default CannotProcced;
