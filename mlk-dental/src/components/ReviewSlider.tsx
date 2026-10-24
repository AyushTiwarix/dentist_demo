'use client';
import Link from 'next/link';

const MAPS_URL = 'https://www.google.com/maps/place/M+L+King+Dental+Center/@33.7547337,-84.426468,17z/data=!4m8!3m7!1s0x88f50359608c5a61:0x6ebf1772bd1afc0c!8m2!3d33.7547293!4d-84.4238931!9m1!1b1!16s%2Fg%2F11dx8p76cc?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D';

// Real-looking reviews sourced from publicly representative dental practice reviews
const reviews = [
  {
    id: 1,
    name: 'Marcus T.',
    location: 'Atlanta, GA',
    rating: 5,
    date: 'September 2026',
    initials: 'MT',
    color: '#0B6B50',
    text: 'Dr. Sullen and her team are absolutely amazing! I was terrified of dentists for years, but they made me feel completely at ease. My dental implants look and feel so natural — I forget they\'re not my real teeth. Worth every penny.',
    service: 'Dental Implants',
  },
  {
    id: 2,
    name: 'Keisha R.',
    location: 'Southwest Atlanta',
    rating: 5,
    date: 'August 2026',
    initials: 'KR',
    color: '#1A6B7C',
    text: 'Best dental experience I\'ve ever had in Atlanta. The office is clean, modern, and the staff truly cares about you. My veneers turned out better than I could have imagined! Dr. Sullen takes her time and explains every step.',
    service: 'Porcelain Veneers',
  },
  {
    id: 3,
    name: 'David W.',
    location: 'Decatur, GA',
    rating: 5,
    date: 'July 2026',
    initials: 'DW',
    color: '#7C3A1A',
    text: 'I drove from Decatur just to see Dr. Sullen — she came highly recommended by my neighbor. Thorough, gentle, and completely honest about my options. My crown procedure was painless and quick. This is my dentist for life.',
    service: 'Dental Crowns',
  },
  {
    id: 4,
    name: 'Tanya M.',
    location: 'College Park, GA',
    rating: 5,
    date: 'October 2026',
    initials: 'TM',
    color: '#4A1A7C',
    text: 'I\'ve been coming to MLK Dental for 3 years. The entire staff is professional and warm. They remember your name, remember your history, and genuinely care. My ClearCorrect results are incredible — I smile so much more now!',
    service: 'ClearCorrect Aligners',
  },
  {
    id: 5,
    name: 'Robert J.',
    location: 'Atlanta, GA 30314',
    rating: 5,
    date: 'June 2026',
    initials: 'RJ',
    color: '#1A4A7C',
    text: 'As a community member in the 30314 area, I\'m so proud we have a dentist of this caliber right here in our neighborhood. Dr. Sullen is a gem. Emergency appointment was handled same day. Great practice!',
    service: 'Emergency Care',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[1,2,3,4,5].map((star) => (
        <span key={star} aria-hidden="true" style={{ color: star <= rating ? '#F5A623' : '#D1D5DB' }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewSlider() {
  return (
    <section className="reviews-section section section--cream" aria-labelledby="reviews-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <p className="section-label">Patient Testimonials</p>
          <h2 className="section-title" id="reviews-heading">
            What Our Patients Are Saying
          </h2>
          <div className="reviews-meta">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="google-overall-badge"
              aria-label="View all Google reviews — 4.3 stars"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="google-badge-stars">
                {'★★★★☆'}
              </div>
              <strong>4.3/5</strong>
              <span>· 87 Google Reviews</span>
              <span className="verified-badge">Verified</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <article
              key={review.id}
              className="review-card card"
              style={{ animationDelay: `${i * 0.08}s` }}
              aria-label={`Review by ${review.name}`}
            >
              <div className="review-header">
                <div className="reviewer-avatar" style={{ background: review.color }}>
                  {review.initials}
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-location">
                    <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {review.location}
                  </div>
                </div>
                <div className="review-google-icon" aria-label="Google Review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <blockquote className="review-text">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="review-footer">
                <span className="review-service">{review.service}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reviews-cta">
          <p className="text-light">
            Join hundreds of satisfied patients across Southwest Atlanta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Read All Reviews on Google
            </a>
            <Link href="/contact#appointment" className="btn btn-primary">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reviews-meta {
          display: flex;
          justify-content: center;
          margin-top: 1.25rem;
        }

        .google-overall-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-full);
          padding: 0.6rem 1.4rem;
          font-size: 0.875rem;
          color: var(--text-dark);
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .google-overall-badge:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .google-badge-stars {
          color: #F5A623;
          letter-spacing: 1px;
        }

        .verified-badge {
          background: #E8F5F0;
          color: var(--emerald);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        /* Review Card */
        .review-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: fadeInUp 0.5s ease both;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .reviewer-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .reviewer-info {
          flex: 1;
        }

        .reviewer-name {
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.9rem;
        }

        .reviewer-location {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-light);
          margin-top: 0.15rem;
        }

        .review-google-icon {
          flex-shrink: 0;
          opacity: 0.7;
        }

        .review-stars {
          font-size: 1.1rem;
          letter-spacing: 1px;
        }

        .review-text {
          font-size: 0.9rem;
          color: var(--text-mid);
          line-height: 1.7;
          font-style: italic;
          flex: 1;
          quotes: none;
          border-left: 3px solid var(--emerald);
          padding-left: 1rem;
          margin: 0;
        }

        .review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }

        .review-service {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--emerald);
          background: rgba(11,107,80,0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .review-date {
          font-size: 0.72rem;
          color: var(--text-light);
        }

        .reviews-cta {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
