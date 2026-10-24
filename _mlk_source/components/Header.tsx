'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Services', href: '#', children: [
        { label: 'Dental Implants', href: '/dental-implants' },
        { label: 'ClearCorrect Aligners', href: '/clear-correct' },
        { label: 'Porcelain Veneers', href: '/porcelain-veneers' },
        { label: 'Dental Crowns', href: '/dental-crowns' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'New Patients', href: '/new-patients' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        {/* Top strip */}
        <div className="header-top">
          <div className="container">
            <div className="header-top-inner">
              <span className="header-tagline">Serving Southwest Atlanta &amp; the 30314 Community</span>
              <div className="header-top-actions">
                <a href="tel:4047527777" className="header-phone">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (404) 752-7777
                </a>
                <span className="header-hours">Mon–Fri: 9am–5pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="header-main">
          <div className="container">
            <div className="header-main-inner">
              {/* Logo */}
              <Link href="/" className="site-logo" aria-label="MLK Dental Center Home">
                <div className="logo-mark">
                  <span>MLK</span>
                </div>
                <div className="logo-text">
                  <span className="logo-name">Dental Center</span>
                  <span className="logo-sub">Dr. Mordena Sullen, DMD</span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="main-nav" aria-label="Main navigation">
                <ul className="nav-list">
                  {navLinks.map((link) => (
                    <li key={link.label} className={`nav-item${link.children ? ' has-dropdown' : ''}`}>
                      <Link href={link.href} className="nav-link">
                        {link.label}
                        {link.children && (
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                          </svg>
                        )}
                      </Link>
                      {link.children && (
                        <div className="dropdown">
                          {link.children.map((child) => (
                            <Link key={child.label} href={child.href} className="dropdown-link">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTAs */}
              <div className="header-ctas">
                <Link href="/contact" className="btn btn-outline-dark btn-sm">
                  Inquire Online
                </Link>
                <a href="tel:4047527777" className="btn btn-primary btn-sm call-btn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Hamburger */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                <span/><span/><span/>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          <div className="container">
            <nav>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mobile-submenu">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>
                          — {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom CTA Bar */}
      <div className="mobile-cta-bar" role="complementary" aria-label="Quick contact actions">
        <a href="tel:4047527777" className="btn btn-primary">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          Call Now
        </a>
        <Link href="/contact" className="btn btn-outline">Book Appointment</Link>
      </div>

      <style jsx>{`
        /* ── Header Wrapper ─────────────────────────────── */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: box-shadow 0.3s ease;
        }

        .site-header.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.12);
        }

        /* ── Top Strip ──────────────────────────────────── */
        .header-top {
          background-color: var(--slate);
          color: rgba(255,255,255,0.75);
          font-size: 0.78rem;
          padding: 0.45rem 0;
        }

        .header-top-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-tagline {
          font-weight: 400;
          opacity: 0.85;
        }

        .header-top-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--gold-light);
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .header-phone:hover { opacity: 0.85; }

        .header-hours {
          color: rgba(255,255,255,0.6);
        }

        /* ── Main Nav ───────────────────────────────────── */
        .header-main {
          background: var(--white);
          border-bottom: 1px solid var(--border);
        }

        .header-main-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1rem 0;
        }

        /* ── Logo ───────────────────────────────────────── */
        .site-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-mark {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-mark span {
          color: var(--white);
          font-weight: 700;
          font-size: 0.85rem;
          font-family: var(--font-sans);
          letter-spacing: 0.05em;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.68rem;
          color: var(--text-light);
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        /* ── Nav Links ──────────────────────────────────── */
        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.85rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-dark);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--emerald);
          background: rgba(11,107,80,0.06);
        }

        /* Dropdown */
        .has-dropdown:hover .dropdown { display: flex; }

        .dropdown {
          display: none;
          flex-direction: column;
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 220px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.5rem;
          z-index: 100;
          animation: fadeIn 0.15s ease;
        }

        .dropdown-link {
          display: block;
          padding: 0.6rem 1rem;
          font-size: 0.875rem;
          color: var(--text-mid);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          text-decoration: none;
        }

        .dropdown-link:hover {
          background: var(--cream);
          color: var(--emerald);
        }

        /* ── Header CTAs ────────────────────────────────── */
        .header-ctas {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .btn-sm {
          padding: 0.6rem 1.25rem;
          font-size: 0.82rem;
        }

        .call-btn {
          animation: pulse-ring 2.5s infinite;
        }

        /* ── Hamburger ──────────────────────────────────── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--navy);
          border-radius: 2px;
          transition: var(--transition);
        }

        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* ── Mobile Menu ────────────────────────────────── */
        .mobile-menu {
          display: none;
          background: var(--white);
          border-top: 1px solid var(--border);
          padding: 1rem 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 500px;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-dark);
          border-bottom: 1px solid var(--border);
          text-decoration: none;
        }

        .mobile-sub-link {
          display: block;
          padding: 0.5rem 0 0.5rem 1rem;
          font-size: 0.9rem;
          color: var(--text-mid);
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .main-nav, .header-ctas { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
          .header-tagline { display: none; }
        }
      `}</style>
    </>
  );
}
