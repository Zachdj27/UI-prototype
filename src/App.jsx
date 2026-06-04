import React, { useState } from 'react';
import './style.css';
import barbershopImage from './assets/barbershop-interior.jpg';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div
      className="prototype-container d-flex flex-column justify-content-between"
      style={{ backgroundImage: `url(${barbershopImage})` }}
    >
      {/* Dark overlay sits between the image and the content */}
      <div className="bg-overlay" />

      <nav className="navbar custom-navbar px-4 py-3">
        <button
          className="navbar-brand fw-bold text-white bg-transparent border-0 fs-3 p-0"
          onClick={() => setCurrentView('home')}
        >
          SuperCutz
        </button>
        <button
          className={`nav-link-custom py-2 px-3 rounded ${currentView !== 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('hours')}
        >
          Hours &amp; Location
        </button>
      </nav>

      <main className="container d-flex flex-column align-items-center justify-content-center flex-grow-1 p-4 my-5">

        {currentView === 'home' && (
          <div className="info-display-card shadow-lg w-100 p-5 text-center">
            <div className="brand-badge mb-3">EST. 2010</div>
            <h1 className="fw-bold mb-2 display-4 card-title">SuperCutz</h1>
            <p className="card-subtitle mb-4">A community barbershop built for everyone.</p>

            <div className="accessibility-banner d-inline-flex align-items-center gap-2 p-3 mb-5 fw-semibold">
              <span className="access-icon">♿</span>
              100% Wheelchair accessible · Flat street-level entrance
            </div>

            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                className="btn-primary-action py-3 text-uppercase"
                onClick={() => setCurrentView('hours')}
              >
                View Store Hours &amp; Directions
              </button>
            </div>
          </div>
        )}

        {currentView === 'hours' && (
          <div className="info-display-card shadow-lg w-100 p-5 text-center">
            <div className="text-start mb-4">
              <button className="btn-back-link" onClick={() => setCurrentView('home')}>
                ← Back to Home
              </button>
            </div>

            <h2 className="fw-bold card-title mb-5">Hours &amp; Location</h2>

            <div className="hours-grid mb-4">
              <div className="hours-row">
                <span className="hours-label">Monday – Friday</span>
                <span className="hours-value">9:00 AM – 7:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-label">Saturday – Sunday</span>
                <span className="hours-value">9:00 AM – 5:00 PM</span>
              </div>
            </div>

            <div className="divider my-4" />

            <div className="mb-4">
              <p className="address-text mb-3">425 Boul. Saint-Joseph, Gatineau, QC</p>

              <div className="map-placeholder-box d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <span className="d-block fw-bold map-label mb-1">INTERACTIVE MAP</span>
                  <small className="map-sub">Map component goes here</small>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mt-5">
              <button
                className="btn-primary-action py-3 text-uppercase"
                onClick={() => setCurrentView('checklist')}
              >
                View Arrival &amp; Parking Details
              </button>
            </div>
          </div>
        )}

        {currentView === 'checklist' && (
          <div className="info-display-card shadow-lg w-100 p-5 text-center">
            <div className="text-start mb-4">
              <button className="btn-back-link" onClick={() => setCurrentView('hours')}>
                ← Back to Hours
              </button>
            </div>

            <h2 className="fw-bold card-title mb-2">Arrival Checklist</h2>
            <p className="card-subtitle mb-4">What to expect when arriving at our facility</p>

            <div className="checklist-wrapper text-start mx-auto mb-5 p-4">
              {[
                { label: 'Flat Entryway', desc: 'Zero steps, lips, or barrier thresholds at the main doors.' },
                { label: 'Power Doors', desc: 'Fully automated entry buttons at wheelchair height.' },
                { label: 'Designated Parking', desc: 'Two van-accessible spaces located right in the rear lot.' },
                { label: 'Spacious Layout', desc: 'Wide, unobstructed clearance between all cutting stations.' },
              ].map(({ label, desc }) => (
                <div className="checklist-item mb-3" key={label}>
                  <span className="check-mark">✓</span>
                  <span><strong>{label}:</strong> {desc}</span>
                </div>
              ))}
            </div>

            <p className="mb-3 card-subtitle">Would you like to speak with a barber directly?</p>

            <div className="d-grid gap-2 col-12 mx-auto">
              <a
                href="tel:6131234567"
                className="btn-primary-action py-3 text-decoration-none text-uppercase text-center d-block"
              >
                Call Us: (613) 123-4567
              </a>
            </div>
          </div>
        )}

      </main>

      <footer className="w-100 text-center py-4 footer-bar">
        <span className="designer-credit text-uppercase">Designed by Zachary Djerdjouri</span>
      </footer>
    </div>
  );
}
