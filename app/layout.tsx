import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josephetim.dev"),
  title: {
    default: "Joseph Etim — Product Engineer & Frontend Lead",
    template: "%s | Joseph Etim",
  },
  description:
    "Product Engineer, Frontend Lead, and AI Engineer with 6+ years building and stabilizing high-performance web and mobile systems.",
  keywords: [
    "Joseph Etim",
    "Product Engineer",
    "Frontend Lead",
    "React",
    "Next.js",
    "React Native",
    "AI Engineer",
    "Nigeria",
  ],
  authors: [{ name: "Joseph Etim" }],
  creator: "Joseph Etim",
  openGraph: {
    type: "website",
    title: "Joseph Etim — Product Engineer & Frontend Lead",
    description:
      "Calm, reliable product engineering across high-performance web, mobile, AI tooling, and production systems.",
    url: "https://josephetim.dev",
    siteName: "Joseph Etim",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Joseph Etim — Product Engineer, Frontend Lead, and Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Etim — Product Engineer & Frontend Lead",
    description:
      "Product engineering, frontend architecture, AI tooling, and production systems.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem('joseph-theme');
      const theme = saved || 'dark';
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.dataset.theme = theme;
    } catch (_) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Analytics />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className:
              "!border-line !bg-surface !text-ink !shadow-quiet font-sans",
          }}
        />
      </body>
    </html>
  );
}
