import { Link } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";

const universities = [
  "USP",
  "FGV",
  "Insper",
  "Unicamp",
  "PUC-Rio",
  "ITA",
  "UFRJ",
  "UFMG",
  "Ibmec",
  "Mackenzie",
];
const companies = [
  "McKinsey",
  "Bain",
  "BCG",
  "Itaú BBA",
  "BTG",
  "XP",
  "Ambev",
  "Vale",
  "Stone",
  "Nubank",
  "JP Morgan",
  "Suzano",
];

const pillars = [
  {
    icon: "chart",
    title: "Finanças & Valuation",
    text: "Modelar uma DCF, ler um balanço, falar de WACC com fluência. O básico que separa candidatos.",
  },
  {
    icon: "clock",
    title: "Estratégia & Cases",
    text: "Resolver casos sob pressão, estruturar problemas com MECE, falar a língua das consultorias.",
  },
  {
    icon: "pulse",
    title: "Marketing & Mercado",
    text: "Como grandes empresas pensam consumidor, marca e crescimento na prática.",
  },
  {
    icon: "users",
    title: "Soft Skills aplicadas",
    text: "Comunicação executiva, postura em entrevistas, networking que vira oportunidade real.",
  },
];

const method = [
  {
    n: "01",
    title: "Casos reais de mercado",
    text: "Problemas que aconteceram em empresas brasileiras nos últimos 12 meses.",
  },
  {
    n: "02",
    title: "Instrutores do mercado",
    text: "Profissionais ativos em McKinsey, BCG, BTG, Itaú e indústria de ponta.",
  },
  {
    n: "03",
    title: "Networking qualificado",
    text: "Acesso à rede de +11.500 alumni e processos seletivos exclusivos via BTC Headhunter.",
  },
  {
    n: "04",
    title: "Aulas interativas",
    text: "Cada aluno é questionado, defende suas hipóteses e leva feedback direto dos instrutores.",
  },
];

