import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Abhikalaanikethana | Mansion of Abstracts",
  description: "A curated space for abstract art that speaks beyond the visible. Discover premium collections of abstract paintings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${leagueSpartan.className}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
