import { useState } from 'react';
import { Icon } from '../components/Icon.jsx';
import SectionEyebrow from '../components/SectionEyebrow.jsx';

const audiences = [
  'Está cursando uma das melhores universidades do Brasil e quer chegar nos processos seletivos com vantagem real.',
  'Mira consultoria estratégica (McKinsey, BCG, Bain) e sente que precisa de método para resolver cases.',
  'Quer trabalhar no mercado financeiro e precisa dominar valuation, contabilidade e finanças corporativas.',
  'Está se preparando para programas de trainee em grandes indústrias e quer destacar-se nas dinâmicas finais.',
  'É recém-formado em engenharia, economia, administração ou áreas afins e quer fechar o gap de negócios.',
];

const modules = [
  { n: '01', title: 'Soft Skills', text: 'Comunicação executiva, postura em entrevistas, oratória e como construir uma rede que abre portas.', items: ['Storytelling e estrutura de fala', 'Postura em fit interview', 'Networking de carreira'] },
  { n: '02', title: 'Corporate Finance & Valuation', text: 'Da leitura de demonstrativos até montar uma DCF do zero. O básico do mercado financeiro com profundidade.', items: ['Contabilidade aplicada', 'Estrutura de capital e WACC', 'Valuation por DCF e múltiplos'] },
  { n: '03', title: 'Estratégia de Negócios', text: 'Pensar como consultor: análise de indústria, vantagens competitivas, decisões de portfólio.', items: ['5 Forças e SWOT na prática', 'Estratégia competitiva', 'Decisões de make/buy/partner'] },
  { n: '04', title: 'Marketing', text: 'Como grandes empresas pensam consumidor, marca, precificação e crescimento.', items: ['Segmentação e posicionamento', 'Pricing estratégico', 'Funil e métricas'] },
  { n: '05', title: 'Modelagem de Negócios', text: 'Construir um modelo de negócio do zero — do unit economics ao plano financeiro.', items: ['Business Model Canvas', 'Unit economics e margem', 'Plano de receita e custo'] },
  { n: '06', title: 'Problem Solving', text: 'Resolução estruturada de problemas com MECE, hipóteses e priorização — o método das consultorias.', items: ['Issue tree e MECE', 'Resolução de cases ao vivo', 'Estruturação de recomendações'] },
];

const methodology = [
  { title: '70% prática, 30% teoria', text: 'Cada conceito é aplicado em case real na mesma aula. Você sai sabendo fazer, não só lendo sobre.' },
  { title: 'Turmas pequenas, atenção alta', text: 'Salas com média de 30 alunos para que todos sejam questionados, defendam suas hipóteses e levem feedback.' },
  { title: 'Material que vira ferramenta', text: 'Templates de Excel, frameworks e bibliotecas que você usa em provas, entrevistas e no primeiro emprego.' },
  { title: 'Projeto final defendido em banca', text: 'Equipes apresentam recomendações para um caso real diante de executivos do mercado. Bagagem para o currículo.' },
];

const instructors = [
  { name: 'Renato Arakaki', role: 'Co-fundador • Ex-consultoria', area: 'Finanças Corporativas & Valuation', avatar: 'https://i.pravatar.cc/300?img=12' },
  { name: 'Rodrigo Areco', role: 'Co-fundador', area: 'Estratégia & Modelagem', avatar: 'https://i.pravatar.cc/300?img=51' },
  { name: 'Carolina M.', role: 'Sr. Manager, McKinsey', area: 'Problem Solving & Cases', avatar: 'https://i.pravatar.cc/300?img=23' },
  { name: 'Felipe T.', role: 'Diretor, BTG Pactual', area: 'Mercado Financeiro', avatar: 'https://i.pravatar.cc/300?img=68' },
];

const faqs = [
  { q: 'Preciso ter background em negócios para fazer o GBP?', a: 'Não. O GBP foi pensado para alunos de qualquer área — engenharia, economia, direito, administração, ciências exatas. Construímos a base do zero, em ritmo acelerado.' },
  { q: 'Em qual período do curso eu deveria fazer?', a: 'A maioria dos alunos faz entre o 5º e o 8º semestre da graduação ou logo após formado. O ideal é estar a no máximo 2 anos do início dos processos seletivos que você quer disputar.' },
  { q: 'Como funciona a turma online?', a: 'As turmas live são 100% ao vivo, com a mesma dinâmica de discussão da presencial. Você participa de cases em breakout rooms e tem acesso à mesma rede de alumni.' },
  { q: 'A BTC ajuda com colocação no mercado?', a: 'Sim. Alunos do GBP têm acesso ao BTC Headhunter e a processos seletivos exclusivos com nossas empresas parceiras. 53% das turmas chegam à BTC por indicação justamente porque ex-alunos abrem portas.' },
  { q: 'Existe parcelamento ou bolsa?', a: 'O investimento pode ser parcelado em até 12x. Temos também um programa de bolsas por mérito acadêmico — pergunte ao nosso time durante a inscrição.' },
  { q: 'E se eu não conseguir acompanhar?', a: 'Todas as aulas são gravadas e ficam disponíveis. Além disso, você tem suporte direto com instrutores e monitorias semanais durante todo o programa.' },
];

