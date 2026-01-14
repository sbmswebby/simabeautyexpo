import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '@/components/shared/AuthProvider'
import { EventPopup } from "@/components/shared/EventPopup";
import Navbar from "@/components/sbms/NavBar";

export const metadata: Metadata = {
  title: "SIMA beauty expo",
  description: "South Indian Makeover Awards",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* These will be automatically added by Next.js from metadata, but you can add custom ones here if needed */}
      </head>
      
      <body className="min-h-screen   overflow-x-hidden">
        <AuthProvider>
                {/* Navigation */}
        <Navbar/>

          
          {/* Main content with padding */}
          <main className="pt-16 lg:pt-20 ">
            <EventPopup/>
            {children}
          </main>

        </AuthProvider>
      </body>
    </html>
  );
}