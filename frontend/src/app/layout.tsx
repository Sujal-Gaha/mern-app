import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mern app",
  description: "Learning MERN stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
