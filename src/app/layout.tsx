import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lem-accommodation.vercel.app";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LEM Accommodation | Accommodation in Polokwane and Lebowakgomo",
    template: "%s | LEM Accommodation",
  },
  description:
    "Find monthly accommodation in Polokwane and Lebowakgomo with LEM Accommodation, including bachelor-style units, room rentals, and a secure family home in Bendor.",
  keywords: [
    "accommodation in Polokwane",
    "accommodation in Lebowakgomo",
    "apartments in Polokwane",
    "apartments in Lebowakgomo",
    "rooms to rent in Lebowakgomo",
    "monthly accommodation Polokwane",
    "Bendor accommodation",
    "Lebowakgomo rentals",
    "Polokwane rentals",
    "LEM Accommodation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LEM Accommodation | Accommodation in Polokwane and Lebowakgomo",
    description:
      "Browse monthly accommodation in Polokwane and Lebowakgomo, from affordable bachelor-style units to a premium secure home rental in Bendor.",
    url: siteUrl,
    siteName: "LEM Accommodation",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/LEM_Logo.png",
        width: 1200,
        height: 1200,
        alt: "LEM Accommodation logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEM Accommodation | Accommodation in Polokwane and Lebowakgomo",
    description:
      "Monthly rentals in Lebowakgomo and Polokwane, including bachelor-style units, rooms, and a secure family home.",
    images: ["/images/LEM_Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
