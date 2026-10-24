import type { Metadata } from 'next';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Custom Porcelain Veneers in Southwest Atlanta, GA 30314',
  description:
    'Transform chipped, stained, or misaligned teeth with handcrafted porcelain veneers at MLK Dental Center in Southwest Atlanta, GA 30314. Dr. Mordena Sullen DMD. Call (404) 752-7777.',
  alternates: { canonical: 'https://www.mlkdental.com/porcelain-veneers' },
};

const faqs = [
  {
    q: 'How long do porcelain veneers last?',
    a: 'Porcelain veneers typically last 10 to 15 years or longer with regular brushing, flossing, and routine dental cleanings.',
  },
  {
    q: 'Does getting veneers damage your natural teeth?',
    a: 'Only a minimal, ultra-thin layer of enamel (about 0.5 mm) is gently shaped to ensure a seamless, natural fit.',
  },
  {
    q: 'Can veneers fix crooked or gapped teeth?',
    a: 'Yes, porcelain veneers are frequently referred to as "instant orthodontics" for mild to moderate gaps, minor crowding, and uneven tooth shapes.',
  },
  {
    q: 'What is the cost of veneers in Southwest Atlanta?',
    a: 'Pricing depends on the number of teeth treated and aesthetic goals. We provide transparent estimates and financing options during your initial consultation.',
  },
];

export default function PorcelainVeneersPage() {
  return (
    <>
      <HeroBanner
        headline="Porcelain Veneers in Southwest Atlanta, GA 30314"
        subheadline="Achieve Your Dream Smile With Custom Ultra-Thin Porcelain Veneers · Dr. Mordena Sullen, DMD"
        ctaPrimary={{ label: 'Book Your Veneer Consultation', href: '#consultation' }}
        ctaSecondary={{ label: 'Call (404) 752-7777', href: 'tel:4047527777' }}
      />

      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/services">Services</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Porcelain Veneers</li>
          </ol>
        </div>
      </nav>

      <section className="service-page-section section">
        <div className="container">
          <div className="service-page-inner">
            <article className="service-content">
              <h2>Flawless Cosmetic Smile Transformations</h2>
              <p>
                Porcelain veneers are custom-molded, paper-thin shells of medical-grade ceramic bonded to the front surfaces of your teeth. At <strong>MLK Dental Center</strong> in Southwest Atlanta (30314), Dr. Mordena Sullen crafts veneers that flawlessly match your facial aesthetics, skin tone, and smile line.
              </p>

              <h2>What Porcelain Veneers Can Correct</h2>
              <div className="candidate-grid">
                {[
                  'Severe discoloration resistant to traditional bleaching',
                  'Chipped, cracked, or worn edges',
                  'Gaps or spacing between front teeth',
                  'Mild misalignment and irregularly shaped teeth',
                  'Uneven tooth length or asymmetry',
                ].map((item) => (
                  <div key={item} className="candidate-item">
                    <span className="candidate-check" aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <h2>The Veneer Process at MLK Dental Center</h2>
              <ol className="process-steps">
                {[
                  { step: '01', title: 'Smile Design & Consultation', desc: 'Discuss your aesthetic goals, review digital simulations, and map out your custom treatment plan.' },
                  { step: '02', title: 'Conservative Preparation', desc: 'A micro-thin layer of enamel is prepared, digital impressions are taken, and temporary veneers are placed.' },
                  { step: '03', title: 'Handcrafted Fabrication', desc: 'Our premier dental lab sculpts your lifelike porcelain shells with lifelike translucency and natural depth.' },
                  { step: '04', title: 'Final Bonding & Polish', desc: 'Dr. Sullen precisely bonds each veneer, ensuring perfect bite alignment and a radiant, enduring finish.' },
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
                <AppointmentForm compact title="Schedule a Veneer Consultation" />
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

      <BeforeAfterGallery limit={4} />
    </>
  );
}
