import type { Metadata } from "next";
import { Zilla_Slab, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Débora Cristina Meireles — Frontend Developer & Art Director",
  description:
    "Portfólio de Débora Meireles — Frontend Developer e Art Director com mais de 4 anos de experiência em design. Especialista em React, Next.js e Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Débora Cristina Meireles — Frontend Developer & Art Director",
    description: "Interfaces minimalistas e funcionais, do Figma ao deploy.",
    url: "https://seudominio.com",
    siteName: "Débora Meireles",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${zillaSlab.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}