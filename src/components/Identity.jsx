import { User, Gamepad2, Trophy, BrainCircuit, Hammer, Smile, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import avatarImg from '../assets/avatar.jpg';

export default function Identity() {
  const pillars = [
    {
      title: 'Gaming',
      desc: 'Locking into intense lobbies, chasing clutch moments, and occasionally blaming server latency.',
      icon: Gamepad2,
      color: '#00f2fe'
    },
    {
      title: 'Competition',
      desc: 'High stakes, focused execution, and walking out with a 100% tournament record.',
      icon: Trophy,
      color: '#ffb703'
    },
    {
      title: 'Personal Development',
      desc: 'Constantly leveling up real-life stats instead of sitting passively on old glories.',
      icon: Sparkles,
      color: '#a855f7'
    },
    {
      title: 'Learning',
      desc: 'Dissecting mechanics, diving deep into code, and figuring things out through active trial and error.',
      icon: BrainCircuit,
      color: '#3b82f6'
    },
    {
      title: 'Building Things',
      desc: 'Turning raw concepts into interactive digital realities and sleek software interfaces.',
      icon: Hammer,
      color: '#10b981'
    },
    {
      title: 'Having Fun',
      desc: 'Because if you are not laughing along the way, you are playing the whole game wrong.',
      icon: Smile,
      color: '#ff007f'
    }
  ];

  return (
    <section className="section" id="identity">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>ORIGIN // IDENTITY</span>
          </div>
          <h2 className="section-title">
            WHO IS <span className="glow-cyan">LORD VRAXX?</span>
          </h2>
          <p className="section-description">
            A real-world builder powered by gamer reflexes and zero tolerance for dull templates.
          </p>
        </div>

        <div className="identity-grid">
          {/* Profile Photo Placeholder Area */}
          <div className="glass-panel profile-avatar-card">
            <span className="hud-corner tl" />
            <span className="hud-corner tr" />
            <span className="hud-corner bl" />
            <span className="hud-corner br" />

            <div className="avatar-frame has-image">
              <img
                src={avatarImg}
                alt={`${siteConfig.name} (${siteConfig.alias})`}
                className="avatar-img"
                loading="eager"
              />
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                {siteConfig.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                ALIAS: {siteConfig.alias}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                {siteConfig.location}
              </div>
            </div>
          </div>

          {/* Identity Story & Pillars */}
          <div className="identity-content">
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <span className="hud-corner tl" />
              <span className="hud-corner tr" />
              <span className="hud-corner bl" />
              <span className="hud-corner br" />

              <blockquote className="identity-quote">
                “{siteConfig.bio}”
              </blockquote>
              
              <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                {siteConfig.philosophy}
              </p>
            </div>

            {/* 6 Core Pillars */}
            <div className="pillars-grid">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="pillar-card">
                    <div className="pillar-title">
                      <IconComponent size={16} style={{ color: pillar.color }} />
                      <span>{pillar.title}</span>
                    </div>
                    <div className="pillar-desc">{pillar.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
