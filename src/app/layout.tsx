import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import NextAuthSessionProvider from "@/providers/sessionProvider";
import SiteHeader from "@/components/layout/SiteHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextAuthSessionProvider>
          <SiteHeader />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
