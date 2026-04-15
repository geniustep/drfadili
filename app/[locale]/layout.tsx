import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Fadili Lamiaa – Gynécologue & Médecine Esthétique",
  description:
    "Cabinet médical spécialisé en gynécologie-obstétrique et médecine esthétique à Casablanca. Soins personnalisés, technologie avancée, approche bienveillante.",
  keywords: [
    "gynécologue Casablanca",
    "médecine esthétique Maroc",
    "Dr Fadili",
    "botox fillers Casablanca",
    "suivi grossesse",
  ],
  openGraph: {
    title: "Dr. Fadili Lamiaa – Gynécologue & Médecine Esthétique",
    description:
      "Cabinet médical premium alliant gynécologie et médecine esthétique à Casablanca.",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "ar" | "en" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
