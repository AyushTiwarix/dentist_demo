import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import TrustBar from '@/components/TrustBar';
import ServiceCards from '@/components/ServiceCards';
import MeetDoctor from '@/components/MeetDoctor';
import ReviewSlider from '@/components/ReviewSlider';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'MLK Dental Center | Premier Dentist in Southwest Atlanta, GA 30314',
  description:
    'Dr. Mordena Sullen DMD offers expert cosmetic & general dentistry in Southwest Atlanta, GA 30314. Dental implants, ClearCorrect, veneers, crowns & more. Call (404) 752-7777.',
  alternates: { canonical: 'https://www.mlkdental.com' },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — trust + CTA above the fold */}
      <HeroBanner />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. High-Ticket Services */}
      <ServiceCards />

      {/* 4. About / Clinic Section */}
      <section className="about-section section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-inner">
            <div className="about-image-col">
              <div className="about-image-wrap">
                <div
                  className="about-image-placeholder"
                  role="img"
                  aria-label="MLK Dental Center clinic atmosphere — a welcoming, community-focused environment"
                >
                  <svg viewBox="0 0 80 60" fill="none" width="64" height="48" aria-hidden="true">
                    <rect x="4" y="10" width="72" height="46" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                    <rect x="14" y="20" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                    <rect x="46" y="20" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                    <path d="M36 56 L36 40 L44 40 L44 56" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                  </svg>
                  <p>Clinic Atmosphere Photo</p>
                  <p className="placeholder-note">Upload to public/images/clinic-atmosphere.jpg</p>
                </div>
                <div className="about-stat-pill">
                  <span className="about-stat-icon">🏆</span>
                  <div>
                    <strong>Trusted</strong> by the<br/>30314 Community
                  </div>
                </div>
              </div>
            </div>
            <div className="about-content-col">
              <p className="section-label">Our Practice</p>
              <h2 id="about-heading">A Dental Home in the Heart of Southwest Atlanta</h2>
              <div className="about-divider" aria-hidden="true"/>
              <p>
                MLK Dental Center isn&apos;t just a dental practice — it&apos;s a community institution. Located at 1099 Martin Luther King Junior Drive SW in the Washington Park neighborhood of Atlanta, GA 30314, we have been neighbors, caregivers, and smile-makers for over a decade.
              </p>
              <p>
                Under the leadership of Dr. Mordena Sullen, DMD, our team treats every patient like family. We understand that a trip to the dentist can feel intimidating, which is why we&apos;ve built an environment that is warm, modern, and completely stress-free.
              </p>
              <ul className="about-highlights">
                {[
                  'Relaxed, welcoming environment — no judgment, no anxiety',
                  'State-of-the-art digital X-rays and dental technology',
                  'Bilingual staff available upon request',
                  'Convenient location on MLK Drive with easy parking',
                  'Accepts most major insurance plans',
                ].map((item) => (
                  <li key={item} className="about-highlight-item">
                    <span className="highlight-check" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Doctor */}
      <MeetDoctor />

      {/* 6. Google Reviews */}
      <ReviewSlider />

      {/* 7. Before & After Gallery (3 preview) */}
      <BeforeAfterGallery limit={3} />

      {/* 8. Appointment Form */}
      <section className="contact-section section section--navy" aria-labelledby="contact-heading" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info">
              <p className="section-label text-emerald">Get In Touch</p>
              <h2 className="text-white" id="contact-heading">
                Ready to Transform Your Smile?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
                Schedule your appointment today. New patients are always welcome at MLK Dental Center — your Southwest Atlanta dental home.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Address</div>
                    <a
                      href="https://www.google.com/maps/place/M+L+King+Dental+Center/@33.7547337,-84.426468,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}
                    >
                      1099 Martin Luther King Junior Drive SW<br />Atlanta, GA 30314
                    </a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Phone</div>
                    <a href="tel:4047527777" style={{ color: '#E0BA6A', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                      (404) 752-7777
                    </a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">🕐</div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Hours</div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>Monday – Friday: 9:00 AM – 5:00 PM</div>
                    <div style={{ color: 'rgba(255,100,100,0.7)', fontSize: '0.85rem' }}>Saturday – Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <AppointmentForm title="Book Your Appointment" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
