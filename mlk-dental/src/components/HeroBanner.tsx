'use client';
import Link from 'next/link';

const MAPS_URL = 'https://www.google.com/maps/place/M+L+King+Dental+Center/@33.7547337,-84.426468,17z/data=!4m8!3m7!1s0x88f50359608c5a61:0x6ebf1772bd1afc0c!8m2!3d33.7547293!4d-84.4238931!9m1!1b1!16s%2Fg%2F11dx8p76cc?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  page?: 'home' | 'service';
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export default function HeroBanner({
  headline = 'Premier Cosmetic Dentistry in Southwest Atlanta',
  subheadline = 'Trusted by the 30314 Community · Dr. Mordena Sullen, DMD',
  ctaPrimary = { label: 'Request Appointment', href: '/contact#appointment' },
  ctaSecondary = { label: 'Call (404) 752-7777', href: 'tel:4047527777' },
}: HeroProps) {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-overlay" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left content */}
          <div className="hero-content">
            <div className="hero-badge animate-fadeInUp">
              <span className="badge-dot" />
              Accepting New Patients · Southwest Atlanta, GA 30314
            </div>

            <h1 className="hero-headline animate-fadeInUp animate-delay-1">
              {headline}
            </h1>

            <p className="hero-sub animate-fadeInUp animate-delay-2">
              {subheadline}
            </p>

            <div className="hero-ctas animate-fadeInUp animate-delay-2">
              <Link href={ctaPrimary.href} className="btn btn-primary btn-lg">
                {ctaPrimary.label}
              </Link>
              <a href={ctaSecondary.href} className="btn btn-outline btn-lg">
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                {ctaSecondary.label}
              </a>
            </div>

            {/* Google Rating Badge */}
            <div className="animate-fadeInUp animate-delay-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="google-badge"
                aria-label="View our 4.3 out of 5 star Google Reviews"
              >
                <div className="google-g" aria-hidden="true">G</div>
                <div className="stars" aria-hidden="true">
                  {'★★★★☆'}
                </div>
                <span>
                  <strong>4.3/5</strong> · 87 Google Reviews
                </span>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right visual card */}
          <div className="hero-visual animate-fadeInUp animate-delay-2">
            <div className="hero-card">
              <div className="hero-card-image" aria-label="Modern dental clinic" role="img">
                <div className="hero-card-placeholder">
                  <div className="clinic-icon">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.05)"/>
                      <path d="M25 55 C25 55 28 38 40 35 C52 38 55 55 55 55" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none"/>
                      <path d="M30 35 C30 27 35 22 40 22 C45 22 50 27 50 35" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none"/>
                      <circle cx="40" cy="30" r="3" fill="rgba(255,255,255,0.4)"/>
                      <rect x="32" y="42" width="16" height="2" rx="1" fill="rgba(255,255,255,0.4)"/>
                      <rect x="35" y="47" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
                    </svg>
                  </div>
                  <p className="placeholder-label">Clinic Photo</p>
                  <p className="placeholder-sub">Replace with real clinic image</p>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="stat-card stat-card-1">
                <div className="stat-icon">✓</div>
                <div>
                  <div className="stat-num">15+</div>
                  <div className="stat-label">Years Serving<br/>SW Atlanta</div>
                </div>
              </div>

              <div className="stat-card stat-card-2">
                <div className="stat-icon">★</div>
                <div>
                  <div className="stat-num">4.3</div>
                  <div className="stat-label">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Hero Section ───────────────────────────────── */
        .hero {
          position: relative;
          background: linear-gradient(135deg, var(--navy) 0%, var(--slate) 60%, #1a3a50 100%);
          padding: 5rem 0 5.5rem;
          overflow: hidden;
          min-height: 580px;
          display: flex;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Glow orb */
        .hero::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(11,107,80,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Inner Layout ───────────────────────────────── */
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* ── Left Content ───────────────────────────────── */
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(11,107,80,0.2);
          border: 1px solid rgba(11,107,80,0.4);
          border-radius: var(--radius-full);
          padding: 0.4rem 1rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: #6EE7C7;
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #6EE7C7;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
          flex-shrink: 0;
        }

        .hero-headline {
          color: var(--white);
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          font-weight: 700;
        }

        .hero-sub {
          color: rgba(255,255,255,0.72);
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 0;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── Right Visual ───────────────────────────────── */
        .hero-visual { position: relative; }

        .hero-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: visible;
        }

        .hero-card-image {
          height: 380px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          overflow: hidden;
        }

        .hero-card-placeholder {
          text-align: center;
          color: rgba(255,255,255,0.45);
        }

        .clinic-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
        }

        .placeholder-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.25rem;
        }

        .placeholder-sub {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }

        /* Floating stat cards */
        .stat-card {
          position: absolute;
          background: var(--white);
          border-radius: var(--radius-md);
          padding: 0.85rem 1.1rem;
          box-shadow: var(--shadow-xl);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          animation: fadeIn 0.8s ease forwards;
        }

        .stat-card-1 { bottom: -20px; left: -24px; }
        .stat-card-2 { top: -16px; right: -16px; }

        .stat-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .stat-card-2 .stat-icon {
          background: linear-gradient(135deg, var(--gold) 0%, #b8963d 100%);
        }

        .stat-num {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-light);
          line-height: 1.4;
          margin-top: 0.2rem;
        }

        /* ── Responsive ─────────────────────────────────── */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-visual { display: none; }
          .hero { padding: 4rem 0; min-height: auto; }
        }
      `}</style>
    </section>
  );
}