const testimonials = [
  {
    quote:
      "O GBP me trouxe segurança para passar nas três fases da McKinsey ainda no 7º semestre.",
    name: "Mariana A.",
    role: "Business Analyst, McKinsey • USP Engenharia",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "Saí da BTC sabendo modelar valuation. Foi o que fez diferença na entrevista do BTG.",
    name: "Pedro V.",
    role: "Analista, BTG Pactual • FGV Economia",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    quote:
      "Mais que conteúdo: a rede da BTC me abriu a porta do trainee da Ambev.",
    name: "Letícia C.",
    role: "Trainee, Ambev • Insper Administração",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Desde 2009 • +11.500 alunos formados
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium">
              Das melhores universidades do país para as{" "}
              <span className="italic text-gold-400">oportunidades</span> mais
              disputadas do mercado.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              A BTC é a escola de negócios que conecta universitários e
              recém-formados às consultorias estratégicas, ao mercado financeiro
              e às maiores indústrias do Brasil — com o conteúdo que sua
              faculdade não ensina.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/gbp"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold px-6 py-3.5 rounded-md transition"
              >
                Conheça o GBP
                <Icon name="arrow-right" className="w-4 h-4" />
              </Link>
              <Link
                to="/sobre-a-btc"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-md transition"
              >
                Por que a BTC?
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-display text-3xl font-semibold text-gold-400">
                  +11,5k
                </div>
                <div className="text-xs text-white/60 mt-1 leading-snug">
                  alunos formados desde 2009
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gold-400">
                  +200
                </div>
                <div className="text-xs text-white/60 mt-1 leading-snug">
                  empresas parceiras nas seleções
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gold-400">
                  53%
                </div>
                <div className="text-xs text-white/60 mt-1 leading-snug">
                  chegam por indicação de ex-alunos
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Aula da BTC com jovens profissionais"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 bg-white/95 backdrop-blur rounded-xl p-5 text-ink-900">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      className="w-9 h-9 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/80?img=11"
                      alt=""
                    />
                    <img
                      className="w-9 h-9 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/80?img=32"
                      alt=""
                    />
                    <img
                      className="w-9 h-9 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/80?img=45"
                      alt=""
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Próxima turma do GBP</div>
                    <div className="text-ink-700/70 text-xs">
                      Inscrições abertas • vagas limitadas
                    </div>
                  </div>
                  <Link
                    to="/gbp"
                    className="ml-auto text-sm font-semibold text-gold-600 hover:text-gold-500"
                  >
                    Ver →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-ink-900/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-700/60">
            Nossos alunos vêm das principais universidades — e vão para as
            melhores empresas
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-12 animate-marquee items-center text-ink-900/60 w-max">
              {[...universities, ...universities].map((u, i) => (
                <span
                  key={i}
                  className="font-display text-2xl font-semibold whitespace-nowrap"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>O problema</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              A faculdade não te prepara para a entrevista que você quer passar.
            </h2>
            <p className="mt-5 text-ink-700 text-lg">
              Engenharia, economia, administração, direito. Você fez tudo certo
              — mas chega na seleção da McKinsey, do Itaú BBA ou da Ambev e
              percebe que faltam habilidades que ninguém te ensinou.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-ink-900/5"
              >
                <div className="w-10 h-10 rounded-md bg-ink-950 text-gold-400 flex items-center justify-center mb-4">
                  <Icon name={p.icon} />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700/80">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section id="cursos" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionEyebrow>A solução</SectionEyebrow>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
                Três programas. Um caminho claro até o mercado de elite.
              </h2>
            </div>
            <p className="lg:max-w-md text-ink-700">
              Cada curso é uma etapa: do fundamento ao avançado, com instrutores
              que vêm de McKinsey, Bain, Itaú BBA, BTG e indústrias top.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <Link
              to="/gbp"
              className="group relative bg-ink-950 text-white rounded-2xl p-8 overflow-hidden transition hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl group-hover:bg-gold-500/30 transition" />
              <div className="relative">
                <SectionEyebrow dark>Programa carro-chefe</SectionEyebrow>
                <h3 className="mt-3 font-display text-3xl font-semibold">
                  General Business Program
                </h3>
                <p className="mt-2 text-white/70 text-sm">
                  A base sólida e completa de negócios. 108h cobrindo
                  Estratégia, Finanças, Marketing e Soft Skills com casos reais.
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
                  <span>108 horas</span>
                  <span>•</span>
                  <span>Presencial / Live</span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-gold-400 font-semibold">
                  Ver programa
                  <Icon
                    name="arrow-right"
                    className="w-4 h-4 group-hover:translate-x-1 transition"
                  />
                </div>
              </div>
            </Link>

            <div className="bg-sand-50 rounded-2xl p-8 border border-ink-900/5">
              <SectionEyebrow className="!text-ink-700/60">
                Aprofundamento
              </SectionEyebrow>
              <h3 className="mt-3 font-display text-3xl font-semibold">
                Strategy & Finance Program
              </h3>
              <p className="mt-2 text-ink-700/80 text-sm">
                Para quem já tem a base e quer ir a fundo em valuation, M&A,
                decisões de capital e estratégia corporativa.
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-ink-700/60">
                <span>Avançado</span>
                <span>•</span>
                <span>Aulas ao vivo</span>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-ink-900 font-semibold">
                Em breve detalhes
              </div>
            </div>

            <div className="bg-sand-50 rounded-2xl p-8 border border-ink-900/5">
              <SectionEyebrow className="!text-ink-700/60">
                Acelerador
              </SectionEyebrow>
              <h3 className="mt-3 font-display text-3xl font-semibold">
                Business Fundamentals
              </h3>
              <p className="mt-2 text-ink-700/80 text-sm">
                3 horas de essencial para destravar a primeira fase de processos
                seletivos. On-demand, comece agora.
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-ink-700/60">
                <span>3 horas</span>
                <span>•</span>
                <span>On-demand</span>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-ink-900 font-semibold">
                Comece em 5 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="py-24 bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow dark>Metodologia</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Sala de aula que cheira a corredor de consultoria.
            </h2>
            <p className="mt-5 text-white/70">
              Esquece a aula expositiva. Aqui você resolve cases reais, defende
              suas hipóteses, leva crítica direta e sai com bagagem para sentar
              do outro lado da mesa em uma entrevista.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {method.map((m) => (
              <div key={m.n} className="bg-ink-950 p-7">
                <div className="font-display text-5xl font-semibold text-gold-400">
                  {m.n}
                </div>
                <h3 className="mt-3 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-white/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="alumni" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <SectionEyebrow>Alumni</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Eles passaram por aqui antes de chegar lá.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border border-ink-900/10 p-7 bg-sand-50"
              >
                <div className="font-display text-2xl text-ink-900 leading-snug">
                  "{t.quote}"
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    className="w-11 h-11 rounded-full"
                    src={t.avatar}
                    alt=""
                  />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-ink-700/60">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <SectionEyebrow>Para onde nossos alunos vão</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium">
              As empresas que mais contratam alumni BTC
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {companies.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center bg-white rounded-xl py-6 font-display font-semibold text-lg text-ink-900/70"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 text-white p-10 sm:p-16">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight">
                A próxima entrevista pode ser a sua.
              </h2>
              <p className="mt-5 text-white/70 text-lg">
                Coloque-se à frente da sua turma. Vagas limitadas para a próxima
                edição do General Business Program.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/gbp#inscricao"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold px-6 py-3.5 rounded-md transition"
                >
                  Quero me inscrever no GBP
                </Link>
                <Link
                  to="/sobre-a-btc"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-md transition"
                >
                  Falar com um consultor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
