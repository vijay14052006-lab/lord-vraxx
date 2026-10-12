import { useState } from 'react';
import { Network, Sparkles, Armchair, Shield, Flame, Swords } from 'lucide-react';
import confetti from 'canvas-confetti';
import { skillTreeData } from '../data/skills';

export default function SkillTree({ onUnlockTimeWaster }) {
  const [activeNode, setActiveNode] = useState(null);
  const [sittingClicks, setSittingClicks] = useState(0);

  const handleNodeClick = (node) => {
    if (node.id === 'sitting') {
      const nextClicks = sittingClicks + 1;
      setSittingClicks(nextClicks);

      if (nextClicks === 5) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        if (onUnlockTimeWaster) {
          onUnlockTimeWaster();
        }
      }
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Network size={14} />
            <span>TALENT MATRIX // MASTERY NODES</span>
          </div>
          <h2 className="section-title">
            SKILL <span className="glow-cyan">TREE</span>
          </h2>
          <p className="section-description">
            Interactive skill nodes interconnected across combat reflexes, snake physics, and elite stasis.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="skill-tree-container">
          {skillTreeData.map((node) => {
            const isHumor = node.type === 'humor';
            return (
              <div
                key={node.id}
                className={`glass-panel skill-node ${isHumor ? 'humor-node' : ''}`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => handleNodeClick(node)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNodeClick(node)}
              >
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="skill-number">{node.number}</span>
                    <span className={`badge ${isHumor ? 'badge-gold' : 'badge-cyan'}`}>
                      {node.tier}
                    </span>
                  </div>

                  <h3 className="skill-title" style={{ marginTop: '0.75rem' }}>
                    {node.name}
                  </h3>

                  <div className="skill-tag">{node.category}</div>

                  <p className="skill-desc">{node.description}</p>
                </div>

                <div>
                  <div className="skill-stat-pills">
                    {Object.entries(node.stats).map(([statName, statVal]) => (
                      <span key={statName} className="skill-stat-pill">
                        {statName.toUpperCase()}: <strong style={{ color: node.color }}>{statVal}</strong>
                      </span>
                    ))}
                  </div>

                  {isHumor && (
                    <div style={{ marginTop: '1rem', fontSize: '0.72rem', color: '#ffd600', opacity: 0.85, fontStyle: 'italic' }}>
                      {sittingClicks > 0 && sittingClicks < 5
                        ? `(Click count: ${sittingClicks}/5 - keep chilling...)`
                        : sittingClicks >= 5
                        ? '★ Achievement Unlocked: Professional Time Waster'
                        : '(Tap repeatedly to test stillness)'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