export default function Gbp() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              Inscrições abertas • próxima turma
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium">
              GBP. <span className="italic text-gold-400">A base que muda</span> o seu próximo processo seletivo.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              O General Business Program é o curso carro-chefe da BTC. 108 horas para você sair com fluência em estratégia, finanças, marketing e os soft skills que decidem entrevistas — aplicados em casos reais.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Pill icon="clock">108 horas</Pill>
              <Pill icon="envelope">Presencial em SP / Live nacional</Pill>
              <Pill icon="users">Vagas limitadas</Pill>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#inscricao"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold px-6 py-3.5 rounded-md transition"
              >
                Garantir minha vaga
                <Icon name="arrow-right" className="w-4 h-4" />
              </a>
              <a
                href="#programa"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-md transition"
              >
                Ver programa completo
              </a>
            </div>
          </div>

          {/* Card lateral */}
          <div className="lg:col-span-5">
            <div className="bg-white text-ink-900 rounded-2xl p-7 shadow-soft border border-white/10">
              <div className="flex items-center justify-between">
                <SectionEyebrow>Próxima edição</SectionEyebrow>
                <span className="text-xs px-2 py-1 rounded-full bg-gold-500/15 text-gold-600 font-semibold">
                  Vagas finais
                </span>
              </div>
              <div className="mt-3 font-display text-3xl font-semibold">Turma de inverno • SP</div>
              <div className="mt-1 text-sm text-ink-700/70">Início em 16 de Junho • 12 semanas</div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <SmallStat label="Carga horária" value="108 horas" />
                <SmallStat label="Encontros" value="2x por semana" />
                <SmallStat label="Formato" value="Presencial / Live" />
                <SmallStat label="Investimento" value="12x a partir de R$ 590" />
              </div>

              <a
                href="#inscricao"
                className="mt-6 block text-center bg-ink-950 hover:bg-ink-800 text-white font-semibold py-3 rounded-md transition"
              >
                Quero me inscrever
              </a>
              <p className="mt-3 text-xs text-ink-700/60 text-center">
                Sem compromisso. Te chamamos para uma conversa antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>Para quem é</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Se você se viu em qualquer item da lista, o GBP foi feito pra você.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {audiences.map((a) => (
              <div key={a} className="flex gap-4 p-5 bg-sand-50 rounded-xl border border-ink-900/5">
                <div className="w-8 h-8 shrink-0 rounded-full bg-gold-500 text-ink-950 flex items-center justify-center font-bold">
                  →
                </div>
                <p className="text-ink-800">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section id="programa" className="py-24 bg-sand-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionEyebrow>Programa</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight max-w-3xl">
            108 horas. Seis pilares. Um profissional pronto.
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {modules.map((m) => (
              <article key={m.n} className="bg-white rounded-2xl p-7 border border-ink-900/5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-md bg-ink-950 text-gold-400 font-display font-semibold flex items-center justify-center">
                    {m.n}
                  </span>
                  <h3 className="font-display text-2xl font-semibold">{m.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink-700/80">{m.text}</p>
                <ul className="mt-4 text-sm text-ink-700/80 space-y-1.5">
                  {m.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              className="rounded-2xl w-full object-cover aspect-[4/5]"
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Discussão de case na BTC"
            />
          </div>
          <div className="lg:col-span-7">
            <SectionEyebrow>Metodologia</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Aprender fazendo. Como na consultoria de verdade.
            </h2>
            <div className="mt-8 space-y-6">
              {methodology.map((m) => (
                <div key={m.title} className="flex gap-4">
                  <div className="w-1 bg-gold-500 rounded" />
                  <div>
                    <h3 className="font-semibold">{m.title}</h3>
                    <p className="text-sm text-ink-700/80 mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUTORES */}
      <section className="py-24 bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow dark>Instrutores</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Quem dá aula trabalha onde você quer chegar.
            </h2>
            <p className="mt-5 text-white/70">
              Profissionais ativos em consultorias estratégicas, bancos de investimento e indústrias top do Brasil.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((i) => (
              <article key={i.name} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <img className="w-full aspect-square object-cover rounded-xl" src={i.avatar} alt="" />
                <h3 className="mt-4 font-display text-xl font-semibold">{i.name}</h3>
                <p className="text-sm text-gold-400">{i.role}</p>
                <p className="mt-2 text-xs text-white/70">{i.area}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionEyebrow>Resultados</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight max-w-3xl">
            O que dizem quem fez o GBP — e onde estão hoje.
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Testimonial
              quote="Entrei na BTC sem saber o que era um demonstrativo. Saí passando na entrevista do BTG. Não tem mágica: é treino estruturado."
              name="Pedro V. — Analista, BTG Pactual"
              meta="FGV Economia • GBP 2024"
              avatar="https://i.pravatar.cc/100?img=33"
            />
            <Testimonial
              quote="Fui pra entrevista da McKinsey resolvendo case com a mesma calma de uma aula da BTC. Pra mim, foi o maior diferencial."
              name="Mariana A. — Business Analyst, McKinsey"
              meta="USP Engenharia • GBP 2023"
              avatar="https://i.pravatar.cc/100?img=15"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <SectionEyebrow className="!text-center">Dúvidas frequentes</SectionEyebrow>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight text-center">
            O que costumam perguntar antes de se inscrever.
          </h2>

          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* INSCRIÇÃO */}
      <section id="inscricao" className="py-24 bg-ink-950 text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-gold-500/15 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionEyebrow dark>Inscrição</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight">
              Garanta sua vaga na próxima turma.
            </h2>
            <p className="mt-5 text-white/70">
              Deixe seu contato e nosso time fala com você em até 24h para entender seu momento e te ajudar a escolher o melhor formato.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-display font-semibold text-gold-400">12x</div>
                <div className="text-xs text-white/60 mt-1">parcelamento sem juros</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-display font-semibold text-gold-400">7 dias</div>
                <div className="text-xs text-white/60 mt-1">de garantia incondicional</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Pill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2">
      <Icon name={icon} className="w-4 h-4 text-gold-400" />
      {children}
    </span>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="bg-sand-50 rounded-lg p-3">
      <div className="text-xs text-ink-700/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function Testimonial({ quote, name, meta, avatar }) {
  return (
    <article className="rounded-2xl bg-sand-50 p-7 border border-ink-900/5">
      <div className="flex items-center gap-1 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <div className="mt-4 font-display text-2xl text-ink-900 leading-snug">"{quote}"</div>
      <div className="mt-6 flex items-center gap-3">
        <img className="w-11 h-11 rounded-full" src={avatar} alt="" />
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-ink-700/60">{meta}</div>
        </div>
      </div>
    </article>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-ink-900/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full p-5 flex justify-between items-center text-left"
      >
        <span className="font-semibold">{q}</span>
        <span
          className={`text-2xl text-gold-600 leading-none transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && <p className="px-5 pb-5 text-sm text-ink-700/80">{a}</p>}
    </div>
  );
}

function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="bg-white text-ink-900 rounded-2xl p-8 shadow-soft text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-gold-500 text-ink-950 flex items-center justify-center font-bold text-xl">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold">Recebemos seu contato!</h3>
        <p className="mt-2 text-sm text-ink-700/80">
          Em até 24h um consultor da BTC vai te chamar para conversar sobre a próxima turma.
        </p>
      </div>
    );
  }
  return (
    <form
      className="bg-white text-ink-900 rounded-2xl p-7 sm:p-8 shadow-soft space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <Field label="Nome completo" placeholder="Como você se chama?" />
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="E-mail" type="email" placeholder="seu@email.com" />
        <Field label="Celular" type="tel" placeholder="(11) 9 ____" />
      </div>
      <Field label="Universidade / Curso" placeholder="Ex: USP — Engenharia de Produção" />
      <div>
        <label className="text-xs font-semibold tracking-wider uppercase text-ink-700/60">
          Formato preferido
        </label>
        <select
          defaultValue="Presencial em São Paulo"
          className="mt-1 w-full bg-sand-50 border border-ink-900/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
        >
          <option>Presencial em São Paulo</option>
          <option>Live (online ao vivo)</option>
          <option>Quero saber mais antes de decidir</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold py-3.5 rounded-md transition mt-2"
      >
        Garantir minha vaga
      </button>
      <p className="text-xs text-ink-700/60 text-center">
        Ao enviar, você concorda em receber contato do time da BTC.
      </p>
    </form>
  );
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold tracking-wider uppercase text-ink-700/60">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full bg-sand-50 border border-ink-900/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
      />
    </div>
  );
}
