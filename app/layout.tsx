import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curso Canvas Profissional - Conquiste mais clientes nas redes sociais com suas publicações!",
  description: "Descubra como se destacar da concorrência criando posts, logos e templates de forma descomplicada e prática, mesmo sem ter experiência com design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-11209047415" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
