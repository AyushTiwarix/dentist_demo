'use client';
import { useState } from 'react';
import Link from 'next/link';

interface AppointmentFormProps {
  compact?: boolean;
  title?: string;
}

const services = [
  'Dental Implants',
  'ClearCorrect Aligners',
  'Porcelain Veneers',
  'Dental Crowns',
  'Teeth Whitening',
  'General / Cleaning',
  'Emergency Care',
  'Other',
];

export default function AppointmentForm({ compact = false, title = 'Request an Appointment' }: AppointmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to backend/Formspree/EmailJS
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`appt-form-wrap${compact ? ' compact' : ''}`}>
        <div className="form-success">
          <div className="success-icon" aria-hidden="true">✓</div>
          <h3>Thank You!</h3>
          <p>We received your request and will call you within 1 business day to confirm your appointment.</p>
          <p className="success-phone">
            Need immediate help?{' '}
            <a href="tel:4047527777" className="success-call">(404) 752-7777</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`appt-form-wrap${compact ? ' compact' : ''}`}>
      <div className="form-header">
        <h3 className="form-title">{title}</h3>
        <p className="form-subtitle">We&apos;ll call you within 1 business day to confirm.</p>
      </div>

      <form onSubmit={handleSubmit} className="appt-form" noValidate aria-label="Appointment request form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="appt-name" className="form-label">Full Name *</label>
            <input
              id="appt-name"
              type="text"
              name="name"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="appt-phone" className="form-label">Phone Number *</label>
            <input
              id="appt-phone"
              type="tel"
              name="phone"
              required
              placeholder="(404) 000-0000"
              value={form.phone}
              onChange={handleChange}
              className="form-input"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="appt-email" className="form-label">Email Address</label>
          <input
            id="appt-email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className="form-input"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="appt-service" className="form-label">Service of Interest</label>
          <select
            id="appt-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="form-input form-select"
          >
            <option value="">Select a service…</option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {!compact && (
          <div className="form-group">
            <label htmlFor="appt-message" className="form-label">Message (optional)</label>
            <textarea
              id="appt-message"
              name="message"
              rows={3}
              placeholder="Tell us a bit about your dental needs…"
              value={form.message}
              onChange={handleChange}
              className="form-input form-textarea"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-lg form-submit" id="appt-submit">
          Request My Appointment
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>

        <p className="form-disclaimer">
          By submitting, you agree to be contacted at the number provided. No spam — ever.
        </p>
      </form>

      <style jsx>{`
        .appt-form-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: var(--shadow-md);
        }

        .appt-form-wrap.compact { padding: 1.5rem; }

        .form-header { margin-bottom: 1.5rem; }

        .form-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--text-dark);
          margin-bottom: 0.3rem;
        }

        .form-subtitle {
          font-size: 0.85rem;
          color: var(--text-light);
          margin: 0;
        }

        .appt-form { display: flex; flex-direction: column; gap: 1rem; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group { display: flex; flex-direction: column; gap: 0.35rem; }

        .form-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-dark);
          letter-spacing: 0.02em;
        }

        .form-input {
          padding: 0.75rem 1rem;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-family: var(--font-sans);
          color: var(--text-dark);
          background: var(--white);
          transition: var(--transition);
          outline: none;
          width: 100%;
        }

        .form-input:focus {
          border-color: var(--emerald);
          box-shadow: 0 0 0 3px rgba(11,107,80,0.12);
        }

        .form-select { cursor: pointer; }

        .form-textarea { resize: vertical; min-height: 80px; }

        .form-submit {
          width: 100%;
          justify-content: center;
          margin-top: 0.25rem;
        }

        .form-disclaimer {
          font-size: 0.72rem;
          color: var(--text-light);
          text-align: center;
          margin: 0;
        }

        /* Success state */
        .form-success {
          text-align: center;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .form-success h3 {
          color: var(--emerald);
          font-family: var(--font-serif);
        }

        .form-success p { color: var(--text-mid); font-size: 0.9rem; }

        .success-phone { font-size: 0.875rem !important; }

        .success-call {
          color: var(--emerald);
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
