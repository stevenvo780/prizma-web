import { useState } from 'react';
import { Button, Topbar, Nav, NavItem } from 'prizma-ui';
import { navLinks } from '../data/siteData';

const brandLogo = '/prizma-symbol.svg';

const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=%2B573246780067&text=Quiero%20una%20demostracion%20de%20Prizma';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Topbar className="header">
      <div className="container nav-shell">
        <a href="#top" className="brand">
          <img src={brandLogo} alt="Prizma" className="brand-logo" />
          <span className="brand-text">Prizma</span>
        </a>

        {/* Desktop nav */}
        <Nav aria-label="Navegación principal" className="nav-links">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </Nav>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Agendar llamada</Button>
        </a>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Navegación móvil" className="nav-mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="nav-mobile-link">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </Topbar>
  );
}
