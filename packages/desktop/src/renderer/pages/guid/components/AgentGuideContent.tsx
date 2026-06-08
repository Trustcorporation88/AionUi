/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { Popover } from '@arco-design/web-react';
import {
  AlarmClock,
  Brain,
  Earth,
  FileText,
  Lightning,
  MagicHat,
  Picture,
  Robot,
  Shield,
  Search,
} from '@icon-park/react';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

type CardInfo = {
  key: string;
  icon: React.ReactNode;
  label: string;
  what: string;
  how: string;
};

type SectionProps = {
  title: string;
  cards: CardInfo[];
  accent: string;
};

const CardPopoverContent: React.FC<{ card: CardInfo; whatLabel: string; howLabel: string }> = ({
  card,
  whatLabel,
  howLabel,
}) => (
  <div className='max-w-260px flex flex-col gap-8px'>
    <div className='flex items-center gap-8px'>
      <span className='text-brand text-16px'>{card.icon}</span>
      <span className='font-semibold text-13px text-[var(--color-text-1)]'>{card.label}</span>
    </div>
    <div>
      <div className='text-11px font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-2px'>
        {whatLabel}
      </div>
      <div className='text-12px text-[var(--color-text-2)] leading-snug'>{card.what}</div>
    </div>
    <div>
      <div className='text-11px font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-2px'>
        {howLabel}
      </div>
      <div className='text-12px text-[var(--color-text-2)] leading-snug'>{card.how}</div>
    </div>
  </div>
);

const GuideCard: React.FC<{ card: CardInfo; whatLabel: string; howLabel: string }> = ({
  card,
  whatLabel,
  howLabel,
}) => {
  const [visible, setVisible] = useState(false);
  const toggle = useCallback(() => setVisible((v) => !v), []);

  return (
    <Popover
      trigger='click'
      popupVisible={visible}
      onVisibleChange={setVisible}
      content={<CardPopoverContent card={card} whatLabel={whatLabel} howLabel={howLabel} />}
      position='top'
    >
      <div
        className='flex flex-col items-center justify-center gap-6px p-10px rd-10px border border-solid cursor-pointer select-none transition-all duration-200 hover:border-brand hover:bg-[rgba(var(--primary-6),0.06)] active:scale-95'
        style={{
          borderColor: visible ? 'rgb(var(--primary-6))' : 'var(--color-border-2)',
          background: visible ? 'rgba(var(--primary-6),0.08)' : 'var(--color-fill-1)',
          minHeight: 72,
        }}
        onClick={toggle}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggle();
        }}
      >
        <span
          className='text-20px transition-colors duration-200'
          style={{ color: visible ? 'rgb(var(--primary-6))' : 'var(--color-text-3)' }}
        >
          {card.icon}
        </span>
        <span className='text-11px font-medium text-[var(--color-text-2)] text-center leading-tight max-w-80px'>
          {card.label}
        </span>
      </div>
    </Popover>
  );
};

const GuideSection: React.FC<SectionProps & { whatLabel: string; howLabel: string }> = ({
  title,
  cards,
  accent,
  whatLabel,
  howLabel,
}) => (
  <div className='flex flex-col gap-8px'>
    <div className='text-11px font-semibold uppercase tracking-wider px-2px' style={{ color: accent }}>
      {title}
    </div>
    <div className='grid gap-8px' style={{ gridTemplateColumns: `repeat(auto-fill, minmax(88px, 1fr))` }}>
      {cards.map((card) => (
        <GuideCard key={card.key} card={card} whatLabel={whatLabel} howLabel={howLabel} />
      ))}
    </div>
  </div>
);

