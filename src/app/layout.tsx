import { Body } from "@/components/Body";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Be Front-End Test",
  description: "Front-End Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <Body>
        {children}
      </Body>
    </html>
  );
}
