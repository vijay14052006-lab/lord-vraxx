import { useState } from 'react';
import { ExternalLink, Copy, Check, Gamepad, Image } from 'lucide-react';
import { gamesData } from '../data/games';

export default function GameProfiles({ onToast }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyUid = (uid) => {
    navigator.clipboard.writeText(uid);
    setCopiedId(uid);
    if (onToast) {
      onToast(`UID ${uid} COPIED TO CLIPBOARD!`);
    }
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="section" id="games">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Gamepad size={14} />
            <span>TITLES // COMPETITIVE DOSSIER</span>
          </div>
          <h2 className="section-title">
            GAME <span className="glow-cyan">PROFILES</span>
          </h2>
          <p className="section-description">
            Dedicated breakdowns of competitive environments, player IDs, and ranked achievements.
          </p>
        </div>

        <div className="game-profiles-list">
          {gamesData.map((game, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={game.id}
                className={`glass-panel game-profile-card ${isReversed ? 'reverse' : ''}`}
              >
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                {/* Left/Right Text Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-cyan">{game.category}</span>
                    <span className="badge badge-purple">{game.badge}</span>
                  </div>

                  <h3 className="game-title">{game.title}</h3>
                  <div className="game-subtitle">{game.subtitle}</div>

                  <p className="game-desc">{game.description}</p>

                  <div className="game-specs-grid">
                    {game.specs.map((spec) => (
                      <div key={spec.label} className="game-spec-item">
                        <div className="game-spec-label">{spec.label}</div>
                        <div className="game-spec-val" style={{ color: game.accentColor }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {game.externalLink && (
                      <a
                        href={game.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <span>{game.buttonText}</span>
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {game.copyUidButton && (
                      <button
                        onClick={() => handleCopyUid(game.uid)}
                        className="btn btn-accent-pink"
                        id="copy-uid-btn"
                      >
                        {copiedId === game.uid ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copiedId === game.uid ? 'UID COPIED' : 'COPY UID'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Proper Screenshot / Media Container with 16:10 Aspect Ratio */}
                <div>
                  <div className={`screenshot-container ${game.image ? 'has-image' : ''}`}>
                    {game.image ? (
                      <>
                        <img
                          src={game.image}
                          alt={`${game.title} - ${game.subtitle}`}
                          className="screenshot-img"
                          loading="lazy"
                        />
                        <div className="screenshot-overlay-badge">
                          <span className="pulse-dot" />
                          <span>{game.badge}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Image className="screenshot-icon" />
                        <div className="screenshot-label">{game.placeholderText}</div>
                        <div className="screenshot-subtext">{game.placeholderSubtext}</div>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '12px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            color: 'var(--text-dim)'
                          }}
                        >
                          ASPECT: 16:10 // HD READY
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
