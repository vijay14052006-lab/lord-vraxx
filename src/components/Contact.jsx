import { useState } from 'react';
import { ArrowUp, Gamepad2, ShieldAlert, Sparkles } from 'lucide-react';
import { socialsData } from '../data/socials';

export default function Contact({ onToast }) {
  const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setClicked(true);
    if (onToast) {
      onToast('COMMS OFFLINE // Contact channels are currently in preparation.');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Gamepad2 size={14} />
            <span>COMMUNICATIONS // STATUS</span>
          </div>
          <h2 className="section-title">
            WANNA <span className="glow-cyan">TEAM UP?</span>
          </h2>
          <p className="section-description">{socialsData.subheading}</p>
        </div>

        {/* Privacy-Safe Contact Card */}
        <div style={{ maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
            <span className="hud-corner tl" />
            <span className="hud-corner tr" />
            <span className="hud-corner bl" />
            <span className="hud-corner br" />

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: 'var(--accent-cyan)'
              }}
            >
              <ShieldAlert size={24} />
            </div>

            <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
              <span className="pulse-dot" />
              <span>STATUS: {socialsData.status}</span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
              DIRECT COMMS IN PREPARATION
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              {socialsData.note}
            </p>

            <button
              onClick={handleContactClick}
              className="btn btn-primary"
              id="contact-btn"
              style={{
                minWidth: '200px',
                cursor: 'pointer'
              }}
              title="Contact channels coming soon"
            >
              <Sparkles size={16} />
              <span>{socialsData.buttonText}</span>
            </button>

            {clicked && (
              <div
                style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-cyan)'
                }}
              >
                // COMMS CHANNEL IS TEMPORARILY OFFLINE
              </div>
            )}
          </div>
        </div>

        {/* Final CTA Box */}
        <div className="party-cta-box">
          <h3 className="party-cta-title">READY TO JOIN THE PARTY?</h3>
          <p className="party-cta-subtitle">
            Whether it's a game, a project, or just another questionable decision — let's see what happens.
          </p>

          <div className="party-cta-actions">
            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              id="back-to-top-btn"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>BACK TO TOP</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
