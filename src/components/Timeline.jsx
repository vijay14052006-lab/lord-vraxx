import { History, Activity, Rocket, Milestone } from 'lucide-react';
import { timelineData } from '../data/timeline';

const timelineIconMap = {
  History,
  Activity,
  Rocket
};

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Milestone size={14} />
            <span>PROGRESSION // CHRONOLOGY</span>
          </div>
          <h2 className="section-title">
            PERSONAL <span className="glow-purple">JOURNEY</span>
          </h2>
          <p className="section-description">
            From grassroots gaming passion to building polished web systems and future software quests.
          </p>
        </div>

        <div className="timeline-wrap">
          {timelineData.map((item) => {
            const IconComp = timelineIconMap[item.icon] || Milestone;

            return (
              <div key={item.phase} className="timeline-item">
                <div className="glass-panel timeline-card">
                  <span className="hud-corner tl" />
                  <span className="hud-corner tr" />
                  <span className="hud-corner bl" />
                  <span className="hud-corner br" />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge badge-purple">{item.phase}</span>
                    <span className="badge badge-cyan">{item.badge}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                    <IconComp size={18} style={{ color: item.color }} />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{item.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
