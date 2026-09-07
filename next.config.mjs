import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// 部署到 GitHub Pages 的项目页（例如 /ClashMax_Guide）时，构建前设置：
//   NEXT_PUBLIC_BASE_PATH=/ClashMax_Guide
// 部署到根路径或自定义域名时留空即可。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  images: { unoptimized: true },
};

export default withMDX(config);
