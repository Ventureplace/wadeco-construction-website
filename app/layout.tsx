import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concrete Contractors Near Me | Wade & Co Construction | Bay Area Specialists",
  description: "Top-rated concrete contractors near me in Bay Area. Serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, San Jose. Stamped concrete, driveways, patios, pool decks, retaining walls near you. 25+ years experience. Free estimates.",
  keywords: "concrete contractors near me, stamped concrete near me, concrete company near me, retaining walls near me, decorative concrete near me, concrete patio near me, pool deck contractors near me, seismic retrofitting near me, RV pads near me, outdoor kitchen concrete near me, basement floors near me, concrete steps near me, sidewalks near me, ADA compliance near me, emergency concrete repair near me, Bay Area concrete contractors",
  openGraph: {
    title: "Concrete Contractors Near Me | Wade & Co Construction",
    description: "Top-rated concrete contractors near me in Bay Area. Licensed specialists serving East Bay, Tri-Valley & Peninsula. Stamped concrete, driveways, patios, retaining walls near you. 25+ years experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
