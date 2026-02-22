import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Oswald } from 'next/font/google';
import './globals.css';
import { getImage } from '@/lib/images';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Chamba Taxi | #1 Premium Taxi Service in Chamba Himachal',
  description: 'Book the best taxi service in Chamba. Outstation, local sightseeing, and airport transfers. Chamba to Delhi, Chandigarh, Amritsar. Call 8219769045.',
  keywords: ['Chamba Taxi', 'Taxi Service Chamba', 'Best Taxi in Chamba', 'Chamba to Delhi Taxi', 'Chamba to Pathankot Taxi', 'Khajjiar Taxi Service'],
  openGraph: {
    title: 'Chamba Taxi | Premium Travel Services',
    description: 'Reliable taxi service from Chamba to all over India.',
    images: [getImage('og')],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Chamba Taxi Service",
    "description": "Premium taxi service in Chamba, Himachal Pradesh. Providing outstation and local tours.",
    "url": "https://chambataxi.com",
    "telephone": "+918219769045",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market",
      "addressLocality": "Chamba",
      "addressRegion": "HP",
      "postalCode": "176310",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.5534",
      "longitude": "76.1258"
    }
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
