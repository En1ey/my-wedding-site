import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import "../src/app/globals.css";

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat-brush",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John & Jade Wedding Invitation",
  description: "Wedding invitation website for John and Jade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveatBrush.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
