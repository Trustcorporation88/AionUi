/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { Modal } from '@arco-design/web-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AgentGuideContent from './AgentGuideContent';

type AgentGuideModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AgentGuideModal: React.FC<AgentGuideModalProps> = ({ visible, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={t('guid.agentGuide.title')}
      visible={visible}
      onCancel={onClose}
      footer={null}
      autoFocus={false}
      focusLock
      maskClosable
      style={{ width: 680, maxWidth: '92vw' }}
    >
      <div className='flex flex-col gap-12px max-h-72vh overflow-y-auto pr-4px'>
        <p className='m-0 text-13px text-[var(--color-text-2)] leading-relaxed'>{t('guid.agentGuide.intro')}</p>
        <AgentGuideContent />
      </div>
    </Modal>
  );
};

export default AgentGuideModal;
