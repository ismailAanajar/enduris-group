import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/app/compoents/front/layout/header";

const lufga = localFont({
  src: [
    {
      path: "../../../public/font/lufga-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/lufga-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/font/lufga-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/font/lufga-MediumItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
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
