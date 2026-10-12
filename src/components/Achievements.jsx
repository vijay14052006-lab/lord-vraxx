import { Trophy, Award, ShieldCheck, Flame } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>HALL OF FAME // TOURNAMENT RECORD</span>
          </div>
          <h2 className="section-title">
            COMPETITIVE <span className="glow-gold">ACHIEVEMENTS</span>
          </h2>
          <p className="section-description">
            High-voltage drama, mathematical perfection, and zero tournament losses.
          </p>
        </div>

        <div className="glass-panel achievement-card-center">
          <span className="hud-corner tl" />
          <span className="hud-corner tr" />
          <span className="hud-corner bl" />
          <span className="hud-corner br" />

          {/* Trophy Emblem */}
          <div className="trophy-glow-emblem">
            <Trophy size={40} />
          </div>

          <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
            <Award size={14} />
            <span>100% UNBEATEN RECORD</span>
          </div>

          <h3 className="achievement-headline">{achievementsData.highlightHeadline}</h3>

          <p className="achievement-quote">“{achievementsData.quote}”</p>

          <div className="achievement-specs">
            {achievementsData.details.map((detail) => (
              <div key={detail.label} className="game-spec-item">
                <div className="game-spec-label">{detail.label}</div>
                <div className="game-spec-val" style={{ color: '#ffd600' }}>
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '2rem',
              padding: '0.85rem 1.25rem',
              background: 'rgba(255, 183, 3, 0.05)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 183, 3, 0.2)',
              fontSize: '0.85rem',
              color: '#ffdda1'
            }}
          >
            <strong>Note:</strong> {achievementsData.loreNote}
          </div>
        </div>
      </div>
    </section>
  );
}
