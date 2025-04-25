import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supplier Assistant",
  description:
    "An AI assistant that helps users search for suppliers' information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full w-full bg-zinc-900">{children}</body>
    </html>
  );
}
