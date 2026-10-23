import React, { useState, useEffect } from 'react';
import {
  Scissors,
  AlertTriangle,
  Flame,
  TrendingDown,
  ExternalLink,
  ShieldAlert,
  PieChart,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Building2,
  HeartPulse,
  Users,
  Briefcase,
  ArrowDownCircle,
  Scale
} from 'lucide-react';
import Header from './components/Header';
import BudgetChart from './components/BudgetChart';
import SliderCard from './components/SliderCard';
import Footer from './components/Footer';
import {
  META_CORTE,
  SLIDER_LIMITS,
  SCENARIOS,
  clampCut,
  sumCuts,
  calculateMetaPercent,
} from './lib/budget';
import heroImage from './assets/image_304b62.webp';
import mileiImage from './assets/milei_motosserra.webp';

export default function App() {
  // Estado dos 4 sliders de cortes orçamentários (em bilhões de R$)
  const [maquina, setMaquina] = useState(0);
  const [previdencia, setPrevidencia] = useState(0);
  const [saudeEducacao, setSaudeEducacao] = useState(0);
  const [social, setSocial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalCortado = sumCuts({ maquina, previdencia, saudeEducacao, social });
  const faltam = Math.max(0, META_CORTE - totalCortado);
  const percentualMeta = calculateMetaPercent(totalCortado);
  const metaAtingida = totalCortado >= META_CORTE;

  // Monitora a rolagem: só exibe a barra no topo quando o usuário descer a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSimulador = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const alterarValor = (setter, valorAtual, delta, max) => {
    setter(clampCut(valorAtual + delta, max));
  };

  const aplicarCenarioApenasMaquina = () => {
    setMaquina(SCENARIOS.apenasMaquina.maquina);
    setPrevidencia(SCENARIOS.apenasMaquina.previdencia);
    setSaudeEducacao(SCENARIOS.apenasMaquina.saudeEducacao);
    setSocial(SCENARIOS.apenasMaquina.social);
  };

  const aplicarCenarioFecharConta = () => {
    setMaquina(SCENARIOS.fecharConta.maquina);
    setPrevidencia(SCENARIOS.fecharConta.previdencia);
    setSaudeEducacao(SCENARIOS.fecharConta.saudeEducacao);
    setSocial(SCENARIOS.fecharConta.social);
  };

  const zerarSimulador = () => {
    setMaquina(0);
    setPrevidencia(0);
    setSaudeEducacao(0);
    setSocial(0);
  };

  const alertLine = (text) => (
    <p className="text-xs font-semibold text-red-700 flex items-center gap-1.5">
      <ShieldAlert className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </p>
  );

  const maquinaAlert =
    maquina === SLIDER_LIMITS.maquina ? (
      <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-xs font-semibold text-red-900 flex items-start gap-2">
        <ShieldAlert className="w-4 h-4 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
        <span>
          <strong>Alerta:</strong>{' '}
          {metaAtingida
            ? 'Você esvaziou a máquina pública — e mesmo assim precisou avançar sobre Previdência, Saúde e benefícios sociais para fechar a conta.'
            : `Você causou um apagão na máquina pública e ainda faltam R$ ${faltam} bilhões.`}
        </span>
      </div>
    ) : null;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-3 focus:py-2 focus:bg-white focus:text-red-800 focus:rounded focus:shadow-lg focus:font-semibold"
      >
        Ir para o conteúdo
      </a>
      <Header
        totalCortado={totalCortado}
        metaAtingida={metaAtingida}
        faltam={faltam}
        percentualMeta={percentualMeta}
        isScrolled={isScrolled}
        onScrollToSimulator={scrollToSimulador}
      />
      <main id="conteudo">
      {/* ========================================================================= */}
      {/* SEÇÃO 1: O Simulador (Hero Section - O Gancho Técnico)                    */}
      {/* ========================================================================= */}
      <section id="simulador" className="scroll-mt-20 pt-8 sm:pt-12 pb-16 sm:pb-20 px-3 sm:px-6 max-w-5xl mx-auto">
        {/* Cabeçalho Hero */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 border border-red-200">
            <Scale className="w-3.5 h-3.5 shrink-0" />
            Simulador Interativo do Orçamento Geral da União
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-stone-950 leading-[1.15] mb-4 sm:mb-6">
            Vamos conhecer o orçamento brasileiro e tentar cortar gastos!
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-stone-700 font-normal leading-relaxed">
            A promessa de campanha de Flávio Bolsonaro é{' '}
            {/* Hiperlink clicável para matéria oficial sobre os R$ 250 bilhões */}
            <a
              href="https://istoedinheiro.com.br/equipe-de-flavio-estuda-corte-de-2-do-pib-em-despesas-diz-folha"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver reportagem: Equipe de Flávio estuda corte de 2% do PIB em despesas (Folha/IstoÉ)"
              className="inline-flex items-center gap-1 font-bold text-red-800 underline decoration-red-400 decoration-2 underline-offset-4 hover:text-red-950 hover:decoration-red-700 transition group cursor-pointer"
            >
              <span>cortar R$ 250 bilhões</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline text-red-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            . Tente você mesmo fechar essa conta usando os dados reais do Governo Federal.
          </p>
        </div>

        {/* Card Principal do Simulador */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-4 sm:p-8 lg:p-10 mb-8 transition-all">
          {/* Painel do Termômetro da Meta */}
          <div className="bg-stone-50 rounded-xl p-4 sm:p-6 border border-stone-200 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Progresso do Corte
                </span>
                <div className="flex items-baseline gap-2 mt-0.5 sm:mt-1">
                  <span className="text-3xl sm:text-5xl font-black font-serif text-stone-900">
                    R$ {totalCortado}
                  </span>
                  <span className="text-lg sm:text-2xl text-stone-500 font-medium">
                    / R$ {META_CORTE} bi
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                {metaAtingida ? (
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Meta de R$ 250 bi alcançada!
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-800 font-bold text-xs sm:text-sm border border-red-200">
                    <XCircle className="w-4 h-4 shrink-0" />
                    Faltam cortar R$ {faltam} bilhões
                  </div>
                )}
                <p className="text-[11px] sm:text-xs text-stone-500 mt-1">
                  {percentualMeta}% da meta prometida alcançada
                </p>
              </div>
            </div>

            {/* Barra de Progresso Visual */}
            <div
              className="w-full bg-stone-200 rounded-full h-5 sm:h-6 overflow-hidden p-0.5 relative shadow-inner"
              role="progressbar"
              aria-label="Progresso do corte em relação à meta de 250 bilhões"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percentualMeta}
              aria-valuetext={`${totalCortado} de ${META_CORTE} bilhões cortados`}
            >
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  metaAtingida
                    ? 'bg-emerald-600'
                    : totalCortado > 150
                    ? 'bg-amber-600'
                    : 'bg-red-800'
                }`}
                style={{ width: `${percentualMeta}%` }}
                aria-hidden="true"
              />
            </div>

            {/* Marcadores de Referência */}
            <div className="flex justify-between text-[10px] sm:text-[11px] text-stone-500 mt-2 font-mono">
              <span>R$ 0</span>
              <span className="text-stone-500">R$ 100 bi</span>
              <span className="text-stone-500">R$ 200 bi</span>
              <span className="font-bold text-stone-800">Meta: R$ 250 bi</span>
            </div>
          </div>

          {/* Dica / Botões Rápidos Responsivos */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200 mb-6 sm:mb-8">
            <span className="text-xs text-stone-600 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-stone-400 shrink-0" />
              Arraste os controles ou use os botões +/-:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                onClick={aplicarCenarioApenasMaquina}
                className="flex-1 sm:flex-initial px-3 py-2 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-800 rounded-lg border border-stone-300 font-medium transition cursor-pointer text-center text-xs"
              >
                Apenas Máquina (R$ 40 bilhões)
              </button>
              <button
                onClick={aplicarCenarioFecharConta}
                className="flex-1 sm:flex-initial px-3 py-2 bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-900 rounded-lg border border-red-300 font-medium transition cursor-pointer text-center text-xs"
              >
                Como fechar os R$ 250 bilhões?
              </button>
              <button
                onClick={zerarSimulador}
                className="px-3 py-2 text-stone-500 hover:text-stone-800 underline transition cursor-pointer text-xs"
              >
                Zerar
              </button>
            </div>
          </div>

          {/* Aviso curto: contexto antes da ação, sem virar aula */}
          <div className="mb-6 sm:mb-8 rounded-xl border border-orange-200 bg-orange-50 p-4 sm:p-5">
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 shrink-0" aria-hidden="true">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1">
                  Como o corte funciona na vida real?
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  O governo não pode simplesmente “deixar de pagar” aposentados ou dar calote. Os limites abaixo
                  são o <strong className="text-stone-900">máximo estimado</strong> de economia com mudanças na lei —
                  não o orçamento total de cada área. Agora tente chegar aos{' '}
                  <strong className="text-stone-900">R$ 250 bilhões</strong>.
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  <div className="flex h-2 w-24 overflow-hidden rounded-full bg-stone-200" aria-hidden="true">
                    <span className="h-full bg-red-800" style={{ width: '90%' }} />
                    <span className="h-full bg-emerald-600" style={{ width: '10%' }} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600">
                    90% obrigatório • 10% discricionário
                  </span>
                  <a
                    href="#raio-x"
                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-red-800 hover:text-red-950 underline underline-offset-2 sm:ml-auto"
                  >
                    Ver o raio-X completo
                    <ArrowDownCircle className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Os 4 Sliders Controlados por Estado com botões táteis responsivos */}
          <div className="space-y-6 sm:space-y-8">
            <SliderCard
              id="slider-maquina"
              number={1}
              title="Funcionamento do País (Máquina Pública)"
              subtitle="Dinheiro livre. O limite de 40 bi é o máximo que dá para cortar (secar manutenção de estradas, emissão de passaportes e viaturas da Polícia Federal) antes de causar um apagão total no país."
              value={maquina}
              max={SLIDER_LIMITS.maquina}
              step={5}
              onChange={setMaquina}
              onDecrease={() => alterarValor(setMaquina, maquina, -5, SLIDER_LIMITS.maquina)}
              onIncrease={() => alterarValor(setMaquina, maquina, 5, SLIDER_LIMITS.maquina)}
              icon={Building2}
              iconClass="bg-stone-200 text-stone-700"
              sourceHref="https://www.camara.leg.br/radio/radioagencia/1151197-governo-podera-ter-dificuldade-com-custeio-da-maquina-publica-nos-proximos-anos"
              sourceTitle="Entenda o custeio da máquina pública (Câmara dos Deputados)"
              sourceContent="Custeio administrativo estimado: até R$ 40 bilhões"
              alert={maquinaAlert}
              ariaLabel="Corte no Funcionamento do País (Máquina Pública)"
            />

            <SliderCard
              id="slider-previdencia"
              number={2}
              title="Previdência (INSS)"
              subtitle="Economia gerada ao desvincular a aposentadoria do salário mínimo. O idoso recebe apenas a inflação e perde poder de compra ano após ano para o governo poupar até 100 bi."
              value={previdencia}
              max={SLIDER_LIMITS.previdencia}
              step={10}
              onChange={setPrevidencia}
              onDecrease={() => alterarValor(setPrevidencia, previdencia, -10, SLIDER_LIMITS.previdencia)}
              onIncrease={() => alterarValor(setPrevidencia, previdencia, 10, SLIDER_LIMITS.previdencia)}
              icon={Briefcase}
              iconClass="bg-amber-100 text-amber-800"
              sourceHref="https://istoedinheiro.com.br/equipe-de-flavio-estuda-corte-de-2-do-pib-em-despesas-diz-folha"
              sourceTitle="Ver dados oficiais do BEPS/INSS e proposta de desvinculação relatada pela Folha/IstoÉ"
              sourceContent={
                previdencia > 0
                  ? `Pode atingir ${Math.round((previdencia / SLIDER_LIMITS.previdencia) * 39)} milhões de beneficiários do INSS`
                  : 'Máximo: R$ 100 bilhões (cerca de 39 milhões de benefícios no INSS)'
              }
              alert={
                previdencia > 30
                  ? alertLine('Risco de congelamento das aposentadorias e desvinculação do salário mínimo.')
                  : null
              }
              ariaLabel="Corte na Previdência (INSS)"
            />

            <SliderCard
              id="slider-saude-educacao"
              number={3}
              title="Saúde e Educação (Fim dos Pisos)"
              subtitle="Dinheiro retido ao rasgar a lei que obriga um investimento mínimo nessas áreas. O limite de 80 bi é o que tirariam diretamente de hospitais, vacinas e merenda escolar (Fundeb)."
              value={saudeEducacao}
              max={SLIDER_LIMITS.saudeEducacao}
              step={10}
              onChange={setSaudeEducacao}
              onDecrease={() => alterarValor(setSaudeEducacao, saudeEducacao, -10, SLIDER_LIMITS.saudeEducacao)}
              onIncrease={() => alterarValor(setSaudeEducacao, saudeEducacao, 10, SLIDER_LIMITS.saudeEducacao)}
              icon={HeartPulse}
              iconClass="bg-rose-100 text-rose-800"
              sourceHref="https://www.cnnbrasil.com.br/economia/macroeconomia/despesas-obrigatorias-estao-encurralando-capacidade-de-investimento-diz-diretor-do-ifi-ao-ww/"
              sourceTitle="Ver análise do IFI sobre pisos constitucionais de Saúde e Educação"
              sourceContent={
                saudeEducacao > 0
                  ? 'Corte no repasse a hospitais, vacinas, merenda e Fundeb'
                  : 'Máximo: R$ 80 bilhões (Fim dos Pisos da Saúde e Educação)'
              }
              alert={
                saudeEducacao > 50
                  ? alertLine('Risco de colapso no SUS, com fechamento de leitos e falta de merenda escolar.')
                  : saudeEducacao > 20
                  ? alertLine('Risco de falta de dinheiro para o SAMU e a Farmácia Popular.')
                  : null
              }
              ariaLabel="Corte na Saúde e Educação (Fim dos Pisos)"
            />

            <SliderCard
              id="slider-social"
              number={4}
              title="Programas Sociais (BPC e Bolsa Família)"
              subtitle="Economia gerada ao congelar o BPC (benefício de idosos e PcDs) e fazer um pente-fino agressivo para expulsar famílias da assistência básica."
              value={social}
              max={SLIDER_LIMITS.social}
              step={10}
              onChange={setSocial}
              onDecrease={() => alterarValor(setSocial, social, -10, SLIDER_LIMITS.social)}
              onIncrease={() => alterarValor(setSocial, social, 10, SLIDER_LIMITS.social)}
              icon={Users}
              iconClass="bg-purple-100 text-purple-800"
              sourceHref="https://spbancarios.com.br/10/2026/nao-sou-mae-dinah-diz-daniella-marques-sobre-tesouraco-proposto-por-flavio-bolsonaro"
              sourceTitle="Ver reportagem sobre o plano de corte de despesas sociais e BPC"
              sourceContent={
                social > 0
                  ? 'Perda de renda básica de famílias abaixo da linha de pobreza'
                  : 'Máximo: R$ 50 bilhões (Desvinculação do BPC)'
              }
              alert={
                social > 30
                  ? alertLine('Cerca de 1,5 milhão de idosos e PcDs podem perder sua única renda.')
                  : social > 10
                  ? alertLine('Idosos e PcDs podem ter benefícios reduzidos.')
                  : null
              }
              ariaLabel="Corte em Programas Sociais (BPC e Bolsa Família)"
            />
          </div>


          {/* Conclusão Técnica do Simulador */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-stone-100 rounded-xl border border-stone-300">
            <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-red-800 shrink-0" />
              O que a matemática do orçamento mostra:
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {metaAtingida ? (
                <>
                  Meta atingida — e a conta mostra o preço. O custeio da máquina (R$ 40 bi) cobre 16% da meta;
                  todo o espaço realmente livre do orçamento (cerca de R$ 78 bi) cobre 31%. O restante só sai
                  da Previdência, da Saúde, da Educação e dos benefícios sociais, como os seus controles mostram.
                </>
              ) : (
                <>
                  Mesmo cortando <strong>100% do custeio da máquina</strong> (R$ 40 bi), ainda faltam{' '}
                  <strong>R$ 210 bi</strong>. E todo o espaço realmente livre do orçamento — só{' '}
                  <strong>R$ 3 de cada R$ 100</strong>, cerca de R$ 78 bi — também não basta: faltariam{' '}
                  <strong>R$ 172 bi</strong>. A matemática é implacável: para atingir os R$ 250 bi, é{' '}
                  <strong>obrigatório passar a tesoura</strong> na Previdência, na Saúde, na Educação e nos
                  benefícios sociais dos mais vulneráveis.
                </>
              )}
            </p>
          </div>

          <p className="mt-4 text-[11px] text-stone-500 leading-relaxed">
            Simulação didática: os limites de cada controle não esgotam o orçamento da área; servem para mostrar
            o tamanho do esforço necessário para chegar aos R$ 250 bi.
          </p>

        </div>

        {/* Relatório final: painel de impacto (sem modal) — aparece ao bater a meta */}
        {metaAtingida && (
          <div className="resultado-tesouraco mt-8 sm:mt-10 rounded-2xl border-2 border-red-700 bg-stone-950 text-stone-100 shadow-2xl overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-red-900 via-red-500 to-red-900" />
            <div className="p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">
                    Relatório de impacto • Meta atingida
                  </span>
                  <h3 className="text-xl sm:text-3xl font-serif font-black text-white mt-1 flex items-center gap-2">
                    <Scissors className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" />
                    O Resultado do seu Tesouraço
                  </h3>
                </div>
                <div className="shrink-0 bg-red-950/80 border border-red-700/70 rounded-lg px-3 py-2 sm:text-right">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-red-400">Total cortado</span>
                  <span className="block text-lg sm:text-2xl font-serif font-black text-white">R$ {totalCortado} bi</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-300 mb-5">
                Para fechar a conta de R$ 250 bilhões, este foi o impacto real das suas escolhas:
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-5">
                {saudeEducacao > 0 && (
                  <li className="flex items-start gap-3 bg-stone-900/80 border border-stone-800 rounded-lg p-3 sm:p-3.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      <strong className="text-white">Saúde e Educação:</strong> Corte de R$ {saudeEducacao} bi.{' '}
                      <strong className="text-red-300">Impacto real:</strong>{' '}
                      <span className="text-stone-300">
                        A fila do SUS vai multiplicar. Meses de espera para exames básicos, falta de remédios na
                        Farmácia Popular e menos merenda no prato das crianças nas escolas públicas.
                      </span>
                    </span>
                  </li>
                )}
                {previdencia > 0 && (
                  <li className="flex items-start gap-3 bg-stone-900/80 border border-stone-800 rounded-lg p-3 sm:p-3.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      <strong className="text-white">Previdência:</strong> Corte de R$ {previdencia} bi.{' '}
                      <strong className="text-red-300">Impacto real:</strong>{' '}
                      <span className="text-stone-300">
                        O dinheiro da aposentadoria vai comprar cada vez menos no mercado. A inflação sobe, mas o
                        benefício não acompanha. É o empobrecimento silencioso de milhões de idosos.
                      </span>
                    </span>
                  </li>
                )}
                {social > 0 && (
                  <li className="flex items-start gap-3 bg-stone-900/80 border border-stone-800 rounded-lg p-3 sm:p-3.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      <strong className="text-white">Programas Sociais / BPC:</strong> Corte de R$ {social} bi.{' '}
                      <strong className="text-red-300">Impacto real:</strong>{' '}
                      <span className="text-stone-300">
                        Pessoas com deficiência e idosos miseráveis perdem o poder de comprar o básico. Milhares de
                        famílias vulneráveis são empurradas de volta para a linha da fome.
                      </span>
                    </span>
                  </li>
                )}
                {maquina > 0 && (
                  <li className="flex items-start gap-3 bg-stone-900/80 border border-stone-800 rounded-lg p-3 sm:p-3.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      <strong className="text-white">Máquina Pública:</strong> Corte de R$ {maquina} bi.{' '}
                      <strong className="text-red-300">Impacto real:</strong>{' '}
                      <span className="text-stone-300">
                        O Brasil simplesmente para. A viatura da Polícia Federal fica sem gasolina, a emissão de
                        passaportes trava e as Universidades Federais fecham as portas por falta de dinheiro para a
                        conta de luz.
                      </span>
                    </span>
                  </li>
                )}
              </ul>

              <div className="border-t border-red-900/70 pt-4">
                <p className="text-sm sm:text-base font-semibold text-red-300 leading-relaxed">
                  Não existe mágica matemática. O corte drástico proposto exige retirar direitos básicos da população.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Raio-X completo: aprofundamento depois da ação */}
        <section id="raio-x" className="scroll-mt-24 mt-10 sm:mt-12">
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-red-800 font-bold">
              A matemática do orçamento
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-black text-stone-950 mt-1">
              Por que a conta não fecha?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
              Você viu os limites. Agora veja de onde teriam que sair os R$ 250 bilhões — e por que só uma fatia
              pequena do orçamento é realmente livre.
            </p>
          </div>
          <BudgetChart />
        </section>

        {/* Indicador de rolagem */}
        <div className="text-center pt-2">
          <a
            href="#tesouraco"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition"
          >
            <ArrowDownCircle className="w-4 h-4" />
            Role para ver de onde veio essa proposta
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 2: A Contradição e a Tesoura (O Impacto Visual - Estilo Documento)  */}
      {/* ========================================================================= */}
      <section
        id="tesouraco"
        className="scroll-mt-20 relative w-full bg-stone-950 text-stone-100 overflow-hidden border-y border-stone-900 sm:min-h-screen sm:flex sm:items-center sm:justify-center sm:py-32 sm:px-6"
      >
        {/* Mobile: foto inteira, em fluxo, sem cortar; desktop: fundo full-bleed */}
        <div className="relative w-full sm:absolute sm:inset-0 sm:z-0">
          <img
            src={heroImage}
            alt="Flávio Bolsonaro empunhando a tesoura gigante com Javier Milei"
            className="w-full h-auto object-contain sm:h-full sm:object-cover sm:object-[center_top] filter brightness-[0.94] contrast-105"
          />
          {/* Overlay leve: preserva os rostos e a tesoura; o escurecimento se concentra na base */}
          <div className="absolute inset-0 bg-stone-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        {/* Conteúdo Central no Primeiro Plano com leve proteção de leitura */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-3 sm:px-2 pb-8 sm:pb-0 -mt-4 sm:mt-0">
          {/* Caixa translúcida que garante 100% de contraste no texto sem escurecer a foto inteira */}
          <div className="bg-stone-950/90 sm:bg-stone-950/60 p-5 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm sm:backdrop-blur-none">
            {/* Kicker estilo documento público */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/90 text-red-300 border border-red-800/60 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-6 sm:mb-8">
              <Scissors className="w-3.5 h-3.5 text-red-400" />
              <span>A Retórica vs. A Realidade • Documento Público</span>
            </div>

            {/* Tipografia Gigante e em Destaque */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-white mb-6 sm:mb-8 drop-shadow-lg leading-none">
              O Tesouraço.
            </h2>

            {/* Parágrafo de Impacto com Hiperlink */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
              <p className="text-xl sm:text-3xl md:text-4xl font-serif text-stone-100 leading-snug sm:leading-relaxed">
                Flávio promete{' '}
                <a
                  href="https://istoedinheiro.com.br/equipe-de-flavio-estuda-corte-de-2-do-pib-em-despesas-diz-folha"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Reportagem IstoÉ/Folha sobre estudo de corte de 2% do PIB"
                  className="text-white font-bold underline decoration-red-500 decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8 hover:text-red-300 transition inline-flex items-center gap-1 cursor-pointer"
                >
                  cortes de R$ 250 bilhões
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 inline text-red-400" />
                </a>
                , mas jura em público que não vai cortar das políticas sociais e das aposentadorias.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-800">
                <p className="text-base sm:text-xl text-stone-300 font-sans">
                  O problema? A matemática do orçamento não mente:
                </p>
                <p className="text-red-500 font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase font-serif mt-2 drop-shadow-md">
                  A CONTA NÃO FECHA.
                </p>
              </div>
            </div>

            {/* Infográfico Comparativo da Realidade Orçamentária em Cards Translúcidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 sm:p-5 bg-stone-900/90 rounded-2xl border border-stone-700/80 shadow-xl">
                <span className="text-3xl sm:text-4xl font-serif font-black text-white block mb-1">91%</span>
                <h3 className="font-bold text-stone-200 text-sm sm:text-base mb-1">91% Sustentam Direitos Básicos</h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  Cerca de 91% das despesas primárias (R$ 2,3 trilhões) já estão comprometidas por lei com
                  aposentadorias, BPC, salários de médicos do SUS e professores. É aqui que está o dinheiro grosso.{' '}
                  <strong className="text-stone-200">Não dá para cortar bilhões sem ferir essas áreas.</strong>
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-red-950/80 rounded-2xl border border-red-900/80 shadow-xl">
                <span className="text-3xl sm:text-4xl font-serif font-black text-red-400 block mb-1">9%</span>
                <h3 className="font-bold text-red-200 text-sm sm:text-base mb-1">
                  9% é o Dinheiro “Livre” (mas só R$ 3 de cada R$ 100)
                </h3>
                <p className="text-xs sm:text-sm text-red-300/80 leading-relaxed">
                  O Raio X da LOA 2026 mostra <strong className="text-red-200">9,8% de despesas discricionárias</strong>{' '}
                  (R$ 256,4 bi). Mas boa parte já está presa a pisos, emendas e despesas rígidas: na prática, sobram
                  cerca de <strong className="text-red-200">R$ 3 de cada R$ 100</strong> — algo como R$ 78 bi. A meta
                  de R$ 250 bi é mais de três vezes esse espaço. Ou seja: mesmo paralisando todo o investimento
                  público, o dinheiro realmente livre não cobre a conta.{' '}
                  <strong className="text-red-100">Ele terá que cortar a sua aposentadoria e o seu SUS.</strong>
                </p>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-stone-400 font-mono mt-6 italic">
              Flávio Bolsonaro ao lado de Javier Milei: o símbolo do corte drástico no Estado latino-americano.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 3: O Espelho Argentino (A Consequência)                             */}
      {/* ========================================================================= */}
      <section id="argentina" className="scroll-mt-20 py-14 sm:py-20 px-3 sm:px-6 bg-stone-200 text-stone-900 border-b border-stone-300">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho da Seção: imagem + texto + explicação da motosserra */}
          <div className="mb-10 sm:mb-14">
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-300 text-stone-800 text-[11px] sm:text-xs font-semibold border border-stone-400">
                <TrendingDown className="w-3.5 h-3.5 text-red-800 shrink-0" />
                Estudo de Caso Internacional
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Argentina • 2023–2026
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-stone-950 tracking-tight mb-2">
              O Espelho Argentino
            </h2>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-red-900 mb-5 sm:mb-7">
              A motosserra de Milei e a tesoura de Flávio: o mesmo roteiro
            </p>

            {/* Layout: Imagem Milei + Texto lado a lado */}
            <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-5 sm:gap-7 items-start">
              {/* Imagem de Milei com motosserra — P&B + tint vermelho */}
              <figure className="relative shrink-0 w-full rounded-xl overflow-hidden shadow-lg border border-stone-400 bg-stone-900">
                <img
                  src={mileiImage}
                  alt="Javier Milei segurando uma motosserra no palco — símbolo dos cortes radicais"
                  className="w-full h-60 sm:h-64 md:h-72 object-cover object-[center_35%] grayscale contrast-110"
                />
                {/* Overlay vermelho sutil, mantendo a estética de dossiê */}
                <div className="absolute inset-0 bg-red-800/30 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-red-950/40 pointer-events-none" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-stone-950/85 px-3 py-1.5">
                  <span className="text-[9px] font-mono text-stone-300 uppercase tracking-wider">
                    Milei • A Motosserra • Símbolo de campanha
                  </span>
                </figcaption>
              </figure>

              {/* Texto introdutório + explicação e paralelo */}
              <div className="flex-1">
                <p className="text-base sm:text-lg md:text-xl text-stone-800 font-normal leading-relaxed">
                  A <strong>'Motosserra'</strong> não cortou apenas a burocracia, mas atingiu diretamente o bolso do trabalhador. Na prática, o plano de ajuste incluiu o corte drástico de subsídios de luz e transporte, congelamento de obras públicas e demissões em massa no setor público. <strong>A economista de Flávio,{' '}
                  <a
                    href="https://revistaforum.com.br/economia/flavio-bolsonaro-milei-economia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Reportagem: economista de Flávio diz que ele faria o mesmo que Milei"
                    className="text-red-900 underline decoration-red-400 decoration-2 underline-offset-2 hover:text-red-950"
                  >
                    Daniella Marques
                  </a>
                  , já disse que ele faria o mesmo que Milei na economia — e o próprio Flávio adotou a tesoura como símbolo.</strong> Veja o resultado na economia real da Argentina:
                </p>

                <div className="mt-4 sm:mt-5 space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed">
                  <p>
                    <strong className="text-stone-950">O que foi a motosserra:</strong> Milei levou o objeto ao palco da campanha de 2023 como promessa literal de cortar o Estado. No governo, o símbolo virou método: ministérios foram extintos ou fundidos, o peso foi desvalorizado, os controles de preços caíram, as obras públicas foram paralisadas e os subsídios de energia e transporte foram reduzidos drasticamente. O ajuste não atingiu “a casta”: atingiu quem paga a conta de luz, o gás e o ônibus.
                  </p>
                  <p>
                    <strong className="text-red-900">O paralelo com o Tesouraço:</strong> a tesoura de Flávio é a motosserra com outro nome. O diagnóstico é o mesmo — “o Estado gasta demais”. O instrumento é o mesmo — corte abrupto, rápido e sem plano setorial. O alvo é o mesmo — Previdência, saúde, educação e benefícios sociais. E a promessa também é a mesma: juros menores e “confiança do mercado”. Muda só o palco; a conta que chega depois é idêntica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Paralelo visual: Motosserra x Tesouraço */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-stone-600 mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4 text-red-800 shrink-0" />
              DUAS FERRAMENTAS: O MESMO GOLPE
            </h3>

            <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-stone-400 shadow-lg">
              {/* Coluna Argentina */}
              <div className="bg-stone-950 text-stone-200 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h4 className="font-serif font-black text-xl sm:text-2xl text-white">A Motosserra</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700 shrink-0">
                    ARGENTINA
                  </span>
                </div>
                <dl className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">Diagnóstico</dt>
                    <dd>O Estado gasta demais e “a casta” vive do orçamento.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">Instrumento</dt>
                    <dd>Motosserra: corte abrupto, sem plano setorial.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">Alvo real</dt>
                    <dd>Subsídios de luz e transporte, obras, salários públicos, aposentadorias e programas sociais.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">Promessa</dt>
                    <dd>Inflação controlada, juros baixos e “confiança do mercado”.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">Resultado</dt>
                    <dd className="text-red-300">Custo de vida em alta, pobreza e endividamento das famílias.</dd>
                  </div>
                </dl>
              </div>

              {/* Coluna Brasil */}
              <div className="bg-red-950 text-red-50 p-5 sm:p-7 border-t md:border-t-0 md:border-l border-red-800/70">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h4 className="font-serif font-black text-xl sm:text-2xl text-white">O Tesouraço</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-900/70 text-red-200 border border-red-700 shrink-0">
                    BRASIL
                  </span>
                </div>
                <dl className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-0.5">Diagnóstico</dt>
                    <dd>A máquina pública é desperdício e o déficit precisa ser cortado.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-0.5">Instrumento</dt>
                    <dd>Tesoura: R$ 250 bilhões em corte amplo (cerca de 2% do PIB).</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-0.5">Alvo real</dt>
                    <dd>Previdência, BPC, saúde, educação e servidores.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-0.5">Promessa</dt>
                    <dd>Conta equilibrada, juros baixos e “confiança do mercado”.</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-0.5">Resultado</dt>
                    <dd className="text-red-200">Risco de colapso dos serviços e perda de direitos.</dd>
                  </div>
                </dl>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <strong className="text-red-900">A diferença é o nome do instrumento.</strong> A motosserra corta de um só golpe o que a tesoura corta em série: primeiro os subsídios, depois as obras, em seguida as aposentadorias e, por fim, a saúde e a escola pública. O paralelo é político, mas a matemática é a mesma: cortar R$ 250 bi exige mexer no que é obrigatório.
            </p>
          </div>

          {/* Cards de Dados (Grid de 3 Colunas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Pobreza em Alta */}
            <div className="bg-[#faf8f5] rounded-xl p-5 sm:p-7 border border-stone-300/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-800 font-bold block mb-1">
                  Indicador Social
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 mb-2 sm:mb-3">
                  Pobreza em Alta
                </h3>
                <div className="text-3xl sm:text-4xl font-serif font-black text-red-800 mb-3">
                  32,3%
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  O indicador subiu para <strong>32,3%</strong> da população dos 31 aglomerados urbanos —
                  cerca de <strong>9,7 milhões de pessoas</strong> — no 1º semestre de 2026, alta de 4,1 pontos
                  em relação ao semestre anterior. A extrema pobreza atingiu <strong>7,5%</strong> (2,25 milhões).
                </p>
              </div>
              <a
                href="https://www.gp1.com.br/internacional/noticia/2026/9/25/pobreza-na-argentina-atinge-323-da-populacao-aponta-indec-632353.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-3 border-t border-stone-200 text-[11px] text-red-800 hover:text-red-950 font-mono flex items-center justify-between group"
              >
                <span>Fonte: INDEC / 1º semestre de 2026</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 2: Fome e Consumo */}
            <div className="bg-[#faf8f5] rounded-xl p-5 sm:p-7 border border-stone-300/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block mb-1">
                  Poder de Compra
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 mb-2 sm:mb-3">
                  Fome e Consumo
                </h3>
                <div className="text-2xl sm:text-4xl font-serif font-black text-amber-900 mb-3">
                  Pior em 20 anos
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Em julho de 2026, o consumo caiu para <strong>46,3 kg por pessoa/ano</strong> — quase 5 kg
                  abaixo de 2025. No acumulado de 12 meses até março, os cortes subiram <strong>63,6%</strong>,
                  quase o dobro da inflação.
                </p>
              </div>
              <a
                href="https://www.c5n.com/sociedad/historico-desplome-2026-cuantos-kilos-carne-consumen-los-argentinos-al-ano-n246629"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-3 border-t border-stone-200 text-[11px] text-red-800 hover:text-red-950 font-mono flex items-center justify-between group"
              >
                <span>Fonte: CICCRA / C5N</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 3: Custo de Vida / Choque nos Subsídios */}
            <div className="bg-[#faf8f5] rounded-xl p-5 sm:p-7 border border-stone-300/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-800 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-800" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-800 font-bold block mb-1">
                  Custo de Vida
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 mb-2 sm:mb-3">
                  Choque nos Subsídios
                </h3>
                <div className="text-3xl sm:text-4xl font-serif font-black text-red-800 mb-3">
                  Tarifas até +996%
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Com a redução drástica dos subsídios, o transporte público acumulou alta de <strong>996%</strong> e
                  a energia, <strong>591%</strong>, entre dez/2023 e mar/2026. Gás (+766%) e luz (+370%) também
                  dispararam muito acima da inflação, corroendo a renda e ampliando o endividamento das famílias.
                </p>
              </div>
              <a
                href="https://www.somosjujuy.com.ar/nacionales/los-servicios-aumentaron-996-era-milei-transporte-energia-lideran-subas-n117482/amp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-3 border-t border-stone-200 text-[11px] text-red-800 hover:text-red-950 font-mono flex items-center justify-between group"
              >
                <span>Fonte: IIEP-UBA / INDEC</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 4: Chamada para Ação (Clímax)                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-3 sm:px-6 bg-[#faf8f5] text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-red-100 rounded-full flex items-center justify-center text-red-800">
            <Scissors className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Texto dramático e centralizado */}
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-semibold text-stone-900 leading-snug mb-6 sm:mb-8 px-2">
            Você vai deixar o Flávio fazer o tesouraço aqui no Brasil e prejudicar diretamente a sua vida e da sua família?
          </h2>

          {/* Destaque em Vermelho Gigante Responsivo */}
          <div className="py-3 sm:py-4">
            <p className="text-red-800 font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none uppercase drop-shadow-sm font-serif">
              A CONTA NÃO FECHA.
            </p>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-4 sm:mt-6 px-3">
            Não existe cortar R$ 250 bilhões no Brasil sem mexer na aposentadoria dos idosos, na merenda escolar, no remédio do posto e no atendimento do SUS.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
