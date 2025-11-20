import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 900 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
      <div className="brand">
        <motion.div
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
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

      <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : "inactive-link"}`
            }
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  color: "var(--accent)",
                  textShadow: "0 0 8px var(--accent)",
                }}
                transition={{ duration: 0.3 }}
                className="nav-link-inner"
              >
                <motion.span
                  animate={{
                    color: isActive ? "var(--accent)" : "white",
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
        ))}
      </div>
    </nav>
  );
}
