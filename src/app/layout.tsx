import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased p-[42px]`}
      >
        {children}
      </body>
    </html>
  );
}
