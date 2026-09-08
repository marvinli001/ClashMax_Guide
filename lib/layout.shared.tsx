import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, productLinks } from './shared';
import icon from '@/public/clashmax-icon.png';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <Image
            src={icon}
            alt=""
            width={22}
            height={22}
            className="rounded-[5px] ring-1 ring-fd-border"
            priority
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
