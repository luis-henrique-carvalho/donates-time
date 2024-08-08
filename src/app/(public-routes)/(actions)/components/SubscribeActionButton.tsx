"use client";
import React, { useState } from "react";
import { createVolunteer } from "@/app/(private-routes)/(volunteers)/actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {
  action_id: string;
};

const SubscribeActionButton: React.FC<Props> = ({ action_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const result = await createVolunteer(action_id);

      if ("error" in result) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else {
        toast({
          variant: "primary",
          title: "Success",
          description: "You have successfully subscribed",
        });
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Subscribe"}
    </Button>
  );
};

export default SubscribeActionButton;
