import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recurrent Systems",
  description:
    "Industrial software that connects design, engineering, and production — linking inspection and quality data to the decisions around it so teams catch defects earlier and stop solving the same problems twice.",
  icons: {
    icon: [
      { url: "/favicon-64.webp", sizes: "64x64", type: "image/webp" },
      { url: "/favicon-512.webp", sizes: "512x512", type: "image/webp" }
    ],
    apple: [{ url: "/favicon-512.webp", sizes: "512x512", type: "image/webp" }]
  }
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
