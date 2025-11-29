import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { MedicalClinicStructuredData } from "@/components/seo/structured-data";
import { PerformanceMonitoring, PreloadResources, ServiceWorkerRegistration } from "@/components/performance/optimization";
import { I18nProvider } from "@/lib/i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Dermatology & Aesthetic Centre - Premium Dermatology & Hair Restoration",
  description: "Experience world-class dermatology, hair restoration, laser treatments, and aesthetic medicine at our luxury medical centre. Board-certified specialists delivering exceptional results.",
  keywords: ["dermatology", "hair restoration", "laser treatments", "aesthetic medicine", "cosmetic dermatology", "skin care", "medical spa", "board certified dermatologist"],
  authors: [{ name: "Dr. Dermatology Centre" }],
  icons: {
    icon: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dr. Dermatology & Aesthetic Centre",
    description: "Premium dermatology and aesthetic medicine services with world-class specialists",
    url: "https://drdermatology.com",
    siteName: "Dr. Dermatology & Aesthetic Centre",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Dermatology & Aesthetic Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dermatology & Aesthetic Centre",
    description: "Premium dermatology and aesthetic medicine services",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://drdermatology.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MedicalClinicStructuredData
          name="Dr. Dermatology & Aesthetic Centre"
          description="Experience world-class dermatology, hair restoration, laser treatments, and aesthetic medicine at our luxury medical centre."
          url="https://drdermatology.com"
          telephone="+1 (555) 123-4567"
          address={{
            streetAddress: "123 Medical Center Dr, Suite 100",
            addressLocality: "Beverly Hills",
            addressRegion: "CA",
            postalCode: "90210",
            addressCountry: "US",
          }}
          geo={{
            latitude: "34.0736",
            longitude: "-118.4004",
          }}
          openingHours={[
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-14:00",
            "Su Closed",
          ]}
          priceRange="$$$"
          paymentAccepted={["Cash", "Credit Card", "Debit Card", "Insurance"]}
          currenciesAccepted={["USD"]}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <PerformanceMonitoring />
            <PreloadResources />
            <ServiceWorkerRegistration />
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
