const brandLogo = '/prizma-symbol.svg';

const links = [
  {
    label: 'Prizma',
    href: 'https://www.humanizar.co/',
  },
  {
    label: 'Iris',
    href: 'https://emw.humanizar.cloud/login',
  },
  {
    label: 'Agora',
    href: 'https://agora.humanizar.cloud/',
  },
  {
    label: 'Terminal',
    href: 'https://terminal.humanizar-dev.cloud/',
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div>
          <p className="brand-line">
            <img src={brandLogo} alt="Prizma" className="footer-logo" />
            <span>Prizma</span>
          </p>
          <p>Arquitectura comercial, operativa y tecnica para empresas que quieren escalar en serio.</p>
        </div>
        <nav aria-label="Navegación secundaria">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
