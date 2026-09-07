import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// 默认的 multilingual 分词器已覆盖中文，无需额外配置 language。
export const { staticGET: GET } = createFromSource(source);
