import type { Metadata } from "next";
import localFonts from "next/font/local";
import "../globals.css";
import Header from "@/app/compoents/front/layout/header";

const lufga = localFonts({
  src: [
    {
      path: "../fonts/Lufga-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Lufga-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Lufga-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Lufga-MediumItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lufga.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
