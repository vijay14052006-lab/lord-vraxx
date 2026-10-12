import { useEffect, useState, useRef } from 'react';
import {
  User,
  ShieldAlert,
  MapPin,
  Zap,
  Users,
  Code,
  Trophy,
  Crown,
  Activity
} from 'lucide-react';
import { playerStats } from '../data/stats';

const iconMap = {
  User,
  ShieldAlert,
  MapPin,
  Zap,
  Users,
  Code,
  Trophy,
  Crown
};

export default function StatsDashboard() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    competitions: 0,
    wins: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Smooth count-up animation for numeric stats
          const duration = 1200;
          const startTime = performance.now();

          const animateCounts = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              experience: Math.floor(easeProgress * 2),
              clients: 0,
              competitions: Math.floor(easeProgress * 1),
              wins: Math.floor(easeProgress * 1)
            });

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts({
                experience: 2,
                clients: 0,
                competitions: 1,
                wins: 1
              });
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="section" id="stats" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Activity size={14} />
            <span>PLAYER TELEMETRY // REAL DATA</span>
          </div>
          <h2 className="section-title">
            PLAYER <span className="glow-purple">STATS</span>
          </h2>
          <p className="section-description">
            Transparent combat and career metrics. 100% genuine — zero inflated statistics.
          </p>
        </div>

        <div className="stats-grid">
          {playerStats.map((stat) => {
            const IconComp = iconMap[stat.icon] || Zap;
            const isCountable = stat.numeric && hasAnimated;
            const displayValue = isCountable
              ? counts[stat.id] !== undefined
                ? counts[stat.id]
                : stat.value
              : stat.value;

            return (
              <div
                key={stat.id}
                className={`glass-panel stat-card ${stat.highlight ? 'highlight' : ''}`}
              >
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                <div className="stat-header">
                  <span className="stat-label">{stat.label}</span>
                  <IconComp className="stat-icon" />
                </div>

                <div>
                  <div className="stat-value">
                    {displayValue}
                    {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                  </div>
                  <div className="stat-subtitle">{stat.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
