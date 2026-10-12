import GameProfiles from '../components/GameProfiles';
import Quests from '../components/Quests';

export default function Games({ onToast }) {
  return (
    <div className="games-page" style={{ paddingTop: '5rem' }}>
      {/* Game Profiles with Balla (balla.jpg) and Free Fire (ff.jpg) */}
      <GameProfiles onToast={onToast} />

      {/* Active Squad Quests */}
      <Quests />
    </div>
  );
}
