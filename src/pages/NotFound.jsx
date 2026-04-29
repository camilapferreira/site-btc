import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-sand-50 px-6 pt-32 pb-20">
      <div className="text-center max-w-xl">
        <div className="font-display text-7xl font-medium text-ink-900">404</div>
        <h1 className="mt-4 font-display text-3xl font-semibold">Página não encontrada</h1>
        <p className="mt-3 text-ink-700/80">
          A página que você procura não existe ou foi movida. Volte ao início e continue
          explorando.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-ink-950 hover:bg-ink-800 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
