import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { Toast, AchievementModal } from './components/Toast';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Games from './pages/Games';
import AchievementsPage from './pages/Achievements';
import ContactPage from './pages/Contact';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [unlockedModal, setUnlockedModal] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUnlockTimeWaster = () => {
    setUnlockedModal({
      title: "Achievement Unlocked: Professional Time Waster",
      subtitle: "Mastery over Doing Absolutely Nothing",
      lore: "You clicked 'Sitting Simply' 5 times. You have demonstrated superhuman dedication to resting and energy conservation. Chennai thanks you for your service."
    });
  };

  const handleFooterEasterEgg = () => {
    showToast("ROOT TERMINAL ACCESSED: VIJAY_KARTHICK_OVERRIDE_ENABLED");
  };

  return (
    <div className="app-container custom-cursor-active">
      {/* Background Interactive Ambient Particles & Noise */}
      <BackgroundEffects />

      {/* Futuristic Desktop Cursor */}
      <CustomCursor />

      {/* Premium Glassmorphism Sticky Navbar */}
      <Navbar />

      {/* Route-Based Pages with Futuristic Glass Transitions */}
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/skills"
              element={<Skills onUnlockTimeWaster={handleUnlockTimeWaster} />}
            />
            <Route path="/games" element={<Games onToast={showToast} />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage onToast={showToast} />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Persistent Footer */}
      <Footer onFooterEasterEgg={handleFooterEasterEgg} />

      {/* Floating HUD Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Secret Easter Egg Achievement Modal */}
      {unlockedModal && (
        <AchievementModal
          title={unlockedModal.title}
          subtitle={unlockedModal.subtitle}
          lore={unlockedModal.lore}
          onClose={() => setUnlockedModal(null)}
        />
      )}
    </div>
  );
}
