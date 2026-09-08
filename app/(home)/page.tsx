import Image from 'next/image';
import Link from 'next/link';
import { productLinks } from '@/lib/shared';
import icon from '@/public/clashmax-icon.png';

const tracks = [
  {
    eyebrow: '普通用户',
    title: '把 ClashMax 用顺手',
    body: '装好、导入配置、选对路由模式，再学会用连接和日志自己定位问题。',
    href: '/docs/start/install',
    cta: '从安装开始',
  },
  {
    eyebrow: '进阶用户',
    title: '看懂 ClashMax 的设计逻辑',
    body: '运行时配置怎么生成、片段库谁先谁后、一次修改到底是热重载还是重启。',
    href: '/docs/advanced/architecture',
    cta: '进入架构篇',
  },
];

const highlights = [
  {
    title: '原配置永不被改写',
    body: '导入的 YAML 原样保存，端口、controller、secret、DNS、TUN 都写进另一份由 App 生成的运行时配置。',
  },
  {
    title: '三种路由模式',
    body: '系统代理走用户态核心，TUN 交给特权 helper，NE 代理走实验性的 Network Extension。',
  },
  {
    title: '改动可预期',
    body: '每次修改都会明确告诉你结果：热重载、需要重启、下次启动生效，或者被运行时拒绝后回滚。',
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
              ClashMax · macOS 原生 Mihomo 客户端
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
              ClashMax 指南
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-fd-muted-foreground">
          一份写给两类人的文档：想把代理跑顺的日常用户，和想弄清楚它为什么这样设计的进阶用户。
        </p>

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
          {tracks.map((track) => (
            <Link
              key={track.href}
              href={track.href}
              className="group rounded-xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
            >
              <p className="text-xs font-medium tracking-wide text-fd-muted-foreground">
                {track.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{track.title}</h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">{track.body}</p>
              <p className="mt-4 text-sm font-medium text-fd-primary">
                {track.cta}
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t pt-10 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t pt-6 text-xs text-fd-muted-foreground">
          本站是社区维护的使用文档，不隶属于 Mihomo 上游项目。ClashMax 以 GPL-3.0 发布。
        </p>
      </div>
    </main>
  );
}
