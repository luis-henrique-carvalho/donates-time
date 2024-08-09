import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

interface AlertWithLinkProps {
  variant?: "default" | "primary" | "destructive";
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

const AlertWithLink: React.FC<AlertWithLinkProps> = ({
  variant,
  icon,
  title,
  description,
  linkHref,
  linkText,
}) => {
  return (
    <Alert variant={variant}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
        <Link href={linkHref} className='text-primary dark:text-white'>
          {linkText}
        </Link>
      </AlertDescription>
    </Alert>
  );
};

export default AlertWithLink;
