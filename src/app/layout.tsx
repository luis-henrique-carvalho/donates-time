import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <div className="container h-14 max-w-screen-2xl items-center">
              {children}
            </div>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html >
  )
}
