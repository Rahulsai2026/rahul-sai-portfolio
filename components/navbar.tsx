const navItems = [
  ["Work", "#work"],
  ["Role Fit", "#role-fit"],
  ["Why Me", "#why-me"],
  ["Background", "#background"],
  ["Contact", "#contact"],
];

export function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="wordmark" aria-label="Rahul Sai Boddapati, top of page">
        <span>RSB</span><i />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a href="mailto:boddapati.rahul@gmail.com" className="nav-contact">Get in touch <span aria-hidden="true">↗</span></a>
    </header>
  );
}
