export const META_CORTE = 250;

export const SLIDER_LIMITS = Object.freeze({
  maquina: 40,
  previdencia: 100,
  saudeEducacao: 80,
  social: 50,
});

export const SCENARIOS = Object.freeze({
  apenasMaquina: {
    maquina: 40,
    previdencia: 0,
    saudeEducacao: 0,
    social: 0,
  },
  fecharConta: {
    maquina: 40,
    previdencia: 100,
    saudeEducacao: 80,
    social: 30,
  },
});

export const clampCut = (value, max) => Math.min(max, Math.max(0, value));

export const sumCuts = ({ maquina, previdencia, saudeEducacao, social }) =>
  maquina + previdencia + saudeEducacao + social;

export const calculateMetaPercent = (total) =>
  Math.min(100, Math.round((total / META_CORTE) * 100));

export const formatBillion = (value) => `R$ ${value} bilhões`;
