"use client"
// Flow
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// Schemas
import { signUpFormData, signUpSchema } from "../../schemas"
// Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
// Hooks
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
// Actions
import { signUpAction } from "../../actions"

export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm<signUpFormData>({
        resolver: zodResolver(signUpSchema),
    })

    async function onSubmit(data: z.infer<typeof signUpSchema>) {
        setIsLoading(true)

        const result = await signUpAction(data)

        setIsLoading(false)

        if (result?.error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: result.error || "Invalid email or password",
            })
            return
        }

        toast({
            variant: "primary",
            title: "Success",
            description: "Account created successfully",
        })

        setIsLoading(true)

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        })

        setIsLoading(false)

        router.push("/")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu E-mail" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Digite sua senha" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="name" placeholder="Digite seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Create an account"}
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </form>
        </Form >
    )
}
