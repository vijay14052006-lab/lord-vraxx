import { Trophy, X, Sparkles } from 'lucide-react';

export function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <Sparkles size={16} style={{ color: '#00f2fe' }} />
        <span>{message}</span>
      </div>
    </div>
  );
}

export function AchievementModal({ title, subtitle, lore, onClose }) {
  if (!title) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="trophy-glow-emblem" style={{ margin: '0 auto 1.25rem' }}>
          <Trophy size={36} />
        </div>

        <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
          SECRET EASTER EGG UNLOCKED
        </div>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          {title}
        </h3>

        <p style={{ fontSize: '1rem', color: '#ffdda1', marginBottom: '1rem', fontStyle: 'italic' }}>
          {subtitle}
        </p>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '2rem' }}>
          {lore}
        </p>

        <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
          RESUME OPERATION
        </button>
      </div>
    </div>
  );
}
