import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Node Editor",
  description: "2D Node Editor with image processing",
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
