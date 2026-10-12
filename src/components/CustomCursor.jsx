import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop with fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('.skill-node') ||
        target.closest('.glass-panel')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrame;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient mouse glow */}
      <div
        className="mouse-spotlight"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
      {/* Precision reticle dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          backgroundColor: '#00f2fe',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          boxShadow: '0 0 10px #00f2fe',
          transition: 'width 0.15s, height 0.15s'
        }}
      />
      {/* Trailing HUD ring */}
      <div
        style={{
          position: 'fixed',
          top: trailing.y,
          left: trailing.x,
          width: isPointer ? 36 : 24,
          height: isPointer ? 36 : 24,
          border: `1.5px solid ${isPointer ? 'rgba(0, 242, 254, 0.8)' : 'rgba(168, 85, 247, 0.4)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, border-color 0.2s'
        }}
      />
    </>
  );
}
