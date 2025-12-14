import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luminary",
  description: "Cyber Command Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0D12] min-h-screen w-screen overflow-x-hidden`}
      >
        <div className="flex min-h-screen w-screen">
          <main className="flex-1 w-full min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
