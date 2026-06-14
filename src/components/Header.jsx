import { navLinks } from '../data/siteData';

const brandLogo = '/cauce-symbol.svg';

const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=%2B573246780067&text=Quiero%20una%20demostracion%20de%20Olympo';

export function Header() {
  return (
    <header className="header">
      <div className="container nav-shell">
        <a href="#top" className="brand">
          <img src={brandLogo} alt="Olympo" className="brand-logo" />
          <span className="brand-text">Olympo</span>
        </a>
        <nav className="nav-links" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar llamada
        </a>
      </div>
    </header>
  );
}
