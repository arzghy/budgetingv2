import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";

const plusJakartaSans = localFont({
  src: "../public/fonts/plus-jakarta-sans-latin.woff2",
  weight: "200 800",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mibudge — Boleh jajan. Tetap punya simpanan.",
  description:
    "Teman mencatat pengeluaran, merencanakan kebutuhan, dan menabung untuk wishlist. Atur uangmu pelan-pelan bersama Mibudge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
