"use client"
import React, { useState } from 'react'
// Components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
// Hooks
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
// Actions
import { createVolunteer } from '../actions'

type Props = {
    action_id: string
}

const CreateVolunteerButton: React.FC<Props> = ({ action_id }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const handleClick = async () => {
        setIsLoading(true)
        try {
            const result = await createVolunteer(action_id)

            if ('error' in result) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error,
                })
            } else {
                toast({
                    variant: 'primary',
                    title: 'Success',
                    description: 'You have successfully subscribed',
                })
                setModalOpen(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An unexpected error occurred.',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <Button variant="default" onClick={() => setModalOpen(true)}>
                Subscribe
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <Button type="button" variant="default" onClick={handleClick} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Inscrevas-se'}
                    </Button>
                    <Button variant="ghost" onClick={() => setModalOpen(false)} disabled={isLoading}>
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateVolunteerButton
