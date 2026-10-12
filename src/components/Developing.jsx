import {
  Gamepad2,
  Layout,
  Code2,
  Sparkles,
  Cpu,
  Compass,
  Rocket
} from 'lucide-react';
import { developmentData } from '../data/development';

const devIconMap = {
  Gamepad2,
  Layout,
  Code2,
  Sparkles,
  Cpu,
  Compass
};

export default function Developing() {
  return (
    <section className="section" id="developing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={14} />
            <span>GROWTH PIPELINE // CONTINUOUS EXPANSION</span>
          </div>
          <h2 className="section-title">
            CURRENTLY <span className="glow-cyan">DEVELOPING</span>
          </h2>
          <p className="section-description">
            “{developmentData.philosophy}” — {developmentData.subtext}
          </p>
        </div>

        <div className="developing-grid">
          {developmentData.areas.map((area) => {
            const IconComp = devIconMap[area.icon] || Sparkles;

            return (
              <div key={area.id} className="glass-panel developing-card">
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                <div className="dev-card-header">
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${area.color}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: area.color
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <span className="badge badge-cyan">{area.status}</span>
                </div>

                <h3 className="dev-card-title">{area.title}</h3>
                <p className="dev-card-desc">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
