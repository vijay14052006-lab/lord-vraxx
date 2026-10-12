import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Always start at top of newly navigated page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition-wrap">
      {/* Subtle futuristic glass scanner light sweep */}
      <div className="glass-transit-sweep" />
      {children}
    </div>
  );
}
