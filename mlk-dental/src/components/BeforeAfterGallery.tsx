import Link from 'next/link';

// Before/After placeholder gallery — replace image src with real patient photos
const transformations = [
  {
    id: 1,
    label: 'Full Smile Restoration',
    service: 'Dental Implants + Veneers',
    beforeAlt: 'Before: missing and damaged teeth',
    afterAlt: 'After: full set of natural-looking dental implants',
  },
  {
    id: 2,
    label: 'Smile Alignment',
    service: 'ClearCorrect Aligners',
    beforeAlt: 'Before: crowded, misaligned teeth',
    afterAlt: 'After: straight, even smile after ClearCorrect treatment',
  },
  {
    id: 3,
    label: 'Cosmetic Makeover',
    service: 'Porcelain Veneers',
    beforeAlt: 'Before: stained and chipped front teeth',
    afterAlt: 'After: bright, flawless porcelain veneers',
  },
  {
    id: 4,
    label: 'Crown Restoration',
    service: 'Dental Crowns',
    beforeAlt: 'Before: cracked molar needing crown',
    afterAlt: 'After: natural-looking porcelain crown placed',
  },
  {
    id: 5,
    label: 'Teeth Whitening',
    service: 'Professional Whitening',
    beforeAlt: 'Before: stained, yellowed teeth',
    afterAlt: 'After: bright white teeth after professional whitening',
  },
  {
    id: 6,
    label: 'Full Mouth Rehab',
    service: 'Multiple Services',
    beforeAlt: 'Before: worn, decayed teeth requiring full rehabilitation',
    afterAlt: 'After: completely restored healthy and beautiful smile',
  },
];

const serviceColors: Record<string, string> = {
  'Dental Implants + Veneers': '#0B6B50',
  'ClearCorrect Aligners': '#1A6B7C',
  'Porcelain Veneers': '#7C3A1A',
  'Dental Crowns': '#4A1A7C',
  'Professional Whitening': '#1A4A7C',
  'Multiple Services': '#6B0B4E',
};

export default function BeforeAfterGallery({ limit = 6 }: { limit?: number }) {
  const items = transformations.slice(0, limit);

  return (
    <section className="gallery-section section section--cream" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">Real Patient Results</p>
          <h2 className="section-title" id="gallery-heading">Smile Transformations</h2>
          <p className="section-subtitle">
            See the life-changing results our Southwest Atlanta patients have achieved. Each smile tells a story.
          </p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => {
            const color = serviceColors[item.service] || '#0B6B50';
            return (
              <div key={item.id} className="gallery-card" aria-label={item.label}>
                <div className="gallery-images">
                  {/* Before */}
                  <div className="gallery-side">
                    <div className="gallery-img-placeholder before-placeholder" aria-label={item.beforeAlt}>
                      <span className="img-placeholder-icon" aria-hidden="true">
                        <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                          <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
                          <path d="M6 38 C6 28 13 22 20 22 C27 22 34 28 34 38" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="none"/>
                        </svg>
                      </span>
                      <span className="img-placeholder-text">Before Photo</span>
                    </div>
                    <div className="gallery-label before-label">BEFORE</div>
                  </div>

                  {/* Divider arrow */}
                  <div className="gallery-divider" aria-hidden="true">
                    <div className="divider-arrow">→</div>
                  </div>

                  {/* After */}
                  <div className="gallery-side">
                    <div className="gallery-img-placeholder after-placeholder" aria-label={item.afterAlt}>
                      <span className="img-placeholder-icon" aria-hidden="true">
                        <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                          <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                          <path d="M6 38 C6 28 13 22 20 22 C27 22 34 28 34 38" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none"/>
                          <path d="M12 15 L17 20 L28 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                        </svg>
                      </span>
                      <span className="img-placeholder-text">After Photo</span>
                    </div>
                    <div className="gallery-label after-label">AFTER</div>
                  </div>
                </div>

                <div className="gallery-meta">
                  <div>
                    <div className="gallery-case-title">{item.label}</div>
                    <div
                      className="gallery-service-tag"
                      style={{ background: `${color}15`, color }}
                    >
                      {item.service}
                    </div>
                  </div>
                  <div className="gallery-stars" aria-label="5 star result">★★★★★</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="gallery-cta">
          <p className="text-light text-center">
            <em>Patient photos used with permission. Individual results may vary.</em>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Link href="/contact#appointment" className="btn btn-primary btn-lg">
              Get My Smile Transformation
            </Link>
            <a href="tel:4047527777" className="btn btn-outline-dark btn-lg">
              Call (404) 752-7777
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .gallery-card {
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .gallery-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }

        .gallery-images {
          display: flex;
          align-items: stretch;
          height: 180px;
          position: relative;
        }

        .gallery-side { flex: 1; position: relative; }

        .gallery-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .before-placeholder {
          background: linear-gradient(135deg, #f0e8e8 0%, #e8dede 100%);
          color: #999;
        }

        .after-placeholder {
          background: linear-gradient(135deg, #e8f5f0 0%, #ddf0ea 100%);
          color: #0B6B50;
        }

        .img-placeholder-text {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .gallery-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .before-label {
          background: rgba(0,0,0,0.5);
          color: white;
        }

        .after-label {
          background: var(--emerald);
          color: white;
        }

        .gallery-divider {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .divider-arrow {
          width: 28px;
          height: 28px;
          background: var(--white);
          border: 2px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--emerald);
          font-weight: 700;
          box-shadow: var(--shadow-md);
        }

        .gallery-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border);
        }

        .gallery-case-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--text-dark);
          margin-bottom: 0.3rem;
        }

        .gallery-service-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .gallery-stars {
          color: #F5A623;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .gallery-images { height: 150px; }
        }
      `}</style>
    </section>
  );
}
