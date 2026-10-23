import React from 'react';
import { ExternalLink, FileSpreadsheet, Info } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section
        id="metodologia"
        className="scroll-mt-20 bg-stone-100 border-t border-stone-300 py-10 sm:py-14 px-4 sm:px-6"
        aria-labelledby="metodologia-title"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-stone-500 shrink-0" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Metodologia e Fontes
            </span>
          </div>

          <h2 id="metodologia-title" className="text-base sm:text-lg font-serif font-bold text-stone-800 mb-3">
            A Matemática do Corte: De onde vêm esses números?
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed border-l-2 border-stone-400 pl-3 mb-6">
            * Os limites do simulador são <strong className="text-stone-700">premissas editoriais</strong> —
            estimativas nossas, não projeções oficiais. Foram calibrados a partir da distribuição do DIEESE para
            um ajuste de R$ 194 bi (51% transferências, 17% pessoal, 32% outras despesas), das projeções
            Folha/InfoMoney para os pisos e do espaço realmente livre apontado pela IFI. São médias anuais; em
            4 anos, o acumulado é cerca de 4x. As reportagens falam em R$ 200–250 bi; usamos R$ 250 bi como teto.
          </p>

          <div className="mb-6 rounded-xl border border-stone-300 overflow-hidden bg-stone-50">
            <div className="bg-stone-200 px-3.5 py-2.5">
              <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-stone-700 font-bold">
                De onde vêm os limites do simulador
              </h3>
            </div>
            <div className="divide-y divide-stone-300">
              <div className="p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800">Máquina / Pessoal</h4>
                  <span className="text-xs font-mono font-bold text-red-800">R$ 40 bi</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  DIEESE: 17% do corte (~R$ 42 bi). Câmara: cerca de R$ 70 bi de custeio e bloqueio de R$ 41 bi
                  em 2025. Arredondado para R$ 40 bi.
                </p>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800">Previdência</h4>
                  <span className="text-xs font-mono font-bold text-red-800">R$ 100 bi</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  Parte das transferências: DIEESE 51% (~R$ 128 bi com BPC). CDPP: R$ 1,1 trilhão em 10 anos
                  (~R$ 110 bi/ano). A divisão 100/30 é arredondamento.
                </p>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800">BPC</h4>
                  <span className="text-xs font-mono font-bold text-red-800">R$ 30 bi</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  O DIEESE informa apenas o bloco de 51% em transferências; a divisão 100/30 é premissa do
                  simulador. O BPC real custa cerca de R$ 130 bi/ano (1% do PIB) e atende 6,4 milhões de pessoas —
                  o corte de R$ 30 bi equivale a ~23% do benefício. Fonte:{' '}
                  <a
                    href="https://jc.uol.com.br/colunas/jc-negocios/2026/06/02/bpc-ja-custa-1-do-pib-e-ja-obriga-governo-a-contingenciar-despesas-de-varios-ministerios-depois-de-pacote-de-bondades-sem-caixa-disponivel.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-stone-800"
                  >
                    JC, 2026
                  </a>
                  .
                </p>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800">Saúde, Educação e outras</h4>
                  <span className="text-xs font-mono font-bold text-red-800">R$ 80 bi</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  DIEESE: 32% = R$ 80 bi. Folha/InfoMoney: R$ 800 bi em 10 anos, média de ~R$ 80 bi/ano.
                </p>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800">Teto do BPC</h4>
                  <span className="text-xs font-mono font-bold text-red-800">R$ 50 bi</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  Folga do simulador para testar cenários. O cenário que fecha R$ 250 bi usa R$ 30 bi. Não é
                  projeção nem número oficial.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 border-l-4 border-red-800 bg-stone-200/70 px-3.5 py-3">
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-800">O argumento:</strong> com cerca de R$ 78 bi realmente livres,
              um corte de R$ 250 bi exige aproximadamente R$ 172 bi de despesas obrigatórias. O DIEESE mostra que
              51% de um ajuste recai sobre transferências de renda. Não há como fechar a conta sem Previdência,
              BPC ou benefícios. Isso é uma inferência a partir das fontes — não uma invenção.
            </p>
          </div>

          <ul className="space-y-5">
            <li className="relative pl-4">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red-800" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800">
                A Meta de R$ 250 Bilhões (2% do PIB)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-700">Fato:</strong> a proposta central atribuída ao plano de Flávio
                Bolsonaro é um ajuste de 2% do PIB — cerca de R$ 250 bilhões — concentrado em despesas obrigatórias,
                segundo reportagens de Folha e InfoMoney. Outras reportagens falam em R$ 200 bilhões.
              </p>
              <a
                href="https://www.infomoney.com.br/politica/plano-de-ajuste-fiscal-de-flavio-bolsonaro-preve-corte-de-2-do-pib-diz-jornal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-red-800 hover:text-red-950 underline underline-offset-2"
              >
                Fonte: InfoMoney / Folha
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </li>

            <li className="relative pl-4">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red-800" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800">
                Distribuição do corte (DIEESE)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-700">Premissa:</strong> estudo do DIEESE encomendado pelas centrais
                sindicais simulou um ajuste de <strong className="text-stone-700">R$ 194 bi</strong>: 51% em
                transferências de renda, 17% em pessoal e 32% em outras despesas. Usamos essa distribuição — e a
                escalamos para o teto de R$ 250 bi — para calibrar os limites do simulador.
              </p>
              <a
                href="https://diap.org.br/index.php/noticias/noticias/93239-tesouraco-de-flavio-bolsonaro-pode-eliminar-2-2-milhoes-de-empregos-e-retirar-r-68-7-bi-da-renda-dos-trabalhadores-revela-estudo-inedito-do-dieese"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-red-800 hover:text-red-950 underline underline-offset-2"
              >
                Fonte: DIEESE / DIAP
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </li>

            <li className="relative pl-4">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red-800" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800">
                Previdência e BPC (Premissas de R$ 100 bi e R$ 30 bi)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-700">Fato:</strong> a principal medida estudada é desvincular
                aposentadorias, pensões e BPC do salário mínimo. Cerca de <strong className="text-stone-700">dois
                terços</strong> dos benefícios do INSS correspondem a um salário mínimo. Corrigir só pela inflação,
                enquanto o mínimo tem ganho real, reduz o poder de compra com o tempo. O CDPP estima economia de{' '}
                <strong className="text-stone-700">R$ 1,1 trilhão em dez anos</strong>.
              </p>
              <a
                href="https://www.ieprev.com.br/blog/desvincular-os-beneficios-do-salario-minimo-a-ideia-que-sempre-volta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-red-800 hover:text-red-950 underline underline-offset-2"
              >
                Fonte: IEPREV — “Desvincular os benefícios do salário mínimo”
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </li>

            <li className="relative pl-4">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red-800" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800">
                Saúde e Educação (Premissa de R$ 80 bi)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-700">Fato:</strong> o fim dos pisos constitucionais desobriga a União
                do investimento mínimo em saúde e educação. Projeção publicada pela Folha e reproduzida pelo
                InfoMoney estima retirada de <strong className="text-stone-700">R$ 23 bi no 1º ano</strong> e{' '}
                <strong className="text-stone-700">R$ 145 bi no 10º ano</strong>, com R$ 800 bi acumulados. O limite
                de R$ 80 bi simula um impacto anual severo próximo do meio dessa trajetória.
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold">
                <a
                  href="https://www.infomoney.com.br/politica/plano-de-ajuste-fiscal-de-flavio-bolsonaro-preve-corte-de-2-do-pib-diz-jornal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  Folha / InfoMoney
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
                <span className="text-stone-400">•</span>
                <a
                  href="https://www.deverdeclasse.org/l/corte-de-r-250-bi-pib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  reprodução da projeção
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </li>

            <li className="relative pl-4">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red-800" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800">
                Máquina Pública / Despesas Discricionárias (Premissa de R$ 40 bi)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-700">Fato:</strong> o orçamento discricionário total de 2026 é{' '}
                <strong className="text-stone-700">R$ 256,4 bi</strong>; o espaço realmente livre, após pisos e
                despesas rígidas, é de cerca de <strong className="text-stone-700">R$ 78 bi</strong> (R$ 3 de cada
                R$ 100). O limite de R$ 40 bi é uma premissa conservadora: a Câmara estima cerca de R$ 70 bi de
                custeio administrativo (viagens, diárias, material e serviços) e aponta risco de paralisia em
                bloqueios maiores. Em 2025, um bloqueio de <strong className="text-stone-700">R$ 41 bi</strong> já
                foi descrito como risco de “shutdown da máquina”; o Tesouro alertou que aprofundar o
                contingenciamento causaria “colapso”.
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold">
                <a
                  href="https://www.camara.leg.br/noticias/1246912-consultoria-de-orcamento-publica-raio-x-da-lei-orcamentaria-2026-apos-vetos-presidenciais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  Câmara (LOA 2026)
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
                <span className="text-stone-400">•</span>
                <a
                  href="https://www.camara.leg.br/noticias/1151191-governo-podera-ter-dificuldade-com-custeio-da-maquina-publica-nos-proximos-anos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  Câmara (custeio ~R$ 70 bi)
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
                <span className="text-stone-400">•</span>
                <a
                  href="https://miltonjung.com.br/2026/09/01/50-debates-para-o-brasil-gastos-obrigatorios-protegem-direitos-ou-engessam-o-orcamento-publico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  CBN / IFI (R$ 3 de cada R$ 100)
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
                <span className="text-stone-400">•</span>
                <a
                  href="https://www.redegn.com.br/index.php?cod_noticia=206548&sessao=noticia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  bloqueio de R$ 41 bi
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
                <span className="text-stone-400">•</span>
                <a
                  href="https://www.poder360.com.br/poder-economia/mirar-centro-da-meta-causaria-colapso-diz-secretario-do-tesouro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 underline underline-offset-2"
                >
                  alerta do Tesouro
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </li>
          </ul>

          <p className="mt-6 pt-4 border-t border-stone-300 text-[10px] sm:text-[11px] text-stone-500 leading-relaxed">
            Atualizado em outubro de 2026. Os valores são arredondados e servem para dimensionar o esforço fiscal;
            não substituem estudos técnicos caso a caso.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 6: Rodapé / Provas e Fontes Oficiais (Transparência)                */}
      {/* ========================================================================= */}
      <footer
        id="fontes"
        className="scroll-mt-20 bg-stone-900 text-stone-300 py-12 sm:py-16 px-3 sm:px-6 border-t border-stone-800"
        aria-label="Fontes oficiais e metodologia"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-white font-serif font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                <FileSpreadsheet className="w-5 h-5 text-red-500 shrink-0" />
                Auditoria Cidadã do Orçamento
              </div>
              {/* Texto Técnico Obrigatório */}
              <p className="text-stone-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Baseado na LOA 2026 e no Raio X do Orçamento da Câmara. Cerca de 90% das despesas primárias
                são obrigatórias (90,2% no Raio X) — e só R$ 3 de cada R$ 100 são realmente livres.
              </p>
            </div>

            <div className="text-[11px] sm:text-xs text-stone-400 font-mono">
              Atualização com dados oficiais de finanças públicas federais
            </div>
          </div>

          {/* Lista de Fontes com Links Reais e Clicáveis */}
          <div className="pt-6 sm:pt-8">
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-mono mb-4 sm:mb-6">
              Reportagens e investigação:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Fonte 1: CNN / IFI */}
              <a
                href="https://www.cnnbrasil.com.br/economia/macroeconomia/despesas-obrigatorias-estao-encurralando-capacidade-de-investimento-diz-diretor-do-ifi-ao-ww/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">CNN Brasil / IFI</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "91% dos gastos são obrigatórios e encurralam investimentos"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Fonte 2: IstoÉ Dinheiro / Folha */}
              <a
                href="https://istoedinheiro.com.br/equipe-de-flavio-estuda-corte-de-2-do-pib-em-despesas-diz-folha"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">IstoÉ Dinheiro / Folha</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "Equipe estuda cortes na Previdência, BPC e Saúde (corte de R$ 250 bi / 2% do PIB)"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Fonte 3: Sindicato dos Bancários */}
              <a
                href="https://spbancarios.com.br/10/2026/nao-sou-mae-dinah-diz-daniella-marques-sobre-tesouraco-proposto-por-flavio-bolsonaro"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">Sindicato dos Bancários</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "A proposta da coordenadora Daniella Marques e o plano do Tesouraço"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Fonte 4: CBN / IFI */}
              <a
                href="https://miltonjung.com.br/2026/09/01/50-debates-para-o-brasil-gastos-obrigatorios-protegem-direitos-ou-engessam-o-orcamento-publico/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">CBN / IFI</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "De cada R$ 100, 97 vão para despesas obrigatórias ou rígidas"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Fonte 5: C5N / CICCRA */}
              <a
                href="https://www.c5n.com/sociedad/historico-desplome-2026-cuantos-kilos-carne-consumen-los-argentinos-al-ano-n246629"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">C5N / CICCRA</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "Consumo de carne cai a 46,3 kg por pessoa/ano, o menor em 20 anos"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Fonte 6: Somos Jujuy / IIEP-UBA */}
              <a
                href="https://www.somosjujuy.com.ar/nacionales/los-servicios-aumentaron-996-era-milei-transporte-energia-lideran-subas-n117482/amp"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">Somos Jujuy / IIEP-UBA</span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    "Transporte +996% e energia +591% na era Milei"
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

            </div>
          </div>

          {/* Dados oficiais — bloco final do rodapé */}
          <div className="pt-8 mt-8 border-t border-stone-800">
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
              Dados oficiais
            </h3>
            <p className="text-xs text-stone-400 mb-4 max-w-2xl leading-relaxed">
              Consulte os números citados diretamente nas bases públicas e nos relatórios dos organismos oficiais:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* IFI */}
              <a
                href="https://www12.senado.leg.br/ifi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    Instituição Fiscal Independente (IFI) • Senado Federal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Gastos obrigatórios, Previdência e Relatórios de Acompanhamento Fiscal.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Câmara dos Deputados */}
              <a
                href="https://www.camara.leg.br/noticias/1246912-consultoria-de-orcamento-publica-raio-x-da-lei-orcamentaria-2026-apos-vetos-presidenciais/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    Câmara dos Deputados • Raio X da LOA 2026
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    90,2% de despesas obrigatórias e 9,8% discricionárias (R$ 256,4 bi).
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* SIOP */}
              <a
                href="https://www.siop.planejamento.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    SIOP • Painel do Orçamento Federal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Composição da LOA, dotações e execução por órgão e ação.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Tesouro Transparente */}
              <a
                href="https://www.tesourotransparente.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    Tesouro Nacional Transparente
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Relatórios fiscais e base de dados das despesas primárias e obrigatórias.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* SIGA Brasil */}
              <a
                href="https://www12.senado.leg.br/orcamento/sigabrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    SIGA Brasil • Senado Federal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Orçamento de Saúde, Educação e Máquina Pública: execução e dotação por órgão.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Portal da Transparência */}
              <a
                href="https://portaldatransparencia.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    Portal da Transparência • Governo Federal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Execução orçamentária, gastos públicos, transferências e benefícios sociais.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* INDEC */}
              <a
                href="https://www.indec.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    INDEC • República Argentina
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Pobreza, inflação e custo de vida na Argentina.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* CICCRA */}
              <a
                href="http://www.ciccra.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    CICCRA • Câmara da Indústria e Comércio de Carnes
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Consumo de carne e poder de compra na Argentina.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>

              {/* Banco Mundial */}
              <a
                href="https://www.worldbank.org/pt/country/argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 bg-stone-800/40 hover:bg-stone-800 rounded-lg border border-stone-700/60 transition flex items-start justify-between gap-3 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] sm:text-xs text-red-400 font-mono block mb-1">
                    Banco Mundial • Argentina
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200 group-hover:text-white transition">
                    Relatórios econômicos, consumo e custo de vida.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white shrink-0 mt-1 transition" />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
            <p className="font-mono uppercase tracking-wider">Dossiê Especial • O Tesouraço</p>
            <p>Dados públicos • Atualizado em outubro de 2026</p>
          </div>
        </div>
      </footer>
    </>
  );
}
