"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { signInFormData, signInSchema } from "../../schemas"
import { useState } from "react"


export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<signInFormData>({
        resolver: zodResolver(signInSchema),
    })

    async function onSubmit(data: z.infer<typeof signInSchema>) {
        setIsLoading(true)
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        })
        setIsLoading(false)
        if (result?.error) {
            console.error(result.error)
            return
        }
        router.replace("/")
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
                                <Input placeholder="shadcn" {...field} />
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
                            <div className="flex w-full justify-between">
                                <FormLabel>Password</FormLabel>
                                <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </form>
        </Form>
    )
}
