import Link from 'next/link';

export default function MeetDoctor() {
  return (
    <section className="doctor-section section section--slate" aria-labelledby="doctor-heading">
      <div className="container">
        <div className="doctor-inner">
          {/* Left: Photo + credentials */}
          <div className="doctor-photo-col">
            <div className="doctor-photo-frame">
              {/* Replace with real <Image> once headshot is provided */}
              <div className="doctor-photo-placeholder" role="img" aria-label="Dr. Mordena Sullen headshot placeholder">
                <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="130" aria-hidden="true">
                  <ellipse cx="60" cy="55" rx="28" ry="30" fill="rgba(255,255,255,0.15)"/>
                  <path d="M10 160 C10 130 35 110 60 110 C85 110 110 130 110 160" fill="rgba(255,255,255,0.1)"/>
                </svg>
                <p>Dr. Sullen&apos;s Photo</p>
                <p className="placeholder-note">Upload headshot to public/images/dr-sullen.jpg</p>
              </div>
              <div className="photo-ring" aria-hidden="true"/>
            </div>

            {/* Credentials badges */}
            <div className="credentials">
              <div className="credential-badge">
                <span className="credential-abbr">DMD</span>
                <span className="credential-text">Doctor of Dental Medicine</span>
              </div>
              <div className="credential-badge">
                <span className="credential-abbr">AGD</span>
                <span className="credential-text">Academy of General Dentistry</span>
              </div>
              <div className="credential-badge">
                <span className="credential-abbr">ADA</span>
                <span className="credential-text">American Dental Association</span>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="doctor-bio-col">
            <p className="section-label text-emerald">Meet Your Dentist</p>
            <h2 className="text-white" id="doctor-heading">
              Dr. Mordena Sullen, DMD
            </h2>
            <div className="doctor-divider" aria-hidden="true"/>

            <p className="doctor-bio text-cream">
              For over 15 years, Dr. Mordena Sullen has been a trusted pillar of dental care in Southwest Atlanta and the 30314 community. Her philosophy is simple: treat the whole person, not just the tooth. From your very first appointment, you&apos;ll experience a level of warmth, honesty, and clinical expertise that is rare in modern dentistry.
            </p>
            <p className="doctor-bio text-cream">
              Specializing in cosmetic and restorative procedures — including dental implants, ClearCorrect aligners, porcelain veneers, and dental crowns — Dr. Sullen combines the latest dental technology with a deeply personal approach to patient care.
            </p>

            {/* Doctor quote */}
            <blockquote className="doctor-quote">
              <span className="quote-mark">&ldquo;</span>
              My goal is for every patient to leave this chair feeling better than when they walked in — not just physically, but emotionally. A healthy smile is a confident smile.
              <span className="quote-attribution">— Dr. Mordena Sullen, DMD</span>
            </blockquote>

            <div className="doctor-ctas">
              <Link href="/about" className="btn btn-primary">
                Learn More About Dr. Sullen
              </Link>
              <Link href="/contact#appointment" className="btn btn-outline">
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .doctor-section {
          background: linear-gradient(135deg, var(--slate) 0%, var(--navy) 100%);
          position: relative;
          overflow: hidden;
        }

        /* Subtle background pattern */
        .doctor-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 80% 50%, rgba(11,107,80,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .doctor-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* ── Photo Col ───────────────────────────────────── */
        .doctor-photo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .doctor-photo-frame {
          position: relative;
          width: 280px;
          height: 320px;
          flex-shrink: 0;
        }

        .doctor-photo-placeholder {
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.45);
          font-size: 0.875rem;
          gap: 0.5rem;
          text-align: center;
          padding: 1rem;
        }

        .placeholder-note {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }

        .photo-ring {
          position: absolute;
          inset: -12px;
          border-radius: calc(var(--radius-lg) + 12px);
          border: 2px solid var(--emerald);
          opacity: 0.4;
          pointer-events: none;
        }

        /* Credentials */
        .credentials {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
        }

        .credential-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
          padding: 0.5rem 1rem;
        }

        .credential-abbr {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--gold-light);
          min-width: 2.5rem;
          font-family: var(--font-sans);
        }

        .credential-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.55);
        }

        /* ── Bio Col ─────────────────────────────────────── */
        .doctor-bio-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .doctor-divider {
          width: 60px;
          height: 3px;
          background: var(--emerald);
          border-radius: 2px;
        }

        .doctor-bio {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.72) !important;
          margin: 0;
        }

        .doctor-quote {
          background: rgba(255,255,255,0.05);
          border-left: 3px solid var(--gold);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 1.25rem 1.5rem;
          font-style: italic;
          color: rgba(255,255,255,0.8);
          font-size: 0.975rem;
          line-height: 1.7;
          position: relative;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .quote-mark {
          font-size: 3rem;
          line-height: 0;
          color: var(--gold);
          font-family: Georgia, serif;
          display: block;
          margin-bottom: -0.5rem;
        }

        .quote-attribution {
          font-style: normal;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--gold-light);
          margin-top: 0.25rem;
        }

        .doctor-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        /* ── Responsive ─────────────────────────────────── */
        @media (max-width: 1024px) {
          .doctor-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .doctor-photo-col { align-items: center; }
          .doctor-divider { margin: 0 auto; }
          .doctor-ctas { justify-content: center; }
          .doctor-quote { text-align: left; }
        }

        @media (max-width: 480px) {
          .doctor-photo-frame { width: 220px; height: 250px; }
        }
      `}</style>
    </section>
  );
}
