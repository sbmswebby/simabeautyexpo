import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '@/components/shared/AuthProvider'
import { EventPopup } from "@/components/shared/EventPopup";
import Link from 'next/link';

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
      <nav>
        <div className="logo">SIMA EXPO</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><a href="#pageant">Pageant</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

          
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