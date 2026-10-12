import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'GAMES', to: '/games' },
    { label: 'ACHIEVEMENTS', to: '/achievements' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-brand" aria-label="LORD VRAXX Home">
            <div className="brand-emblem-mini">
              <span>V</span>
            </div>
            <span className="brand-text">{siteConfig.alias}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="nav-active-pill" />}
                      <span className="nav-link-text">{item.label}</span>
                      {isActive && <span className="nav-active-glow-dot" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link
              to="/contact"
              className="btn btn-primary nav-cta-btn"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
            >
              <Gamepad2 size={16} />
              <span>TEAM UP</span>
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Glassmorphism Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="badge badge-cyan">
            <Sparkles size={12} />
            <span>NAVIGATION MATRIX</span>
          </span>
        </div>

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span>{item.label}</span>
            <ChevronRight size={16} />
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.75rem' }}
        >
          <Gamepad2 size={18} />
          <span>JOIN THE PARTY</span>
        </Link>
      </div>
    </>
  );
}
