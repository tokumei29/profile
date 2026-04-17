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
  /** App Store の公開URL */
  appStoreUrl?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
//   {
//     title: 'アプリ名：CareBridge',
//     iconSrc: '/1.png',
//     iconAlt: 'CareBridge のアプリ概要',
//     summary:
//       '概要：App Store でリリース済みの介護記録支援アプリ。日々の介護記録をボタン一つで専門的な PDF レポートへ変換し、診察室やケアマネジャー、施設など外部の支援者へ共有しやすくするための情報の架け橋です。',
//     tech: {
//       'フロントエンド': 'React Native（Expo）, TypeScript',
//       'バックエンド': 'Ruby on Rails v8',
//       'インフラ': 'Supabase',
//     },
//     concept: `介護の「孤立」を、専門家との「チーム」へ。
// 『CareBridge（ケアブリッジ）』は、日々の介護記録をボタン一つで専門的な PDF レポートに変換し、外部の支援者へ届ける「情報の架け橋」です。

// 診察室、ケアマネジャーとの面談、そして施設への入所。
// 言葉では伝えきれない日々の変化を、確かなデータとして手渡すことで、大切な人を守る支援の輪を広げます。

// データ出力のPDF化やデータをグラフ化して表示することで、よりわかりやすく、より専門的な情報を提供することを趣旨にしています。`,
//     appStoreUrl:
//       'https://apps.apple.com/jp/app/carebridge%E8%87%AA%E5%AE%85%E4%BB%8B%E8%AD%B7%E8%A8%98%E9%8C%B2%E3%82%92%E7%97%85%E9%99%A2-%E6%96%BD%E8%A8%AD-%E3%82%B1%E3%82%A2%E3%83%9E%E3%83%8D%E3%81%B8%E5%85%B1%E6%9C%89/id6761454364',
//   },
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
