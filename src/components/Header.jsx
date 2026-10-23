import React from 'react';
import { ArrowUp, CheckCircle2, Scissors, XCircle } from 'lucide-react';
import { META_CORTE } from '../lib/budget';

export default function Header({
  totalCortado,
  metaAtingida,
  faltam,
  percentualMeta,
  isScrolled,
  onScrollToSimulator,
}) {
  return (
    <>
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#simulador" className="flex items-center gap-2" aria-label="Ir para o simulador">
            <span className="p-1.5 bg-red-800 text-white rounded" aria-hidden="true">
              <Scissors className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-stone-700">
              Dossiê Especial • Orçamento &amp; Eleições
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-xs text-stone-600 font-medium" aria-label="Navegação principal">
            <a href="#simulador" className="hover:text-red-800 transition">O Simulador</a>
            <a href="#tesouraco" className="hover:text-red-800 transition">O Tesouraço</a>
            <a href="#argentina" className="hover:text-red-800 transition">O Espelho Argentino</a>
            <a href="#fontes" className="hover:text-red-800 transition">Fontes Oficiais</a>
          </nav>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out transform ${
          isScrolled
            ? 'translate-y-0 opacity-100 shadow-2xl pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        } bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-stone-800`}
        aria-hidden={!isScrolled}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="p-1.5 bg-red-700 text-white rounded" aria-hidden="true">
              <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold">
                Meta do Tesouraço
              </span>
              <span className="text-xs sm:text-sm font-bold font-serif leading-none text-white">
                R$ 250 bilhões
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xs sm:max-w-md justify-center">
            <div className="w-full">
              <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1 font-mono">
                <span className="text-stone-300 truncate">
                  Cortado: <strong className="text-white font-bold">R$ {totalCortado} bi</strong>
                </span>
                <span className="text-stone-400 ml-1">{percentualMeta}%</span>
              </div>
              <div
                className="w-full bg-stone-800 rounded-full h-2 sm:h-2.5 overflow-hidden border border-stone-700"
                role="progressbar"
                aria-label="Progresso do corte em relação à meta"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percentualMeta}
                aria-valuetext={`${totalCortado} de ${META_CORTE} bilhões cortados`}
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    metaAtingida
                      ? 'bg-emerald-500'
                      : totalCortado > 150
                      ? 'bg-amber-500'
                      : 'bg-red-700'
                  }`}
                  style={{ width: `${percentualMeta}%` }}
                />
              </div>
            </div>

            <div className="hidden md:block shrink-0">
              {metaAtingida ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600/60 font-bold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> Meta batida!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-700/60 font-bold text-[11px] font-mono">
                  Faltam R$ {faltam} bi
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onScrollToSimulator}
              tabIndex={isScrolled ? 0 : -1}
              className="px-2 sm:px-3 py-1.5 bg-red-800 hover:bg-red-700 active:bg-red-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Voltar ao simulador para ajustar os cortes"
            >
              <span className="hidden sm:inline">Ajustar cortes</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="w-full bg-stone-800 h-[3px] overflow-hidden" aria-hidden="true">
          <div
            className={`h-full transition-all duration-300 ${
              metaAtingida
                ? 'bg-emerald-500'
                : totalCortado > 150
                ? 'bg-amber-500'
                : 'bg-red-700'
            }`}
            style={{ width: `${percentualMeta}%` }}
          />
        </div>
      </div>
    </>
  );
}
