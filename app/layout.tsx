import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Inter,
  Poppins,
} from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASCEND 2026 | RENEW — Christian Youth Event",
  description:
    "ASCEND 2026 — An annual inter-church youth event themed RENEW. Be transformed by the renewing of your mind. Romans 12:2. Join us at C.S.I St. Andrew's Church, Guduvancheri.",
  keywords: [
    "ASCEND 2026",
    "RENEW",
    "Christian youth event",
    "CSI St Andrews Church",
    "Guduvancheri",
    "youth fellowship",
  ],
  openGraph: {
    title: "ASCEND 2026 | RENEW",
    description:
      "Be transformed by the renewing of your mind. Join ASCEND 2026 — an annual inter-church youth event.",
    images: ["/renew_logo.png"],
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
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
