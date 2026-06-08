/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import guideImage from '@/renderer/assets/images/agent-guide-ptbr.png';
import { Modal } from '@arco-design/web-react';
import { AlarmClock, Earth, Lightning, MagicHat, Robot, Shield } from '@icon-park/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type AgentGuideModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AgentGuideModal: React.FC<AgentGuideModalProps> = ({ visible, onClose }) => {
  const { t } = useTranslation();

  const pillars = [
    {
      key: 'builtinAgent',
      icon: <Lightning theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.builtinAgent.title'),
      desc: t('guid.agentGuide.pillars.builtinAgent.desc'),
    },
    {
      key: 'multiAgents',
      icon: <Robot theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.multiAgents.title'),
      desc: t('guid.agentGuide.pillars.multiAgents.desc'),
    },
    {
      key: 'remoteAccess',
      icon: <Earth theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.remoteAccess.title'),
      desc: t('guid.agentGuide.pillars.remoteAccess.desc'),
    },
    {
      key: 'automation',
      icon: <AlarmClock theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.automation.title'),
      desc: t('guid.agentGuide.pillars.automation.desc'),
    },
    {
      key: 'assistants',
      icon: <MagicHat theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.assistants.title'),
      desc: t('guid.agentGuide.pillars.assistants.desc'),
    },
    {
      key: 'openSource',
      icon: <Shield theme='outline' size={20} />,
      title: t('guid.agentGuide.pillars.openSource.title'),
      desc: t('guid.agentGuide.pillars.openSource.desc'),
    },
  ];

  return (
    <Modal
      title={t('guid.agentGuide.title')}
      visible={visible}
      onCancel={onClose}
      footer={null}
      autoFocus={false}
      focusLock
      maskClosable
      style={{ width: 760, maxWidth: '92vw' }}
    >
      <div className='flex flex-col gap-16px max-h-70vh overflow-y-auto pr-4px'>
        <p className='m-0 text-14px text-[var(--color-text-2)] leading-relaxed'>{t('guid.agentGuide.intro')}</p>
        <img
          src={guideImage}
          alt={t('guid.agentGuide.imageAlt')}
          className='w-full h-auto rd-12px border border-solid border-[var(--color-border-2)]'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12px'>
          {pillars.map((pillar) => (
            <div
              key={pillar.key}
              className='flex items-start gap-10px p-12px rd-10px bg-fill-1 border border-solid border-[var(--color-border-1)]'
            >
              <span className='shrink-0 text-brand mt-2px'>{pillar.icon}</span>
              <div className='min-w-0'>
                <div className='text-13px font-semibold text-[var(--color-text-1)]'>{pillar.title}</div>
                <div className='text-12px text-[var(--color-text-3)] leading-snug mt-2px'>{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AgentGuideModal;
