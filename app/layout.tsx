import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "No Solace",
  description: "Polish black metal label",
  keywords: "polish black metal, mgla, hauntologist, kriegsmachine, black metal music"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <NavigationBar />
        <main
          className={`${inter.className} flex min-h-screen flex-col items-center justify-between p-16`}>
          {children}
        </main>
      </body>
    </html>
  );
}
