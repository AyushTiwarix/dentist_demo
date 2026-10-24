import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Dental Implants in Southwest Atlanta, GA 30314',
  description:
    'MLK Dental Center offers permanent dental implants in Southwest Atlanta, GA 30314. Dr. Mordena Sullen DMD provides natural-looking tooth replacement. Call (404) 752-7777.',
  alternates: { canonical: 'https://www.mlkdental.com/dental-implants' },
  openGraph: {
    title: 'Dental Implants in Southwest Atlanta, GA 30314 | MLK Dental Center',
    description: 'Restore your smile permanently with dental implants from Dr. Mordena Sullen DMD in Southwest Atlanta.',
  },
};

const faqs = [
  {
    q: 'How long do dental implants last?',
    a: 'With proper care and regular dental visits, dental implants can last a lifetime. The implant post itself is designed to be permanent, while the crown on top may need replacement after 10–15 years.',
  },
  {
    q: 'Am I a good candidate for dental implants?',
    a: 'Most adults with good general health are candidates. You need sufficient jawbone density and healthy gums. Dr. Sullen will evaluate your specific case with digital X-rays during your free consultation.',
  },
  {
    q: 'Does the dental implant procedure hurt?',
    a: 'No — we use local anesthesia to ensure you feel no pain during the procedure. Most patients report that the recovery is more comfortable than they expected, similar to a tooth extraction.',
  },
  {
    q: 'How much do dental implants cost in Atlanta?',
    a: 'The cost of a single dental implant at MLK Dental Center typically ranges from $1,500–$3,000 depending on your specific needs. We offer flexible payment plans and accept most major insurance. Call us for an exact quote.',
  },
  {
    q: 'How long does the implant process take?',
    a: 'The full process typically takes 3–6 months from implant placement to final crown. This allows the implant to fully integrate with your jawbone (osseointegration). Some cases may qualify for same-day or accelerated placement.',
  },
];

