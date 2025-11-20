import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MiniAppProvider } from "@/components/context/miniapp-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { description, title } from "@/lib/metadata";
import Link from "next/link";

const inter = localFont({
  src: "./InterVariable.ttf",
});

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MiniAppProvider>
          <div className="font-sans min-h-screen flex flex-col place-content-between gap-2">
            <Header />
            <nav className="bg-muted p-2">
              <ul className="flex space-x-4">
                <li><Link href="#introduction">Introduction</Link></li>
                <li><Link href="#how-to-create">How to Create a Mini App</Link></li>
                <li><Link href="#key-concepts">Key Concepts</Link></li>
                <li><Link href="#faq">FAQ</Link></li>
              </ul>
            </nav>
            {children}
            <Footer />
          </div>
        </MiniAppProvider>
      </body>
    </html>
  );
}
