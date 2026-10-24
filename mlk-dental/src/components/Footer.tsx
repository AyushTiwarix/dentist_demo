'use client';
import Link from 'next/link';

const PHONE = '(404) 752-7777';
const PHONE_HREF = 'tel:4047527777';
const ADDRESS = '1099 Martin Luther King Junior Drive SW, Atlanta, GA 30314';
const MAPS_URL = 'https://www.google.com/maps/place/M+L+King+Dental+Center/@33.7547337,-84.426468,17z';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "name": "M.L.K. Dental Center",
  "url": "https://www.mlkdental.com",
  "telephone": "(404) 752-7777",
  "email": "mtsb90@gmail.com",
  "priceRange": "$$",
  "image": "https://www.mlkdental.com/images/dr-sullen.jpg",
  "description": "Dr. Mordena Sullen DMD provides premier general and cosmetic dentistry services including dental implants, ClearCorrect aligners, porcelain veneers, and dental crowns to Southwest Atlanta and the 30314 community.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1099 Martin Luther King Junior Drive Southwest",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "postalCode": "30314",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7547293,
    "longitude": -84.4238931
  },
  "hasMap": MAPS_URL,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/MLK-Dental-Center-1553491034958131",
    "https://twitter.com/mlkdentalcenter",
    MAPS_URL,
    "https://www.healthgrades.com/dentist/dr-mordena-sullen-x5d8x"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": "87",
    "bestRating": "5"
  }
};

export default function Footer() {
  const services = [
    { label: 'Dental Implants', href: '/dental-implants' },
    { label: 'ClearCorrect Aligners', href: '/clear-correct' },
    { label: 'Porcelain Veneers', href: '/porcelain-veneers' },
    { label: 'Dental Crowns', href: '/dental-crowns' },
    { label: 'Teeth Whitening', href: '/teeth-whitening' },
    { label: 'General Dentistry', href: '/services' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Dr. Sullen', href: '/about' },
    { label: 'New Patients', href: '/new-patients' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Request Appointment', href: '/contact#appointment' },
    { label: 'Patient Education', href: '/patient-education' },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      {/* CTA Banner */}
      <div className="footer-cta-banner">
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <h3 className="text-white">Ready for a Healthier, More Beautiful Smile?</h3>
              <p className="text-cream" style={{ marginTop: '0.4rem', opacity: 0.85 }}>
                Serving Southwest Atlanta &amp; the 30314 community. New patients always welcome.
              </p>
            </div>
            <div className="footer-cta-btns">
              <Link href="/contact#appointment" className="btn btn-gold btn-lg">
                Request Appointment
              </Link>
              <a href={PHONE_HREF} className="btn btn-outline btn-lg">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand + NAP */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-mark-sm"><span>MLK</span></div>
                <div>
                  <div className="footer-logo-name">Dental Center</div>
                  <div className="footer-logo-sub">Dr. Mordena Sullen, DMD</div>
                </div>
              </div>
              <p className="footer-bio">
                Providing compassionate, high-quality dental care to the Southwest Atlanta and Washington Park communities.
              </p>
              <div className="footer-nap">
                <div className="nap-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="nap-link">
                    {ADDRESS}
                  </a>
                </div>
                <div className="nap-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href={PHONE_HREF} className="nap-link nap-phone">{PHONE}</a>
                </div>
                <div className="nap-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Mon–Fri: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links">
                {services.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} className="footer-link">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Hours & Map */}
            <div className="footer-col">
              <h4 className="footer-col-title">Office Hours</h4>
              <div className="hours-list">
                {['Monday','Tuesday','Wednesday','Thursday','Friday'].map(day => (
                  <div key={day} className="hours-row">
                    <span>{day}</span>
                    <span className="hours-time">9:00 AM – 5:00 PM</span>
                  </div>
                ))}
                {['Saturday','Sunday'].map(day => (
                  <div key={day} className="hours-row">
                    <span>{day}</span>
                    <span className="hours-closed">Closed</span>
                  </div>
                ))}
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm mt-md"
                style={{ display: 'inline-flex', marginTop: '1rem' }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© 2026 M.L.K. Dental Center · Dr. Mordena Sullen, DMD · All Rights Reserved</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <style jsx>{`
        /* ── Footer CTA Banner ──────────────────────────── */
        .footer-cta-banner {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          padding: 3.5rem 0;
        }

        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .footer-cta-btns {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        /* ── Footer Main ────────────────────────────────── */
        .footer-main {
          background: var(--navy);
          padding: 4rem 0;
          color: rgba(255,255,255,0.7);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 3rem;
        }

        /* Brand col */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .logo-mark-sm {
          width: 38px;
          height: 38px;
          background: var(--emerald);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-mark-sm span {
          color: white;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }

        .footer-logo-name {
          color: var(--white);
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.1;
        }

        .footer-logo-sub {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
        }

        .footer-bio {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.5rem;
        }

        .footer-nap {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .nap-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
        }

        .nap-item svg { flex-shrink: 0; margin-top: 2px; color: var(--emerald-light); }

        .nap-link {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nap-link:hover { color: var(--white); }

        .nap-phone {
          color: var(--gold-light) !important;
          font-weight: 600;
        }

        /* Columns */
        .footer-col-title {
          color: var(--white);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .footer-links { display: flex; flex-direction: column; gap: 0.5rem; }

        .footer-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover { color: var(--emerald-light); }

        /* Hours */
        .hours-list { display: flex; flex-direction: column; gap: 0.4rem; }

        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
        }

        .hours-time { color: rgba(255,255,255,0.85); font-weight: 500; }
        .hours-closed { color: rgba(255,100,100,0.7); }

        /* ── Footer Bottom ──────────────────────────────── */
        .footer-bottom {
          background: #080F1A;
          padding: 1.25rem 0;
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .footer-bottom p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-links a {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover { color: rgba(255,255,255,0.65); }

        /* ── Responsive ─────────────────────────────────── */
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        @media (max-width: 640px) {
          .footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
