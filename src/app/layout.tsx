import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/components/providers/auth";
import { ModalProvider } from "@/components/providers/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de gerenciamento",
  description: "Sistema de gerenciamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
         <ModalProvider>
        <Header/>
        {children}
        </ModalProvider>
        </AuthProvider>
        </body>
    </html>
  );
}
