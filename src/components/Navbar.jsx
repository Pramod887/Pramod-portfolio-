import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';
// each link includes an optional section id which is used when the
// layout switches to a single‑page scrollable experience on small
// viewports. the `to` field is still used for normal routing.
const links = [
  { label: 'Home', to: '/', sectionId: 'home' },
  { label: 'Projects', to: '/projects', sectionId: 'projects' },
  { label: 'Gallery', to: '/gallery', sectionId: 'gallery' },
  { label: 'Skills', to: '/skills', sectionId: 'skills' },
  { label: 'Certificates', to: '/certificates', sectionId: 'certificates' },
  { label: 'Blog', to: '/blog', sectionId: 'blog' },
  { label: 'Resume', to: '/resume', sectionId: 'resume' },
  { label: 'About me', to: '/about', sectionId: 'about' },
  { label: 'Contact', to: '/contact', sectionId: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // when width drops below 480px we render a single‑page layout
  const width = useWindowWidth();
  const isSinglePage = width <= 480;

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 900 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, [isMenuOpen]);
  // if we land on a page with a hash and are in single‑page mode, scroll once
  useEffect(() => {
    if (isSinglePage && window.location.hash) {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        // small timeout to allow sections to render
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isSinglePage]);
  const handleLinkClick = (e, sectionId) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (isSinglePage && sectionId) {
      e.preventDefault();
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // update URL hash so back/forward still works
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
      <div className="brand">
        <motion.div
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          PK
        </motion.div>
        <div className="brand-copy">
          <h1>Pramod Kumar M</h1>
          <span>Java • Android • Developer</span>
        </div>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        {links.map((link) => {
          const href =
            isSinglePage && link.sectionId ? `#${link.sectionId}` : link.to;

          return isSinglePage ? (
            <a
              key={href}
              href={href}
              onClick={(e) => handleLinkClick(e, link.sectionId)}
              className="nav-link inactive-link"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  color: 'var(--accent)',
                  textShadow: '0 0 8px var(--accent)',
                }}
                transition={{ duration: 0.3 }}
                className="nav-link-inner"
              >
                {link.label}
              </motion.div>
            </a>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : 'inactive-link'}`
              }
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    color: 'var(--accent)',
                    textShadow: '0 0 8px var(--accent)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="nav-link-inner"
                >
                  <motion.span
                    animate={{
                      color: isActive ? 'var(--accent)' : 'white',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
