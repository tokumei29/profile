/** 技術ブログ（執筆・発信先）。ここに追記・編集 */

export type TechBlogLink = {
  label: string;
  href: string;
  description?: string;
  variant: 'zenn' | 'qiita';
};

export const TECH_BLOG_LINKS: TechBlogLink[] = [
  {
    label: 'Zenn',
    href: 'https://zenn.dev/yasuhikasa',
    description: '',
    variant: 'zenn',
  },
  {
    label: 'Qiita',
    href: 'https://qiita.com/hikasayasu',
    description: '',
    variant: 'qiita',
  },
];
