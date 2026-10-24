import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mlkdental.com'),
  title: {
    default: 'MLK Dental Center | Premier Dentist in Southwest Atlanta, GA 30314',
    template: '%s | MLK Dental Center · Dr. Mordena Sullen DMD',
  },
  description:
    'Dr. Mordena Sullen DMD offers expert cosmetic & general dentistry in Southwest Atlanta, GA 30314. Dental implants, ClearCorrect, veneers, crowns & more. Call (404) 752-7777.',
  keywords: [
    'dentist southwest Atlanta',
    'dental implants Atlanta GA',
    'ClearCorrect Atlanta',
    'porcelain veneers 30314',
    'dental crowns Southwest Atlanta',
    'cosmetic dentist 30314',
    'MLK Dental Center',
    'Dr Mordena Sullen',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mlkdental.com',
    siteName: 'MLK Dental Center',
    title: 'MLK Dental Center | Premier Dentist in Southwest Atlanta, GA 30314',
    description:
      'Trusted cosmetic & general dentistry in Southwest Atlanta. Dental implants, ClearCorrect, veneers & crowns. Dr. Mordena Sullen DMD.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.mlkdental.com',
  },
  other: {
    'geo.region': 'US-GA',
    'geo.placename': 'Atlanta',
    'geo.position': '33.7547293;-84.4238931',
    icbm: '33.7547293, -84.4238931',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F1C2E" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        <style jsx global>{`
          .skip-link {
            position: absolute;
            left: -9999px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
          .skip-link:focus {
            position: fixed;
            top: 0;
            left: 0;
            width: auto;
            height: auto;
            padding: 0.75rem 1.5rem;
            background: var(--emerald);
            color: white;
            font-weight: 600;
            z-index: 9999;
            text-decoration: none;
          }
        `}</style>
      </body>
    </html>
  );
}
