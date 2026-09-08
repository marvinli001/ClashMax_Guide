# ClashMax 指南

[ClashMax](https://github.com/marvinli001/ClashMax) 的中文使用文档，基于 [Fumadocs](https://fumadocs.dev) + Next.js 静态导出。

## 本地开发

```bash
pnpm install
```

```bash
pnpm dev
```

开发服务器在 http://localhost:3000。

## 构建

```bash
pnpm build
```

产物是纯静态站点，输出到 `out/`。本地预览构建结果：

```bash
pnpm start
```

## 目录结构

```
content/docs/          文档内容（MDX）
  index.mdx            首页
  meta.json            顶层导航顺序
  start/               入门
  guide/               日常使用
  advanced/            设计逻辑
  reference/           参考
app/                   Next.js App Router
  (home)/page.tsx      落地页
  docs/                文档路由
  api/search/route.ts  静态搜索索引
lib/
  shared.ts            站点名称、仓库地址、站点 URL
  layout.shared.tsx    导航栏配置
  translations.ts      Fumadocs UI 界面文案汉化
  source.ts            内容源定义
components/            MDX 组件注册、搜索对话框、Provider
```

## 写文档

新增页面：在 `content/docs/<分组>/` 下建 `.mdx` 文件，写好 frontmatter，然后把文件名加进同目录 `meta.json` 的 `pages` 数组。

```mdx
---
title: 页面标题
description: 一句话描述，会显示在列表和 OG 图里。
---
```

可用的 MDX 组件（已在 `components/mdx.tsx` 注册，无需 import）：

`Callout`（`type` 支持 `info` / `warn` / `error` / `success` / `idea`）、`Cards` / `Card`、`Steps` / `Step`、`Tabs` / `Tab`、`Accordions` / `Accordion`、`Files` / `Folder` / `File`、`TypeTable`。

## 部署

### GitHub Pages 项目页

仓库的 Pages 路径带子目录时，构建前设置 base path：

```bash
NEXT_PUBLIC_BASE_PATH=/ClashMax_Guide NEXT_PUBLIC_SITE_URL=https://marvinli001.github.io/ClashMax_Guide pnpm build
```

仓库里的 `.github/workflows/deploy.yml` 已经这么做了，推到 `main` 会自动构建并发布。

### 根路径或自定义域名

不设置 `NEXT_PUBLIC_BASE_PATH`，把 `NEXT_PUBLIC_SITE_URL` 换成实际域名，`out/` 直接丢给任何静态托管即可。

## 内容来源

文档对照 ClashMax 源码撰写。涉及键名、默认值、执行顺序的部分（运行时配置生成管线、原始 YAML 片段的保留键、嗅探默认端口等）都能在源码里对上，ClashMax 行为变更后要同步更新。

## 许可

文档内容以 ClashMax 项目的授权为准（GPL-3.0）。
