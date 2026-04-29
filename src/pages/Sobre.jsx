import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.jsx';
import SectionEyebrow from '../components/SectionEyebrow.jsx';

const stats = [
  { value: '+11.500', label: 'Alunos formados' },
  { value: '17 anos', label: 'de mercado' },
  { value: '53%', label: 'por indicação' },
  { value: '+200', label: 'empresas parceiras' },
];

const timeline = [
  { year: '2009', title: 'Fundação da BTC', text: 'Renato e Rodrigo, recém-saídos da consultoria e do mercado, criam a Business Training Company para fechar o gap entre a universidade e o mercado.' },
  { year: '2010', title: 'Primeira turma do GBP', text: 'O General Business Program estreia e nasce o formato que se tornaria referência: cases reais, instrutores do mercado, vagas limitadas.' },
  { year: '2015', title: 'BTC vira referência', text: 'Mais de 4.000 alunos formados. Consultorias e bancos passam a recrutar diretamente da nossa rede de alumni.' },
  { year: '2020', title: 'Expansão nacional', text: 'Aulas ao vivo levam a BTC para alunos de Norte a Sul. 15% da turma já vem de fora de São Paulo.' },
  { year: 'Hoje', title: '+11.500 alunos. E contando.', text: 'Três programas, consultoria estratégica, headhunter e uma rede de alumni que abre portas todos os meses.' },
];

const values = [
  { icon: 'star', title: 'Excelência sem firula', text: 'Conteúdo denso, instrutor que entrega, ambiente que cobra. Sem teatro, sem promessa vazia.' },
  { icon: 'lightbulb', title: 'Pensar antes de aplicar', text: 'A gente forma profissional que questiona o problema antes de correr para a planilha.' },
  { icon: 'users', title: 'Comunidade que abre porta', text: 'Quem termina entra para uma rede que se ajuda — recomendações, mentorias, vagas exclusivas.' },
];

const ecosystem = [
  { n: '01', title: 'Treinamentos abertos', text: 'GBP, SFP e Business Fundamentals — formação progressiva para jovens talentos.' },
  { n: '02', title: 'Consultoria estratégica', text: 'Projetos de gestão para grandes empresas e novos negócios — com a mesma metodologia da sala de aula.' },
  { n: '03', title: 'BTC Headhunter', text: 'Recrutamento de jovens talentos para empresas que confiam no nosso filtro.' },
];

export default function Sobre() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Sobre a BTC
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-medium">
            Formando os profissionais de negócios{' '}
            <span className="italic text-gold-400">que o mercado disputa.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
            Desde 2009, a Business Training Company desenvolve em estudantes e profissionais a visão crítica e profunda de negócios que a faculdade tradicional não entrega — e que separa quem entra dos que ficam de fora dos melhores processos seletivos do Brasil.
          </p>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="-mt-12 mb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="bg-white border border-ink-900/10 shadow-soft rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i > 0 ? 'border-l border-ink-900/10' : ''}`}>
                <div className="font-display text-4xl font-semibold text-ink-900">{s.value}</div>
                <div className="mt-1 text-xs text-ink-700/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionEyebrow>Nossa história</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Começou como uma inquietação. Virou uma escola.
            </h2>
            <p className="mt-5 text-ink-700 text-lg">
              Em 2009, dois engenheiros que trabalhavam com negócios — Renato Arakaki e Rodrigo Areco — perceberam o mesmo: as melhores universidades brasileiras formavam alunos brilhantes em técnica, mas com lacunas grandes em estratégia, finanças e mentalidade de negócio. Decidiram resolver isso.
            </p>
            <Link
              to="/gbp"
              className="mt-8 inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500"
            >
              Ver o curso que começou tudo
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative timeline pl-10 space-y-10">
              {timeline.map((t) => (
                <div key={t.year}>
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white shadow-soft" />
                  <SectionEyebrow>{t.year}</SectionEyebrow>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-ink-700/80">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO / VALORES */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>Missão</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Desenvolver visão crítica e profunda de negócios — para decisões melhores em empresas e carreiras.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-ink-900/5">
                <div className="w-11 h-11 rounded-md bg-ink-950 text-gold-400 flex items-center justify-center mb-4">
                  <Icon name={v.icon} />
                </div>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-700/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDADORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionEyebrow>Fundadores</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight max-w-3xl">
            Quem construiu a BTC — e ainda dá aula nela.
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <article className="bg-sand-50 rounded-2xl overflow-hidden border border-ink-900/5">
              <div className="aspect-[4/3] bg-ink-900 relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Renato Arakaki"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold">Renato Arakaki</h3>
                <p className="text-sm text-gold-600 font-medium mt-1">Co-fundador • Estratégia & Finanças</p>
                <p className="mt-4 text-ink-700/80 text-sm">
                  Engenheiro de formação, passou por consultoria estratégica antes de fundar a BTC. Hoje lidera os módulos de Finanças Corporativas e Valuation.
                </p>
              </div>
            </article>

            <article className="bg-sand-50 rounded-2xl overflow-hidden border border-ink-900/5">
              <div className="aspect-[4/3] bg-ink-900 relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Rodrigo Areco"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold">Rodrigo Areco</h3>
                <p className="text-sm text-gold-600 font-medium mt-1">Co-fundador • Estratégia & Marketing</p>
                <p className="mt-4 text-ink-700/80 text-sm">
                  Engenheiro com bagagem em marketing e gestão. Conduz os módulos de Estratégia, Modelagem de Negócios e Resolução de Problemas.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section className="py-24 bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <SectionEyebrow dark>O que fazemos</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Mais que cursos: um ecossistema para quem quer carreira de verdade.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {ecosystem.map((e) => (
              <div key={e.n} className="bg-ink-950 p-8">
                <SectionEyebrow dark>{e.n}</SectionEyebrow>
                <h3 className="mt-3 font-display text-2xl font-semibold">{e.title}</h3>
                <p className="mt-3 text-sm text-white/70">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO / CTA */}
      <section id="contato" className="py-24 bg-sand-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-3xl p-10 sm:p-14 grid md:grid-cols-2 gap-10 items-center border border-ink-900/5">
            <div>
              <SectionEyebrow>Vamos conversar</SectionEyebrow>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight">
                Pronto para destravar sua carreira?
              </h2>
              <p className="mt-4 text-ink-700/80">
                Fale com nosso time. Te ajudamos a entender qual programa faz mais sentido para o seu momento.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Obrigado! Em produção este envio integraria com seu CRM.');
      }}
    >
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full bg-sand-50 border border-ink-900/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="w-full bg-sand-50 border border-ink-900/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
      />
      <select
        defaultValue=""
        className="w-full bg-sand-50 border border-ink-900/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
      >
        <option value="" disabled>
          Tenho interesse em…
        </option>
        <option>General Business Program</option>
        <option>Strategy & Finance Program</option>
        <option>Business Fundamentals</option>
        <option>Treinamento In Company</option>
      </select>
      <button
        type="submit"
        className="w-full bg-ink-950 hover:bg-ink-800 text-white font-semibold py-3 rounded-md transition"
      >
        Quero ser contatado
      </button>
    </form>
  );
}
