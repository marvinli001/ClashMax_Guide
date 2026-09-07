/**
 * Fumadocs UI 界面文案的中文覆盖。
 *
 * 键的格式是 `英文原文(上下文)`，与 fumadocs-ui 内部 `useTranslations({ note })`
 * 传入的上下文一一对应。未覆盖到的键会自动回落到英文，所以升级 fumadocs 后
 * 若出现新的英文文案，只需在这里补一行。
 */
export const zhTranslations: Record<string, string> = {
  // 搜索
  'Search(search trigger)': '搜索',
  'Search(search dialog)': '搜索文档',
  'Open Search(search trigger)(aria-label)': '打开搜索',
  'Close Search(search dialog)(aria-label)': '关闭搜索',
  'No results found(search dialog)': '没有匹配的结果',

  // 目录与分页
  'On this page(table of contents)': '本页目录',
  'No Headings(table of contents)': '本页没有标题',
  'Table of Contents(inline table of contents)': '目录',
  'Previous Page(pagination)': '上一页',
  'Next Page(pagination)': '下一页',

  // 页脚与编辑
  'Edit on GitHub(edit page)': '在 GitHub 上编辑',
  'Edit on GitHub(page footer)': '在 GitHub 上编辑',
  'Last updated on(edit page)': '最后更新于',
  'Last updated on(page footer)': '最后更新于',

  // 页面操作
  'Copy Markdown(page actions)': '复制 Markdown',
  'View as Markdown(page actions)': '查看 Markdown 源码',
  'Open(page actions)': '打开方式',
  'Open in GitHub(page actions)': '在 GitHub 中打开',
  'Open in ChatGPT(page actions)': '在 ChatGPT 中打开',
  'Open in Claude(page actions)': '在 Claude 中打开',
  'Open in Cursor(page actions)': '在 Cursor 中打开',
  'Open in Scira AI(page actions)': '在 Scira AI 中打开',
  'Read {url}, I want to ask questions about it.(page actions)':
    '请阅读 {url}，我想就它提问。',

  // 代码块与标题
  'Copy Text(code block)(aria-label)': '复制代码',
  'Copied Text(code block)(aria-label)': '已复制',
  'Copy Anchor Link(heading anchor)(aria-label)': '复制锚点链接',
  'Copy Link(accordion)(aria-label)': '复制链接',

  // 侧边栏与导航
  'Open Sidebar(sidebar)(aria-label)': '展开侧边栏',
  'Close Sidebar(sidebar)(aria-label)': '收起侧边栏',
  'Collapse Sidebar(sidebar)(aria-label)': '折叠侧边栏',
  'Open Sidebar(aria-label)': '展开侧边栏',
  'Close Sidebar(aria-label)': '收起侧边栏',
  'Show Sidebar(sidebar)': '显示侧边栏',
  'Hide Sidebar(sidebar)': '隐藏侧边栏',
  'Toggle Menu(home layout header)(aria-label)': '切换菜单',

  // 主题
  'Toggle Theme(theme switcher)(aria-label)': '切换主题',
  'Light(theme switcher)(aria-label)': '浅色',
  'Dark(theme switcher)(aria-label)': '深色',
  'System(theme switcher)(aria-label)': '跟随系统',

  // 其他
  'Close Banner(banner)(aria-label)': '关闭横幅',
  'Page Not Found(404 not found page)': '页面不存在',
  'Back to Home(404 not found page)': '回到首页',
  'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
    '你访问的页面可能已被移除、改名，或暂时不可用。',
  'Type(type table)': '类型',
  'Prop(type table)': '属性',
  'Default(type table)': '默认值',
  'Parameters(type table)': '参数',
  'Returns(type table)': '返回值',
};
