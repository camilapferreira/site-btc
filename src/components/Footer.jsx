import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-ink-950 font-display font-bold">
              B
            </span>
            <span className="font-display font-semibold text-lg text-white">
              BTC<span className="text-gold-500">.</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm">
            Business Training Company. Escola de negócios fundada em 2009 por Renato Arakaki e
            Rodrigo Areco. Mais de 11.500 alunos formados.
          </p>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">Cursos</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/gbp" className="hover:text-gold-400">
                GBP — General Business Program
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Strategy & Finance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Business Fundamentals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                In Company
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">BTC</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/sobre-a-btc" className="hover:text-gold-400">
                Sobre a BTC
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Alumni
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Headhunter
              </a>
            </li>
            <li>
              <Link to="/gbp#inscricao" className="hover:text-gold-400">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <span>© 2026 BTC — Business Training Company. Todos os direitos reservados.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-400">
              Termos
            </a>
            <a href="#" className="hover:text-gold-400">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
