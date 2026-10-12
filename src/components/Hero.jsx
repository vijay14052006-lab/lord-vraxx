import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Swords, Terminal, Crosshair, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const [rotateOffset, setRotateOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotateOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateOffset({ x: 0, y: 0 });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-meta">
              <span className="badge badge-cyan">
                <span className="pulse-dot" />
                {siteConfig.hudLocation}
              </span>
              <span className="badge badge-purple">
                <Terminal size={12} />
                {siteConfig.experienceBadge}
              </span>
              <span className="badge badge-green">
                <Sparkles size={12} />
                {siteConfig.status}
              </span>
            </div>

            <div className="hero-title-wrap">
              <div className="hero-eyebrow">
                <Crosshair size={15} />
                <span>VIJAY KARTHICK PRESENTS</span>
              </div>
              <h1 className="hero-name-main">{siteConfig.alias}</h1>
            </div>

            <div className="hero-tagline-box">
              <p className="hero-tagline">“{siteConfig.tagline}”</p>
            </div>

            <p className="hero-supporting">
              <span>Player.</span>
              <span>Builder.</span>
              <span className="punchline">Professional time-waster.</span>
            </p>

            <div className="hero-ctas">
              <Link to="/about" className="btn btn-primary">
                <span>ENTER THE WORLD</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/games" className="btn btn-secondary">
                <Swords size={16} />
                <span>VIEW MY QUESTS</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Visual: Original 3D Floating Emblem */}
          <div
            className="hero-visual-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: '1000px'
            }}
          >
            {/* Orbiting Concentric Energy Rings */}
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />

            {/* Tactical HUD Telemetry Callouts */}
            <div className="hud-telemetry top-left">
              <div>// OPERATOR</div>
              <div style={{ color: '#00f2fe', fontWeight: 600 }}>VIJAY KARTHICK</div>
            </div>

            <div className="hud-telemetry bottom-right">
              <div>// REGION</div>
              <div style={{ color: '#a855f7', fontWeight: 600 }}>CHENNAI_NODE // 14ms</div>
            </div>

            <div className="hud-telemetry bottom-left">
              <div>// COMBAT CLASS</div>
              <div style={{ color: '#ffd600', fontWeight: 600 }}>CHAOTIC TACTICIAN</div>
            </div>

            {/* Floating Central Core Orb with Custom VRAXX Monogram */}
            <div
              className="emblem-core-orb"
              style={{
                transform: `rotateY(${rotateOffset.x}deg) rotateX(${rotateOffset.y}deg)`
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="emblem-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="heroVraxxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#ff007f" />
                  </linearGradient>
                </defs>
                {/* Outer Crosshair Points */}
                <circle cx="50" cy="50" r="42" stroke="url(#heroVraxxGrad)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
                <line x1="50" y1="2" x2="50" y2="12" stroke="#00f2fe" strokeWidth="2" />
                <line x1="50" y1="88" x2="50" y2="98" stroke="#00f2fe" strokeWidth="2" />
                <line x1="2" y1="50" x2="12" y2="50" stroke="#00f2fe" strokeWidth="2" />
                <line x1="88" y1="50" x2="98" y2="50" stroke="#00f2fe" strokeWidth="2" />

                {/* Central VRAXX Chevron Crest */}
                <polygon
                  points="50,78 22,26 36,26 50,56 64,26 78,26"
                  fill="url(#heroVraxxGrad)"
                />
                <circle cx="50" cy="20" r="4" fill="#00f2fe" />
                <circle cx="30" cy="20" r="2.5" fill="#a855f7" />
                <circle cx="70" cy="20" r="2.5" fill="#ff007f" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
