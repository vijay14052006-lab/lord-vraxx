import { Link } from 'react-router-dom';
import { Swords, CheckCircle2, ArrowRight } from 'lucide-react';
import { questsData } from '../data/quests';

export default function Quests() {
  return (
    <section className="section" id="quests">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Swords size={14} />
            <span>ACTIVE BOUNTIES // SQUAD INVITATIONS</span>
          </div>
          <h2 className="section-title">
            CURRENT <span className="glow-purple">QUESTS</span>
          </h2>
          <p className="section-description">
            Looking to team up, grind ranks, and introduce tactical disorder into the server.
          </p>
        </div>

        <div className="quests-grid">
          {questsData.map((quest) => (
            <div key={quest.id} className="glass-panel quest-card">
              <span className="hud-corner tl" />
              <span className="hud-corner tr" />
              <span className="hud-corner bl" />
              <span className="hud-corner br" />

              <div>
                <div className="quest-meta">
                  <span className="badge badge-purple">{quest.number}</span>
                  <span className="badge badge-cyan">{quest.partySlot}</span>
                </div>

                <div className="quest-header">
                  <h3 className="quest-title">{quest.title}</h3>
                  <div className="quest-tagline">{quest.tagline}</div>
                </div>

                <p className="quest-desc">“{quest.description}”</p>

                <ul className="quest-perks">
                  {quest.perks.map((perk) => (
                    <li key={perk} className="quest-perk-item">
                      <CheckCircle2 size={16} style={{ color: quest.accentColor, flexShrink: 0 }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quest-footer">
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    REWARD
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                    {quest.reward}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{ padding: '0.7rem 1.25rem', fontSize: '0.8rem' }}
                >
                  <span>{quest.contactAction}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
