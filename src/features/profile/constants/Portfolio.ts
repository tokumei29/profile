/** ポートフォリオ（`public` 配下の画像・PDF を参照）。ここに追記・編集 */

export type PortfolioItem = {
  title: string;
  /** `public` からのパス（例: `/images/portfolio/foo.png`） */
  iconSrc: string;
  /** 左カラム画像の alt（省略時はタイトルから生成） */
  iconAlt?: string;
  summary: string;
  /** 区分名 → 技術スタック（キーがラベルとして表示されます） */
  tech: Record<string, string>;
  concept: string;
  /** フロントエンド用リポジトリ */
  githubFeUrl?: string;
  /** バックエンド用リポジトリ */
  githubBeUrl?: string;
  /** `public` からのパス（例: `/docs/outline.pdf`） */
  pdfUrl?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'プロジェクト名：SecondPath',
    iconSrc: '/secondpath.png',
    summary:
      '概要：カウンセラー、相談者向けのカウンセリング支援アプリ。カウンセリングというものが受けっぱなしのアナログだったりするものなので、意識付けやコミュニケーション面でカウンセリングの効用を高めることを趣旨にしています。',
    tech: {
      フロントエンド: 'Next.js v16, React v19, TypeScript',
      バックエンド: 'Ruby on Rails v8',
      'インフラ・テストなど': 'Docker, Vitest, Playwright（テストは一部のフローに導入）, Supabase',
    },
    concept: `最新バージョンのフレームワークを使ってユーザー側、アドミン側（支援者想定）両画面実装（実運用を想定したプロダクトです。）
feature-based 設計、App Router、サーバーコンポーネントなど活用。
通常の CRUD 以外にも心理テスト結果のグラフ表示、アドミン側とのチャットでのダイレクト通信機能など多機能に作っています`,
    githubFeUrl: 'https://github.com/tokumei29/SecondPath-frontend',
    githubBeUrl: 'https://github.com/tokumei29/SecondPath-backend',
    pdfUrl: '/secondpath.pdf',
  },
];