export default function DentalImplantsPage() {
  return (
    <>
      <HeroBanner
        headline="Dental Implants in Southwest Atlanta, GA 30314"
        subheadline="Restore Your Smile Permanently · Dr. Mordena Sullen, DMD · MLK Dental Center"
        ctaPrimary={{ label: 'Get a Free Consultation', href: '#consultation' }}
        ctaSecondary={{ label: 'Call (404) 752-7777', href: 'tel:4047527777' }}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/services">Services</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Dental Implants</li>
          </ol>
        </div>
      </nav>

      {/* Main Content + Sidebar */}
      <section className="service-page-section section" aria-label="Dental implants information">
        <div className="container">
          <div className="service-page-inner">
            {/* Left: Long-form content */}
            <article className="service-content">
              <h2>What Are Dental Implants?</h2>
              <p>
                Dental implants are the gold standard in modern tooth replacement. A small titanium post is surgically placed into the jawbone, where it fuses with the bone over several months through a process called osseointegration. Once fused, a custom-crafted porcelain crown is attached — giving you a tooth that looks, feels, and functions exactly like a natural tooth.
              </p>
              <p>
                At <strong>MLK Dental Center</strong>, Dr. Mordena Sullen provides expert implant care to patients across Southwest Atlanta and the 30314 zip code. Whether you&apos;re missing one tooth, several teeth, or need a full-arch restoration, implants offer a permanent, life-changing solution.
              </p>

              <h2>Why Choose Dental Implants Over Other Options?</h2>
              <div className="comparison-grid">
                {[
                  { label: 'Longevity', implant: 'Can last a lifetime', other: 'Dentures: 5–7 yrs; Bridges: 10–15 yrs' },
                  { label: 'Bone Health', implant: 'Stimulates jawbone — prevents bone loss', other: 'Dentures/bridges do not prevent bone loss' },
                  { label: 'Appearance', implant: 'Indistinguishable from natural teeth', other: 'May look artificial over time' },
                  { label: 'Function', implant: 'Eat anything — no restrictions', other: 'Dietary limitations with dentures' },
                  { label: 'Comfort', implant: 'Fixed in place — no slipping or adhesive', other: 'Removable, may slip or cause sores' },
                ].map((row) => (
                  <div key={row.label} className="comparison-row">
                    <div className="comparison-label">{row.label}</div>
                    <div className="comparison-implant">
                      <span className="check-icon">✓</span> {row.implant}
                    </div>
                    <div className="comparison-other">{row.other}</div>
                  </div>
                ))}
              </div>

              <h2>The Dental Implant Process at MLK Dental Center</h2>
              <ol className="process-steps">
                {[
                  { step: '01', title: 'Free Consultation', desc: 'Dr. Sullen evaluates your oral health, takes digital X-rays, and creates your personalized treatment plan.' },
                  { step: '02', title: 'Implant Placement', desc: 'The titanium post is surgically placed into the jawbone under local anesthesia. Most patients return to work the next day.' },
                  { step: '03', title: 'Healing Period', desc: 'Over 3–6 months, the implant fuses with your jawbone (osseointegration), creating an incredibly strong foundation.' },
                  { step: '04', title: 'Crown Placement', desc: 'A custom porcelain crown is attached to the implant — perfectly matched to your natural teeth in color and shape.' },
                  { step: '05', title: 'Enjoy Your New Smile', desc: 'Your new tooth looks, feels, and functions just like a natural tooth. Regular checkups keep it healthy for life.' },
                ].map((s) => (
                  <li key={s.step} className="process-step">
                    <div className="step-num">{s.step}</div>
                    <div>
                      <div className="step-title">{s.title}</div>
                      <div className="step-desc">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <h2>Are You a Candidate for Dental Implants?</h2>
              <p>Most adults are good candidates. You may be an ideal candidate if you:</p>
              <div className="candidate-grid">
                {[
                  'Have one or more missing teeth',
                  'Have sufficient jawbone density',
                  'Have healthy gums (or are willing to treat gum disease first)',
                  'Do not smoke, or are willing to quit before and after surgery',
                  'Do not have uncontrolled diabetes or other conditions affecting healing',
                  'Want a permanent, low-maintenance tooth replacement',
                ].map((item) => (
                  <div key={item} className="candidate-item">
                    <span className="candidate-check" aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">{faq.q}</summary>
                    <div className="faq-answer">{faq.a}</div>
                  </details>
                ))}
              </div>

              {/* Trust quote */}
              <div className="doctor-trust-block">
                <div className="trust-avatar" aria-hidden="true">MS</div>
                <blockquote className="trust-quote">
                  &ldquo;Dental implants have genuinely changed my patients&apos; lives. When someone who&apos;s been hiding their smile for years finally sees their new teeth — that&apos;s why I do what I do.&rdquo;
                  <cite>— Dr. Mordena Sullen, DMD</cite>
                </blockquote>
              </div>
            </article>

            {/* Right: Sticky sidebar form */}
            <aside className="service-sidebar" aria-label="Book a consultation">
              <div className="sidebar-sticky">
                <AppointmentForm compact title="Book a Free Consultation" />
                <div className="sidebar-contact-alt">
                  <p>Prefer to call?</p>
                  <a href="tel:4047527777" className="sidebar-phone">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    (404) 752-7777
                  </a>
                  <p className="sidebar-hours">Mon–Fri: 9 AM – 5 PM</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfterGallery limit={6} />

      {/* Bottom CTA */}
      <section
        id="consultation"
        className="section section--navy"
        style={{ textAlign: 'center' }}
        aria-label="Schedule consultation"
      >
        <div className="container">
          <p className="section-label text-emerald">Southwest Atlanta&apos;s Implant Specialist</p>
          <h2 className="text-white">Start Your Implant Journey Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0.75rem auto 2rem' }}>
            Call our Southwest Atlanta office or fill out the form above. New patients welcome. Most insurance accepted.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:4047527777" className="btn btn-primary btn-lg">
              Call (404) 752-7777
            </a>
            <Link href="/contact#appointment" className="btn btn-outline btn-lg">
              Request Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
