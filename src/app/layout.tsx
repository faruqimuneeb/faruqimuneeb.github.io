import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { structuredData } from "@/lib/schema";
import { profile } from "@/data/profile";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteTitle = `${profile.name} - Senior PHP Laravel Developer & Backend Architect`;
const description = profile.bio;

export const metadata: Metadata = {
  metadataBase: new URL("https://muneebfaruqi.dev"),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Muneeb Faruqi",
    "Senior PHP Laravel Developer",
    "Backend Architect",
    "Laravel Developer Lahore",
    "PHP Developer Pakistan",
    "FinTech Engineer",
    "VICIdial Developer",
    "Asterisk PBX Integration",
    "Remote Laravel Developer",
    "Freelance PHP Developer",
  ],
  openGraph: {
    title: siteTitle,
    description,
    url: "https://muneebfaruqi.dev",
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "googlef4e1f60ea3d95a4f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = structuredData();

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
