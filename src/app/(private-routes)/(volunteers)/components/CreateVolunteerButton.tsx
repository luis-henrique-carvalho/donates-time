"use client";
import React, { useState } from "react";
// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// Hooks
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
// Actions
import { createVolunteer } from "../actions";
// Navigation
import { useRouter } from "next/navigation";

type Props = {
  action_id: string;
};

const CreateVolunteerButton: React.FC<Props> = ({ action_id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

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
        setModalOpen(false);
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
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <Button variant='default' onClick={() => setModalOpen(true)}>
        Inscreva se
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Você tem certeza que deseja se inscrever nesta ação?
          </DialogTitle>
          <DialogDescription>
            Ao clicar em "Inscreva-se", você estará se se compromentendo a
            participar desta ação. Você poderá cancelar a inscrição a qualquer
            momento.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='sm:justify-start'>
          <Button
            type='button'
            variant='default'
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Inscrevas-se"}
          </Button>
          <Button
            variant='ghost'
            onClick={() => setModalOpen(false)}
            disabled={isLoading}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateVolunteerButton;
