import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { seo } from "@/lib/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDF9FE" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(seo.og.url),
  title: {
    default: seo.title,
    template: `%s | Thierno Ibrahima Cissé`,
  },
  description: seo.description,
  keywords: [
    "Thierno Ibrahima Cissé",
    "software engineer",
    "machine learning",
    "NLP",
    "full stack developer",
    "portfolio",
    "Montreal",
  ],
  authors: [{ name: "Thierno Ibrahima Cissé", url: seo.og.url }],
  creator: "Thierno Ibrahima Cissé",
  openGraph: {
    type: "website",
    url: seo.og.url,
    title: seo.og.title,
    description: seo.description,
    siteName: seo.og.title,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.og.title,
    description: seo.description,
    creator: "@TiDev00",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
