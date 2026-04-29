import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre-a-btc', label: 'Sobre a BTC' },
  { to: '/gbp', label: 'GBP' },
  { to: '/#cursos', label: 'Cursos', hash: true },
  { to: '/#alumni', label: 'Alumni', hash: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition ${isActive ? 'text-gold-600' : 'text-ink-800 hover:text-gold-600'}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 border-b border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-ink-950 text-gold-400 font-display font-bold">
            B
          </span>
          <span className="font-display font-semibold text-lg">
            BTC<span className="text-gold-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) =>
            l.hash ? (
              <a key={l.to} href={l.to} className="text-ink-800 hover:text-gold-600 transition">
                {l.label}
              </a>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/gbp#inscricao"
            className="hidden sm:inline-flex text-sm font-medium text-ink-900 hover:text-gold-600"
          >
            Falar com a BTC
          </Link>
          <Link
            to="/gbp"
            className="inline-flex items-center gap-2 bg-ink-950 hover:bg-ink-800 text-white text-sm font-semibold px-4 py-2.5 rounded-md transition"
          >
            Inscreva-se
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-ink-900/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-900/5 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((l) =>
              l.hash ? (
                <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="py-1 text-ink-800">
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-1 ${isActive ? 'text-gold-600' : 'text-ink-800'}`
                  }
                >
                  {l.label}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
