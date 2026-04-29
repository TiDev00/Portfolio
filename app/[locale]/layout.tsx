import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { seo } from "@/lib/portfolio";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDF9FE" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL(seo.og.url),
    title: {
      default: seo.title,
      template: `%s | Thierno Ibrahima Cissé`,
    },
    description: t("description"),
    keywords: [
      "Thierno Ibrahima Cissé",
      "Thierno Cissé",
      "fullstack software engineer",
      ".NET developer",
      "Python developer",
      "Java developer",
      "C#",
      "TypeScript",
      "machine learning",
      "NLP",
      "portfolio",
      "Montreal",
    ],
    authors: [{ name: "Thierno Ibrahima Cissé", url: seo.og.url }],
    creator: "Thierno Ibrahima Cissé",
    openGraph: {
      type: "website",
      url: seo.og.url,
      title: seo.og.title,
      description: t("description"),
      siteName: seo.og.title,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.og.title,
      description: t("description"),
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Nav />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
