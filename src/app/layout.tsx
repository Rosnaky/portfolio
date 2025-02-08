import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const AfacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Ronak Patel",
  description: "A radical person's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${AfacadFlux.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
