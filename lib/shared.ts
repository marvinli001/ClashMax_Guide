export const appName = 'ClashMax 指南';
export const appDescription = 'ClashMax 的安装、配置、排查与实现说明。';

/** 站点公开地址，用于 metadataBase / OG 图片绝对路径。 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marvinli001.github.io/ClashMax_Guide';

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/** 文档站自身的仓库，用于「在 GitHub 上编辑此页」。 */
export const gitConfig = {
  user: 'marvinli001',
  repo: 'ClashMax_Guide',
  branch: 'main',
};

/** ClashMax 产品仓库与常用外链。 */
export const productLinks = {
  repo: 'https://github.com/marvinli001/ClashMax',
  releases: 'https://github.com/marvinli001/ClashMax/releases/latest',
  issues: 'https://github.com/marvinli001/ClashMax/issues',
  discussions: 'https://github.com/marvinli001/ClashMax/discussions',
  mihomo: 'https://github.com/MetaCubeX/mihomo',
};
