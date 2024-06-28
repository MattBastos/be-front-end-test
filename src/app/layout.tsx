import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
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
        <Header />

        <Layout>
          {children}
        </Layout>
      </Body>
    </html>
  );
}
