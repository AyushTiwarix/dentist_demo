import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import AppointmentForm from '@/components/AppointmentForm';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';

export const metadata: Metadata = {
  title: 'ClearCorrect Aligners in Southwest Atlanta, GA 30314',
  description:
    'Straighten your teeth discreetly with ClearCorrect invisible aligners at MLK Dental Center in Southwest Atlanta, GA 30314. Dr. Mordena Sullen DMD. Call (404) 752-7777.',
  alternates: { canonical: 'https://www.mlkdental.com/clear-correct' },
};

export default function ClearCorrectPage() {
  return (
    <>
      <HeroBanner
        headline="ClearCorrect Aligners in Southwest Atlanta, GA 30314"
        subheadline="Straighter Teeth — Discreetly & Comfortably · Dr. Mordena Sullen, DMD"
        ctaPrimary={{ label: 'Start Your Free Smile Assessment', href: '#consultation' }}
        ctaSecondary={{ label: 'Call (404) 752-7777', href: 'tel:4047527777' }}
      />

      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/services">Services</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">ClearCorrect Aligners</li>
          </ol>
        </div>
      </nav>

      <section className="service-page-section section">
        <div className="container">
          <div className="service-page-inner">
            <article className="service-content">
              <h2>What Is ClearCorrect?</h2>
              <p>
                ClearCorrect is a leading clear aligner system that straightens teeth using a series of custom, removable trays — with no metal brackets or wires. Each set of aligners is worn for about two weeks, gradually shifting your teeth into their ideal position. At <strong>MLK Dental Center</strong> in Southwest Atlanta, Dr. Mordena Sullen is a certified ClearCorrect provider, offering the full treatment from consultation through final retainer.
              </p>

              <h2>ClearCorrect vs. Braces</h2>
              <div className="two-col-highlights">
                <div className="highlight-card highlight-card--green">
                  <h4>✓ ClearCorrect Advantages</h4>
                  <ul>
                    <li>Nearly invisible — most people won&apos;t notice</li>
                    <li>Removable — eat anything, brush normally</li>
                    <li>More comfortable — no metal to irritate gums</li>
                    <li>Fewer office visits required</li>
                    <li>Treatment time: 6–18 months depending on case</li>
                  </ul>
                </div>
                <div className="highlight-card highlight-card--gray">
                  <h4>Traditional Braces</h4>
                  <ul>
                    <li>Visible metal brackets and wires</li>
                    <li>Fixed — dietary restrictions apply</li>
                    <li>Can cause discomfort and irritation</li>
                    <li>Monthly tightening appointments required</li>
                    <li>Treatment time: 18–36 months typically</li>
                  </ul>
                </div>
              </div>

              <h2>The ClearCorrect Process</h2>
              <ol className="process-steps">
                {[
                  { step: '01', title: 'Smile Assessment', desc: 'Dr. Sullen takes digital impressions and photographs to create your personalized ClearCorrect treatment plan.' },
                  { step: '02', title: 'Custom Aligner Fabrication', desc: 'Your aligners are custom-manufactured in the ClearCorrect lab and delivered to our office within 2–3 weeks.' },
                  { step: '03', title: 'Wear & Progress', desc: 'Wear your aligners 20–22 hours per day, switching to a new set every 2 weeks as your teeth gradually shift.' },
                  { step: '04', title: 'Monitoring Visits', desc: 'Check-in appointments every 6–8 weeks so Dr. Sullen can confirm your treatment is progressing as planned.' },
                  { step: '05', title: 'Retainers & Results', desc: 'After treatment, you&apos;ll receive custom retainers to maintain your beautiful new smile permanently.' },
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

              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {[
                  { q: 'How long does ClearCorrect treatment take?', a: 'Most cases are completed in 6–18 months. Mild alignment issues may resolve in as little as 6 months, while more complex cases can take up to 24 months.' },
                  { q: 'Does ClearCorrect hurt?', a: 'You may feel mild pressure when switching to a new set of aligners — this is normal and indicates the teeth are moving. Discomfort is typically much less than traditional braces.' },
                  { q: 'Can I eat and drink with aligners in?', a: 'You should remove your aligners when eating or drinking anything other than water. This is actually one of the biggest advantages — no food restrictions!' },
                  { q: 'How much does ClearCorrect cost in Atlanta?', a: 'ClearCorrect treatment at MLK Dental Center typically ranges from $2,500–$5,000 depending on complexity. We offer flexible payment plans and accept most major insurance.' },
                  { q: 'Am I a candidate for ClearCorrect?', a: 'ClearCorrect treats most common issues: crowding, spacing, overbite, underbite, crossbite. Dr. Sullen will assess your specific case at your free consultation.' },
                ].map((faq, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">{faq.q}</summary>
                    <div className="faq-answer">{faq.a}</div>
                  </details>
                ))}
              </div>

              <div className="doctor-trust-block">
                <div className="trust-avatar">MS</div>
                <blockquote className="trust-quote">
                  &ldquo;ClearCorrect has been a game-changer for my adult patients who always wanted straighter teeth but never wanted braces. Seeing someone smile confidently at the end of treatment — that never gets old.&rdquo;
                  <cite>— Dr. Mordena Sullen, DMD</cite>
                </blockquote>
              </div>
            </article>

            <aside className="service-sidebar" id="consultation">
              <div className="sidebar-sticky">
                <AppointmentForm compact title="Start Your Free Smile Assessment" />
                <div className="sidebar-contact-alt">
                  <p>Prefer to call?</p>
                  <a href="tel:4047527777" className="sidebar-phone">(404) 752-7777</a>
                  <p className="sidebar-hours">Mon–Fri: 9 AM – 5 PM</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BeforeAfterGallery limit={3} />
    </>
  );
}
