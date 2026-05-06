import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recurrent Systems",
  description:
    "Industrial software for teams that need tighter control, better visibility, and closed-loop operations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
