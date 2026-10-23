import React from 'react';
import { ExternalLink, Minus, Plus } from 'lucide-react';
import { formatBillion } from '../lib/budget';

export default function SliderCard({
  id,
  number,
  title,
  subtitle,
  value,
  max,
  step,
  onChange,
  onDecrease,
  onIncrease,
  icon: Icon,
  iconClass,
  sourceHref,
  sourceTitle,
  sourceContent,
  alert,
  ariaLabel,
}) {
  const valueText = formatBillion(value);
  const maxText = formatBillion(max);

  return (
    <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg shrink-0 ${iconClass}`} aria-hidden="true">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h2 className="font-bold text-stone-900 text-sm sm:text-base">
              {number}. {title}
            </h2>
            <p id={`${id}-hint`} className="text-[11px] sm:text-xs text-stone-500 leading-tight">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 font-mono">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onDecrease}
              className="w-7 h-7 rounded bg-white border border-stone-300 hover:bg-stone-100 active:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-xs cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              aria-label={`Diminuir ${step} bilhões em ${title}`}
            >
              <Minus className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onIncrease}
              className="w-7 h-7 rounded bg-white border border-stone-300 hover:bg-stone-100 active:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-xs cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              aria-label={`Aumentar ${step} bilhões em ${title}`}
            >
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-xl sm:text-2xl font-bold text-stone-900 whitespace-nowrap">
              {valueText}
            </span>
            <span className="block text-[11px] text-stone-500 whitespace-nowrap">
              máx. {maxText}
            </span>
          </div>
        </div>
      </div>

      <input
        id={id}
        type="range"
        min="0"
        max={max}
        step="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={`${valueText} de um máximo de ${maxText}`}
        aria-describedby={`${id}-hint`}
        className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-800 touch-none"
      />

      <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-center text-[10px] sm:text-[11px] text-stone-500 mt-1 font-mono">
        <span>R$ 0</span>
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 hover:text-red-800 underline inline-flex items-start gap-0.5 text-left sm:text-right sm:max-w-none"
          title={sourceTitle}
        >
          <span className="leading-tight">{sourceContent}</span>
          <ExternalLink className="w-2.5 h-2.5 shrink-0 mt-0.5" aria-hidden="true" />
        </a>
      </div>

      {alert && (
        <div className="mt-2" aria-live="polite">
          {alert}
        </div>
      )}
    </div>
  );
}
