import SkillTree from '../components/SkillTree';
import Loadout from '../components/Loadout';

export default function Skills({ onUnlockTimeWaster }) {
  return (
    <div className="skills-page" style={{ paddingTop: '5rem' }}>
      {/* Interactive RPG Skill Tree */}
      <SkillTree onUnlockTimeWaster={onUnlockTimeWaster} />

      {/* Active Specialization Loadout */}
      <Loadout />
    </div>
  );
}