const AgentGuideContent: React.FC = () => {
  const { t } = useTranslation();
  const inf = 'guid.agentGuide.infographic';

  const whatLabel = t(`${inf}.what`);
  const howLabel = t(`${inf}.how`);

  const engineCards: CardInfo[] = [
    {
      key: 'builtin',
      icon: <Lightning theme='outline' />,
      label: t(`${inf}.engines.builtin.label`),
      what: t(`${inf}.engines.builtin.what`),
      how: t(`${inf}.engines.builtin.how`),
    },
    {
      key: 'multi',
      icon: <Robot theme='outline' />,
      label: t(`${inf}.engines.multi.label`),
      what: t(`${inf}.engines.multi.what`),
      how: t(`${inf}.engines.multi.how`),
    },
    {
      key: 'remote',
      icon: <Earth theme='outline' />,
      label: t(`${inf}.engines.remote.label`),
      what: t(`${inf}.engines.remote.what`),
      how: t(`${inf}.engines.remote.how`),
    },
  ];

  const assistantCards: CardInfo[] = [
    {
      key: 'cowork',
      icon: <Brain theme='outline' />,
      label: t(`${inf}.assistants.cowork.label`),
      what: t(`${inf}.assistants.cowork.what`),
      how: t(`${inf}.assistants.cowork.how`),
    },
    {
      key: 'docs',
      icon: <FileText theme='outline' />,
      label: t(`${inf}.assistants.docs.label`),
      what: t(`${inf}.assistants.docs.what`),
      how: t(`${inf}.assistants.docs.how`),
    },
    {
      key: 'finance',
      icon: <span className='text-[20px] leading-none'>📊</span>,
      label: t(`${inf}.assistants.finance.label`),
      what: t(`${inf}.assistants.finance.what`),
      how: t(`${inf}.assistants.finance.how`),
    },
    {
      key: 'dashboard',
      icon: <span className='text-[20px] leading-none'>📈</span>,
      label: t(`${inf}.assistants.dashboard.label`),
      what: t(`${inf}.assistants.dashboard.what`),
      how: t(`${inf}.assistants.dashboard.how`),
    },
    {
      key: 'academic',
      icon: <span className='text-[20px] leading-none'>🎓</span>,
      label: t(`${inf}.assistants.academic.label`),
      what: t(`${inf}.assistants.academic.what`),
      how: t(`${inf}.assistants.academic.how`),
    },
    {
      key: 'uiux',
      icon: <span className='text-[20px] leading-none'>🎨</span>,
      label: t(`${inf}.assistants.uiux.label`),
      what: t(`${inf}.assistants.uiux.what`),
      how: t(`${inf}.assistants.uiux.how`),
    },
    {
      key: 'social',
      icon: <span className='text-[20px] leading-none'>📣</span>,
      label: t(`${inf}.assistants.social.label`),
      what: t(`${inf}.assistants.social.what`),
      how: t(`${inf}.assistants.social.how`),
    },
    {
      key: 'coach',
      icon: <span className='text-[20px] leading-none'>🧠</span>,
      label: t(`${inf}.assistants.coach.label`),
      what: t(`${inf}.assistants.coach.what`),
      how: t(`${inf}.assistants.coach.how`),
    },
    {
      key: 'roleplay',
      icon: <span className='text-[20px] leading-none'>🎭</span>,
      label: t(`${inf}.assistants.roleplay.label`),
      what: t(`${inf}.assistants.roleplay.what`),
      how: t(`${inf}.assistants.roleplay.how`),
    },
    {
      key: 'moltbook',
      icon: <span className='text-[20px] leading-none'>🤝</span>,
      label: t(`${inf}.assistants.moltbook.label`),
      what: t(`${inf}.assistants.moltbook.what`),
      how: t(`${inf}.assistants.moltbook.how`),
    },
  ];

  const toolCards: CardInfo[] = [
    {
      key: 'files',
      icon: <FileText theme='outline' />,
      label: t(`${inf}.tools.files.label`),
      what: t(`${inf}.tools.files.what`),
      how: t(`${inf}.tools.files.how`),
    },
    {
      key: 'search',
      icon: <Search theme='outline' />,
      label: t(`${inf}.tools.search.label`),
      what: t(`${inf}.tools.search.what`),
      how: t(`${inf}.tools.search.how`),
    },
    {
      key: 'images',
      icon: <Picture theme='outline' />,
      label: t(`${inf}.tools.images.label`),
      what: t(`${inf}.tools.images.what`),
      how: t(`${inf}.tools.images.how`),
    },
    {
      key: 'mcp',
      icon: <MagicHat theme='outline' />,
      label: t(`${inf}.tools.mcp.label`),
      what: t(`${inf}.tools.mcp.what`),
      how: t(`${inf}.tools.mcp.how`),
    },
  ];

  return (
    <div className='flex flex-col gap-16px'>
      <p className='m-0 text-12px text-[var(--color-text-3)] text-center italic'>{t(`${inf}.clickHint`)}</p>
      <GuideSection
        title={t(`${inf}.sectionEngines`)}
        cards={engineCards}
        accent='rgb(var(--primary-6))'
        whatLabel={whatLabel}
        howLabel={howLabel}
      />
      <GuideSection
        title={t(`${inf}.sectionAssistants`)}
        cards={assistantCards}
        accent='rgb(var(--success-6))'
        whatLabel={whatLabel}
        howLabel={howLabel}
      />
      <GuideSection
        title={t(`${inf}.sectionTools`)}
        cards={toolCards}
        accent='rgb(var(--warning-6))'
        whatLabel={whatLabel}
        howLabel={howLabel}
      />
      <div className='flex items-center gap-6px pt-4px border-t border-solid border-[var(--color-border-1)]'>
        <Shield theme='outline' size={13} className='text-[var(--color-text-4)]' />
        <span className='text-11px text-[var(--color-text-4)]'>
          {t('guid.agentGuide.pillars.openSource.title')} · {t('guid.agentGuide.pillars.openSource.desc')}
        </span>
      </div>
    </div>
  );
};

export default AgentGuideContent;
