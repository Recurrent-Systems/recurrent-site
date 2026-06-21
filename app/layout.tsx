import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recurrent Systems — Turn production data into a leverageable asset",
  description:
    "Industrial software for assembly and PCB manufacturers. Recurrent unifies the data your lines already produce into one trustworthy record — and puts it to work on the floor and in the boardroom.",
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
