import Achievements from '../components/Achievements';
import StatsDashboard from '../components/StatsDashboard';

export default function AchievementsPage() {
  return (
    <div className="achievements-page" style={{ paddingTop: '5rem' }}>
      {/* 100% Unbeaten Trophy Highlight */}
      <Achievements />

      {/* Live Player Telemetry Dashboard */}
      <StatsDashboard />
    </div>
  );
}
