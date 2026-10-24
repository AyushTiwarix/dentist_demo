import Link from 'next/link';

const services = [
  {
    id: 'dental-implants',
    href: '/dental-implants',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M24 8 L24 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 14 L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 20 L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="19" y="24" width="10" height="14" rx="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacement. Restore your smile and confidence with titanium-fused implants built to last a lifetime.',
    badge: 'Most Popular',
    badgeColor: '#0B6B50',
  },
  {
    id: 'clear-correct',
    href: '/clear-correct',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M12 20 C12 16 16 13 24 13 C32 13 36 16 36 20 L36 28 C36 32 32 35 24 35 C16 35 12 32 12 28 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M18 24 L22 28 L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'ClearCorrect Aligners',
    desc: 'Straighten your teeth discreetly with custom clear aligners. No metal brackets — just a confident, gradually perfecting smile.',
    badge: 'Invisible',
    badgeColor: '#1A6B7C',
  },
  {
    id: 'porcelain-veneers',
    href: '/porcelain-veneers',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M14 22 C14 18 18 15 24 15 C30 15 34 18 34 22 L34 26 C34 30 30 33 24 33 C18 33 14 30 14 26 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M19 22 L29 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M17 26 L31 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    title: 'Porcelain Veneers',
    desc: 'Transform stained, chipped, or misaligned teeth with ultra-thin custom porcelain shells — the Hollywood smile solution.',
    badge: 'Cosmetic',
    badgeColor: '#7C3A1A',
  },
  {
    id: 'dental-crowns',
    href: '/dental-crowns',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <path d="M14 34 L16 20 L20 28 L24 16 L28 28 L32 20 L34 34 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dental Crowns',
    desc: 'Protect damaged or weakened teeth with precision-crafted porcelain crowns. Strength and natural aesthetics in one solution.',
    badge: 'Restorative',
    badgeColor: '#4A1A7C',
  },
];

export default function ServiceCards() {
  return (
    <section className="services-section section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">High-Ticket Services</p>
          <h2 className="section-title" id="services-heading">Our Signature Services</h2>
          <p className="section-subtitle">
            Comprehensive cosmetic and restorative dentistry for Southwest Atlanta. Each treatment is tailored to your unique smile goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card"
              id={`service-${service.id}`}
              aria-label={`Learn more about ${service.title}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="service-accent" style={{ background: service.badgeColor }} />
              <div className="service-badge" style={{ background: `${service.badgeColor}18`, color: service.badgeColor }}>
                {service.badge}
              </div>
              <div className="service-icon" style={{ color: service.badgeColor }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-link">
                Learn More
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-footer-note">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01"/>
          </svg>
          Also offering: Teeth Whitening, Preventive Cleanings, Emergency Dental Care, and more.
          <Link href="/services" className="services-all-link">View All Services →</Link>
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-card {
          position: relative;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          text-decoration: none;
          overflow: hidden;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          animation: fadeInUp 0.5s ease both;
        }

        .service-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
          border-color: transparent;
        }

        .service-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          width: fit-content;
        }

        .service-icon {
          width: 48px;
          height: 48px;
        }

        .service-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
        }

        .service-desc {
          font-size: 0.875rem;
          color: var(--text-light);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .service-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--emerald);
          margin-top: 0.25rem;
          transition: gap 0.2s ease;
        }

        .service-card:hover .service-link { gap: 0.65rem; }

        .services-footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-light);
          padding: 1.25rem 1.5rem;
          background: var(--cream);
          border-radius: var(--radius-md);
        }

        .services-all-link {
          color: var(--emerald);
          font-weight: 600;
          margin-left: 0.5rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .services-all-link:hover { opacity: 0.75; }

        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .services-footer-note { flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  );
}
