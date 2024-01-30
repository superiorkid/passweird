import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Passweird",
  description: "Password manager. built using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Toaster position="bottom-right" richColors theme="system" expand />
      </body>
    </html>
  );
}
