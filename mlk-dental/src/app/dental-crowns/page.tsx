import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Custom Dental Crowns in Southwest Atlanta, GA 30314',
  description:
    'Restore broken, decayed, or weakened teeth with durable porcelain dental crowns at MLK Dental Center in Southwest Atlanta, GA 30314. Dr. Mordena Sullen DMD. Call (404) 752-7777.',
  alternates: { canonical: 'https://www.mlkdental.com/dental-crowns' },
};

const faqs = [
  {
    q: 'What is a dental crown and when is it needed?',
    a: 'A dental crown is a custom tooth-shaped cap placed over a damaged, cracked, or severely decayed tooth to restore its original strength, shape, appearance, and function.',
  },
  {
    q: 'How long do dental crowns last?',
    a: 'High-quality porcelain and ceramic crowns typically last between 10 to 15+ years with good oral hygiene and routine checkups.',
  },
  {
    q: 'Is getting a dental crown painful?',
    a: 'Not at all. The procedure is performed under local anesthesia to ensure complete comfort. Mild sensitivity for a day or two after placement is normal and temporary.',
  },
  {
    q: 'How does a crown match my natural teeth?',
    a: 'We use custom shade guides and high-grade dental ceramic matched specifically to your surrounding teeth for a seamless, undetectable look.',
  },
];

export default function DentalCrownsPage() {
  return (
    <>
      <HeroBanner
        headline="Dental Crowns in Southwest Atlanta, GA 30314"
        subheadline="Restore Tooth Strength, Function & Natural Aesthetics · Dr. Mordena Sullen, DMD"
        ctaPrimary={{ label: 'Schedule Crown Consultation', href: '#consultation' }}
        ctaSecondary={{ label: 'Call (404) 752-7777', href: 'tel:4047527777' }}
      />

      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/services">Services</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Dental Crowns</li>
          </ol>
        </div>
      </nav>

      <section className="service-page-section section">
        <div className="container">
          <div className="service-page-inner">
            <article className="service-content">
              <h2>Protect & Rebuild Weakened Teeth</h2>
              <p>
                When a tooth is severely decayed, fractured, or has undergone root canal therapy, a standard filling may not provide enough structural support. At <strong>MLK Dental Center</strong> in Southwest Atlanta, Dr. Mordena Sullen crafts precision-fit dental crowns that safeguard your tooth and let you chew with full confidence.
              </p>

              <h2>When Do You Need a Dental Crown?</h2>
              <div className="candidate-grid">
                {[
                  'Protecting a weak tooth from breaking or cracking',
                  'Restoring an already broken or severely worn tooth',
                  'Covering and supporting a tooth with a large filling',
                  'Protecting a tooth following root canal therapy',
                  'Covering a dental implant or severely discolored tooth',
                ].map((item) => (
                  <div key={item} className="candidate-item">
                    <span className="candidate-check" aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <h2>The Dental Crown Process</h2>
              <ol className="process-steps">
                {[
                  { step: '01', title: 'Comprehensive Exam & Prep', desc: 'Dr. Sullen gently shapes the outer tooth structure and removes any decay under comfortable local anesthesia.' },
                  { step: '02', title: 'Digital Impressions', desc: 'Precision digital impressions are captured for an accurate, comfortable fit, and a temporary crown is placed.' },
                  { step: '03', title: 'Precision Fabrication', desc: 'Your permanent crown is fabricated from premium porcelain/ceramic to match your natural tooth shade.' },
                  { step: '04', title: 'Bonding & Final Polish', desc: 'The crown is permanently cemented, bite alignment is verified, and you leave with restored bite strength.' },
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
                {faqs.map((faq, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">{faq.q}</summary>
                    <div className="faq-answer">{faq.a}</div>
                  </details>
                ))}
              </div>
            </article>

            <aside className="service-sidebar" id="consultation">
              <div className="sidebar-sticky">
                <AppointmentForm compact title="Schedule a Crown Consultation" />
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
