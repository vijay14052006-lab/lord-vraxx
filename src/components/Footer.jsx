import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onFooterEasterEgg }) {
  const [eggRevealed, setEggRevealed] = useState(false);

  const handleEggClick = () => {
    setEggRevealed(true);
    if (onFooterEasterEgg) {
      onFooterEasterEgg();
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Location Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div className="brand-emblem-mini">
                <span>V</span>
              </div>
              <h3 style={{ margin: 0 }}>{siteConfig.alias}</h3>
            </div>

            <p style={{ fontWeight: 600, color: '#ffffff' }}>{siteConfig.name}</p>
            <p>{siteConfig.location}</p>
            <p className="footer-tagline-quote">“{siteConfig.tagline}”</p>
          </div>

          {/* Quick Directory Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              DIRECTORY
            </div>

            <div className="footer-links-group">
              <Link
                to="/about"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                <span>About</span>
              </Link>

              <Link
                to="/skills"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                <span>Skills</span>
              </Link>

              <Link
                to="/games"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                <span>Games</span>
              </Link>

              <Link
                to="/achievements"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                <span>Achievements</span>
              </Link>

              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>{siteConfig.copyright}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              className="footer-egg-trigger"
              onClick={handleEggClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleEggClick()}
              title="Classified debug node"
            >
              <Terminal size={12} style={{ display: 'inline', marginRight: '4px' }} />
              {eggRevealed ? 'PROTOCOL: CHAOS_APPROVED' : 'SYSTEM://ROOT_NODE'}
            </span>

            <span>BUILT WITH REACT // ZERO TEMPLATES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
