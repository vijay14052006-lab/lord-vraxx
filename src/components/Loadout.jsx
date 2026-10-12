import { Swords, Crosshair, Flame, Armchair, Shield, Sparkles } from 'lucide-react';
import { loadoutData } from '../data/loadout';

const loadoutIconMap = {
  Swords,
  Crosshair,
  Flame,
  Armchair
};

export default function Loadout() {
  return (
    <section className="section" id="loadout">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Shield size={14} />
            <span>ARSENAL // ACTIVE SPECIALIZATION</span>
          </div>
          <h2 className="section-title">
            CURRENT <span className="glow-purple">LOADOUT</span>
          </h2>
          <p className="section-description">
            Equipped skill sets across competitive arenas and elite resting postures.
          </p>
        </div>

        <div className="loadout-grid">
          {loadoutData.map((item) => {
            const IconComp = loadoutIconMap[item.icon] || Sparkles;

            return (
              <div key={item.id} className="glass-panel loadout-card">
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                <div className="loadout-top">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${item.color}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span className="badge badge-purple">{item.tierStatus}</span>
                  </div>

                  <h3 className="loadout-game">{item.game}</h3>
                  <div className="loadout-role">{item.role}</div>

                  <p className="loadout-desc">{item.description}</p>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                    SIGNATURE TRAITS
                  </div>
                  <div className="loadout-traits">
                    {item.traits.map((trait) => (
                      <span key={trait} className="loadout-trait-chip">
                        • {trait}
                      </span>
                    ))}
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
