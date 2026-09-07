'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { zhTranslations } from '@/lib/translations';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={{ locale: 'zh-CN', translations: zhTranslations }}
    >
      {children}
    </RootProvider>
  );
}
