import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import SiteHeader from "@/components/layout/SiteHeader";
import Container from "@/components/layout/Container";
import { Toaster } from "@/components/ui/toaster";
import { MapProvider } from "@/providers/MapProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import LoadingPage from "@/components/layout/LoadingPage";
import { Suspense } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<LoadingPage />}>
              <MapProvider>
                <SiteHeader />
                <Container>
                  {children}
                  <SiteFooter />
                </Container>

                <Toaster />
              </MapProvider>
            </Suspense>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
