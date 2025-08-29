import type { Metadata } from "next";
import { DM_Sans, Manrope, Poppins, Sora } from "next/font/google";
import "./globals.css";

// Configuração de todas as fontes
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "700"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Paulo André Collet - Implementação na prática",
  description: "Autoridade no Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${dmSans.variable} ${manrope.variable} ${poppins.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}