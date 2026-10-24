'use client';
import Link from 'next/link';

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: '15+ Years Experience',
    desc: 'Serving Southwest Atlanta since 2008',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Accepting New Patients',
    desc: 'All ages welcome, families encouraged',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Same-Day Emergency Care',
    desc: 'Call now for urgent dental needs',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: 'Flexible Payment Plans',
    desc: 'Major insurance accepted, financing available',
  },
];

export default function TrustBar() {
  return (
    <div className="trust-bar" role="complementary" aria-label="Practice highlights">
      <div className="container">
        <ul className="trust-list">
          {trustItems.map((item) => (
            <li key={item.title} className="trust-item">
              <div className="trust-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="trust-text">
                <div className="trust-title">{item.title}</div>
                <div className="trust-desc">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .trust-bar {
          background: var(--cream-dark);
          border-top: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 1.5rem 0;
        }

        .trust-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          list-style: none;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex: 1;
        }

        .trust-item + .trust-item {
          padding-left: 1.5rem;
          border-left: 1px solid rgba(0,0,0,0.1);
        }

        .trust-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          padding: 9px;
        }

        .trust-text {
          display: flex;
          flex-direction: column;
        }

        .trust-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--text-dark);
          line-height: 1.3;
        }

        .trust-desc {
          font-size: 0.78rem;
          color: var(--text-light);
          margin-top: 0.1rem;
        }

        @media (max-width: 900px) {
          .trust-list { flex-wrap: wrap; }
          .trust-item { min-width: calc(50% - 1rem); }
          .trust-item + .trust-item { border-left: none; padding-left: 0; }
          .trust-item:nth-child(odd) { border-right: 1px solid rgba(0,0,0,0.1); padding-right: 1rem; }
        }

        @media (max-width: 480px) {
          .trust-item { min-width: 100%; }
          .trust-item:nth-child(odd) { border-right: none; padding-right: 0; }
        }
      `}</style>
    </div>
  );
}
