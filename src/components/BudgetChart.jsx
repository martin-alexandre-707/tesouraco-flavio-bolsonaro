import React from 'react';
import { ArrowDownCircle, PieChart } from 'lucide-react';

const legend = [
  {
    color: 'bg-red-900',
    label: 'Previdência (INSS)',
    value: '~42%',
    description: 'Aposentadorias e pensões de quem trabalhou a vida toda.',
  },
  {
    color: 'bg-red-700',
    label: 'Pessoal e Encargos',
    value: '~15%',
    description: 'Salários e encargos da ativa: servidores, policiais, médicos, professores e militares.',
  },
  {
    color: 'bg-amber-700',
    label: 'Repasses a estados e municípios',
    value: '~15%',
    description: 'FPM, FPE e transferências que a Constituição obriga a devolver.',
  },
  {
    color: 'bg-amber-500',
    label: 'Assistência Social',
    value: '~10%',
    description: 'BPC (idosos e PcDs) e Bolsa Família.',
  },
  {
    color: 'bg-stone-500',
    label: 'Outros obrigatórios',
    value: '~8%',
    description: 'Seguro-desemprego, abono, precatórios, subsídios e mínimos de saúde/educação.',
  },
  {
    color: 'bg-emerald-600',
    label: 'Discricionário',
    value: '~10%',
    description: 'Máquina pública, obras e investimentos — nem tudo é livre.',
  },
];

export default function BudgetChart() {
  return (
    <div className="mb-6 sm:mb-8 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
      <div className="flex items-start gap-2.5 mb-3">
        <div className="p-2 rounded-lg bg-stone-200 text-stone-700 shrink-0" aria-hidden="true">
          <PieChart className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            Raio-X do Orçamento
          </span>
          <h3 className="text-sm sm:text-base font-bold text-stone-900">
            Onde o dinheiro do Brasil está amarrado?
          </h3>
          <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed mt-1">
            Cerca de 90% das despesas primárias são obrigatórias. O presidente não pode cortá-las por decreto —
            mudanças exigem lei ou PEC. Veja quem consome essa fatia antes de tentar aplicar a tesoura de
            R$ 250 bilhões.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div
          className="flex w-full h-6 sm:h-8 rounded-lg overflow-hidden border border-stone-300 bg-stone-200"
          role="img"
          aria-label="Composição aproximada das despesas primárias de 2026: 42% Previdência, 15% Pessoal, 15% repasses a estados e municípios, 10% Assistência Social, 8% outros obrigatórios e 10% discricionário."
        >
          <div className="bg-red-900 h-full" style={{ width: '42%' }} aria-hidden="true" />
          <div className="bg-red-700 h-full" style={{ width: '15%' }} aria-hidden="true" />
          <div className="bg-amber-700 h-full" style={{ width: '15%' }} aria-hidden="true" />
          <div className="bg-amber-500 h-full" style={{ width: '10%' }} aria-hidden="true" />
          <div className="bg-stone-500 h-full" style={{ width: '8%' }} aria-hidden="true" />
          <div className="bg-emerald-600 h-full" style={{ width: '10%' }} aria-hidden="true" />
        </div>
        <div className="flex justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-500 mt-1.5">
          <span>90% obrigatórios</span>
          <span>10% discricionários</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3">
        {legend.map((item) => (
          <div key={item.label} className="flex items-start gap-2">
            <span className={`mt-1 w-2.5 h-2.5 rounded-sm ${item.color} shrink-0`} aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-stone-800">{item.label}</span>
                <span className="text-[10px] sm:text-[11px] font-mono text-stone-500">{item.value}</span>
              </div>
              <p className="hidden sm:block text-[10px] sm:text-[11px] text-stone-500 leading-tight">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>
            Sobram cerca de 10% de dinheiro discricionário — e só ~3% do total (R$ 78 bi) é realmente livre.
          </strong>{' '}
          É daqui que saem a gasolina da Polícia Federal, os passaportes, as universidades e as obras. Mesmo
          cortando tudo, não chega a R$ 250 bi.
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200">
        <h4 className="text-[11px] sm:text-xs font-bold text-stone-700 mb-1">
          Como o corte funciona na vida real?
        </h4>
        <p className="text-[10px] sm:text-[11px] text-stone-500 leading-relaxed">
          O governo não pode simplesmente “deixar de pagar” aposentados ou dar calote. Para economizar,
          a equipe econômica estudou medidas drásticas de mudança nas leis. Os limites de cada barra abaixo
          representam o <strong className="text-stone-700">MÁXIMO</strong> de bilhões que essas medidas
          conseguiriam arrancar de cada setor ao longo de anos. Tente chegar aos{' '}
          <strong className="text-stone-700">R$ 250 bilhões</strong> propostos.
        </p>
        <a
          href="#metodologia"
          className="mt-2 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-red-800 hover:text-red-950 underline underline-offset-2"
        >
          Ver metodologia e fontes
          <ArrowDownCircle className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
