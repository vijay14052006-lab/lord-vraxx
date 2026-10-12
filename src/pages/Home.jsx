import { Link } from 'react-router-dom';
import {
  User,
  Zap,
  Gamepad2,
  Trophy,
  ArrowRight,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import Hero from '../components/Hero';
import { siteConfig } from '../data/siteConfig';
import avatarImg from '../assets/avatar.jpg';

export default function Home() {
  const portalCards = [
    {
      title: 'IDENTITY // ABOUT',
      subtitle: 'Who is LORD VRAXX?',
      description: 'The story of Vijay Karthick from Chennai — gaming roots, real-world development, and personal philosophy.',
      to: '/about',
      badge: 'SECTOR 01',
      icon: User,
      color: '#00f2fe',
      preview: 'Avatar & 6 Core Pillars'
    },
    {
      title: 'TALENT // SKILL TREE',
      subtitle: 'Combat Reflexes & Stasis',
      description: 'Interactive mastery nodes across Balla arena combat, Free Fire survivor instinct, Slither.io, and Elite Sitting.',
      to: '/skills',
      badge: 'SECTOR 02',
      icon: Zap,
      color: '#a855f7',
      preview: 'Interactive Skill Nodes'
    },
    {
      title: 'DOSSIER // GAMES',
      subtitle: 'Ranked Warfare & Quests',
      description: 'Competitive profiles for Balla & Free Fire, verified player UID, active squad quests, and game moments.',
      to: '/games',
      badge: 'SECTOR 03',
      icon: Gamepad2,
      color: '#ff007f',
      preview: 'Balla & Free Fire Records'
    },
    {
      title: 'HALL OF FAME // RECORDS',
      subtitle: '100% Unbeaten Record',
      description: 'One competition entered, one win secured. Live player telemetry dashboard and tournament archives.',
      to: '/achievements',
      badge: 'SECTOR 04',
      icon: Trophy,
      color: '#ffd600',
      preview: 'Flawless Win Rate'
    }
  ];

  return (
    <div className="home-page">
      {/* Cinematic Opening Hero */}
      <Hero />

      {/* Quick Identity Teaser Banner */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '3.5rem' }}>
            <span className="hud-corner tl" />
            <span className="hud-corner tr" />
            <span className="hud-corner bl" />
            <span className="hud-corner br" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '2px solid rgba(0, 242, 254, 0.4)',
                    boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={avatarImg}
                    alt={siteConfig.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                    OPERATOR IN COMMAND
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.15rem 0' }}>
                    {siteConfig.alias}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {siteConfig.name} &bull; {siteConfig.location}
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                  “{siteConfig.bio}”
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/about" className="btn btn-secondary" style={{ width: 'auto' }}>
                  <span>READ FULL PROFILE</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Sector Portals Section Header */}
          <div className="section-header">
            <div className="section-tag">
              <Sparkles size={14} />
              <span>EXPLORE THE REALM // DIRECTORY</span>
            </div>
            <h2 className="section-title">
              SYSTEM <span className="glow-cyan">SECTORS</span>
            </h2>
            <p className="section-description">
              Select a sector to explore detailed gameplay records, active talent trees, and tournament dossiers.
            </p>
          </div>

          {/* 4 Interactive Portal Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {portalCards.map((card) => {
              const IconComp = card.icon;

              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="glass-panel interactive"
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px'
                  }}
                >
                  <span className="hud-corner tl" />
                  <span className="hud-corner tr" />
                  <span className="hud-corner bl" />
                  <span className="hud-corner br" />

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span className="badge badge-purple">{card.badge}</span>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid ${card.color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: card.color
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem', color: '#ffffff' }}>
                      {card.title}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: card.color, marginBottom: '0.75rem' }}>
                      {card.subtitle}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {card.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '1.5rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: card.color
                    }}
                  >
                    <span>ENTER SECTOR</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Party Connection Teaser */}
          <div
            className="glass-panel"
            style={{
              marginTop: '3.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              background: 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.1), rgba(11, 13, 19, 0.95))',
              border: '1px solid rgba(0, 242, 254, 0.25)'
            }}
          >
            <ShieldAlert size={32} style={{ color: 'var(--accent-cyan)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem' }}>
              LOOKING TO SQUAD UP?
            </h3>
            <p style={{ maxWidth: '540px', margin: '0 auto 1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Whether it's ranked combat in Balla, battle royale in Free Fire, or a wild new web idea.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <Gamepad2 size={16} />
              <span>COMMUNICATIONS PORTAL</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
