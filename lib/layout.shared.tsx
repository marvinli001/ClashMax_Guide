import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, productLinks } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <span
            aria-hidden
            className="inline-block size-2 rounded-full bg-fd-primary"
          />
          {appName}
        </span>
      ),
    },
    links: [
      { text: '文档', url: '/docs', active: 'nested-url' },
      { text: '下载 ClashMax', url: productLinks.releases, external: true },
    ],
    githubUrl: productLinks.repo,
  };
}
