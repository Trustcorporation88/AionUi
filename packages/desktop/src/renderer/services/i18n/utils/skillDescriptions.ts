/**
 * Skill Description Localizations
 *
 * Maps skill names to localized descriptions across supported locales.
 * Primary target: Portuguese (pt-BR)
 *
 * Supported locales: pt-BR, en-US, zh-CN, zh-TW, ja-JP, ko-KR, ru-RU, tr-TR, uk-UA
 */

type SkillDescriptionLocale = 'pt-BR' | 'en-US' | 'zh-CN' | 'zh-TW' | 'ja-JP' | 'ko-KR' | 'ru-RU' | 'tr-TR' | 'uk-UA';

interface SkillDescriptionMap {
  [skillName: string]: {
    [locale in SkillDescriptionLocale]?: string;
  };
}

/**
 * Central mapping of skill names to localized descriptions
 * Expandable for additional skills and locales
 */
export const SKILL_DESCRIPTIONS: SkillDescriptionMap = {
  'Codebase Onboarding Engineer': {
    'pt-BR':
      'Especialista em onboarding de engenheiros em codebases desconhecidas — lê código-fonte e traça caminhos baseados em fatos',
    'en-US':
      'Expert developer onboarding specialist who helps new engineers understand unfamiliar codebases fast by reading source code, tracing code paths, and stating only facts grounded in the code.',
  },
  'Code Reviewer': {
    'pt-BR':
      'Experto em revisão de código com feedback construtivo focado em correção, manutenibilidade, segurança e performance',
    'en-US':
      'Expert code reviewer who provides constructive, actionable feedback focused on correctness, maintainability, security, and performance — not style preferences.',
  },
  'Frontend Developer': {
    'pt-BR':
      'Experto em tecnologias web modernas, frameworks React/Vue/Angular, implementação de UI e otimização de performance',
    'en-US':
      'Expert frontend developer specializing in modern web technologies, React/Vue/Angular frameworks, UI implementation, and performance optimization',
  },
  'Backend Architect': {
    'pt-BR':
      'Especialista sênior em design de sistemas escaláveis, arquitetura de banco de dados, desenvolvimento de API e infraestrutura cloud',
    'en-US':
      'Senior backend architect specializing in scalable system design, database architecture, API development, and cloud infrastructure. Builds robust, secure, performant server-side applications and microservices',
  },
  'Security Engineer': {
    'pt-BR':
      'Experto em segurança de aplicações, modelagem de ameaças, revisão de código seguro e resposta a incidentes',
    'en-US':
      'Expert application security engineer specializing in threat modeling, vulnerability assessment, secure code review, security architecture design, and incident response for modern web, API, and cloud-native applications.',
  },
  'Product Manager': {
    'pt-BR':
      'Líder holístico do ciclo completo do produto — discovery, estratégia, roadmap, alinhamento de stakeholders e medição de resultados',
    'en-US':
      'Holistic product leader who owns the full product lifecycle — from discovery and strategy through roadmap, stakeholder alignment, go-to-market, and outcome measurement. Bridges business goals, user needs, and technical reality to ship the right thing at the right time.',
  },
  'Growth Hacker': {
    'pt-BR':
      'Experto em crescimento acelerado orientado a dados — loops virais, otimização de funis e canais escaláveis de aquisição de usuários',
    'en-US':
      'Expert growth strategist specializing in rapid user acquisition through data-driven experimentation. Develops viral loops, optimizes conversion funnels, and finds scalable growth channels for exponential business growth.',
  },
  'SEO Specialist': {
    'pt-BR':
      'Experto em SEO técnico, otimização de conteúdo, construção de autoridade de links e crescimento orgânico orientado a dados',
    'en-US':
      'Expert search engine optimization strategist specializing in technical SEO, content optimization, link authority building, and organic search growth. Drives sustainable traffic through data-driven search strategies.',
  },
};

/**
 * Get localized description for a skill
 * Falls back to original English description if localization not found
 */
export function getLocalizedSkillDescription(
  skillName: string,
  locale: SkillDescriptionLocale | string = 'en-US',
  originalDescription?: string
): string {
  const normalizedLocale = locale as SkillDescriptionLocale;
  const skillMap = SKILL_DESCRIPTIONS[skillName];

  if (skillMap && skillMap[normalizedLocale]) {
    return skillMap[normalizedLocale];
  }

  return originalDescription || '';
}

/**
 * Check if a skill has a localization for a given locale
 */
export function hasSkillLocalization(skillName: string, locale: SkillDescriptionLocale | string): boolean {
  const normalizedLocale = locale as SkillDescriptionLocale;
  const skillMap = SKILL_DESCRIPTIONS[skillName];

  return !!(skillMap && skillMap[normalizedLocale]);
}

export type { SkillDescriptionLocale };
