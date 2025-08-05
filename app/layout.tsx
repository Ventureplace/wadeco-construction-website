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
  title: "Wade & Co. Construction - Bay Area Concrete Contractors | East Bay, Tri-Valley, Peninsula",
  description: "Professional concrete contractor serving Oakland, Berkeley, Fremont, Pleasanton, Dublin, Livermore, San Jose. Stamped concrete, driveways, patios, pool decks, retaining walls, seismic retrofitting, RV pads, outdoor kitchens. 25+ years experience. Free estimates.",
  keywords: "concrete contractor Oakland, stamped concrete Berkeley, retaining walls Fremont, decorative concrete Pleasanton, concrete patio Dublin, pool deck Livermore, seismic retrofitting San Jose, RV pads East Bay, outdoor kitchen concrete Tri-Valley, basement floors Peninsula, concrete steps, sidewalks, ADA compliance, emergency concrete repair",
  openGraph: {
    title: "Wade & Co. Construction - Bay Area Concrete Specialists",
    description: "Licensed concrete contractors serving East Bay, Tri-Valley & Peninsula. Stamped concrete, driveways, patios, retaining walls, seismic retrofitting, RV pads, outdoor kitchens. 25+ years experience.",
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
