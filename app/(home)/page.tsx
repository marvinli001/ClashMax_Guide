import Image from 'next/image';
import Link from 'next/link';
import { productLinks } from '@/lib/shared';
import icon from '@/public/clashmax-icon.png';

const entries = [
  {
    title: '入门',
    body: '安装、导入配置、选路由模式、看懂连接和日志。',
    href: '/docs/start/install',
  },
  {
    title: '设计逻辑',
    body: '运行时配置怎么生成，片段谁先谁后，一次修改会发生什么。',
    href: '/docs/advanced/architecture',
  },
];

const facts = [
  {
    title: '原配置不动',
    body: '导入的 YAML 原样保存。端口、controller、secret、DNS、TUN 写在另一份生成的运行时配置里。',
  },
  {
    title: '三种路由',
    body: '系统代理走用户态核心，TUN 交给特权 helper，NE 代理走实验性的 Network Extension。',
  },
  {
    title: '改动有回执',
    body: '每次修改都会说明结果：热重载、需要重启、下次启动生效，或者被运行时拒绝后回滚。',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 md:py-24">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-4">
          <Image
            src={icon}
            alt="ClashMax"
            width={64}
            height={64}
            className="rounded-[14px] ring-1 ring-fd-border shadow-sm"
            priority
          />
          <div>
            <p className="text-sm font-medium text-fd-muted-foreground">
              macOS 原生 Mihomo 客户端
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
              ClashMax 指南
            </h1>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs"
            className="rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            阅读文档
          </Link>
          <a
            href={productLinks.releases}
            className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            下载最新版本
          </a>
          <a
            href={productLinks.repo}
            className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            GitHub 仓库
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group rounded-xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
            >
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">{entry.body}</p>
              <p className="mt-4 text-sm font-medium text-fd-primary">
                打开
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t pt-10 md:grid-cols-3">
          {facts.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t pt-6 text-xs text-fd-muted-foreground">
          社区维护，与 Mihomo 上游项目无隶属关系。ClashMax 以 GPL-3.0 发布。
        </p>
      </div>
    </main>
  );
}
