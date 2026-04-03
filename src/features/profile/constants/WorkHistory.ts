/** 業務経歴（日付・文言は必要に応じて編集）。複数行の文字列は必ずテンプレートリテラル（`）を使う */

export type WorkHistoryRow = {
  period: string;
  duration: string;
  summary: string;
  tech: string;
};

export const WORK_HISTORY: WorkHistoryRow[] = [
  {
    period: '2025年5月〜2026年2月',
    duration: '10ヶ月',
    summary: `【案件名】
求職関連 WEB サイト運用、改修

【案件内容】
・人材系企業の求職関連サイト、アプリの運用・改修を担当。
・アジャイル開発（スクラム）でチームと連携しながら、新機能追加や既存機能の改善を実施。

【実施作業】
・Next.js、TypeScript を用いたフロントエンド開発・改修
・アジャイル開発（スクラム）でのチーム開発
・JavaScript から TypeScript への置き換え
・テストコードの整備（Playwright）
・新規機能の開発（各担当部署、チームとの折衝あり）`,
    tech: `【開発環境】
GitHub
Docker
esa
Redmine

【言語等】
Next.js
TypeScript
Redux
Vitest
Playwright
（BE は）Go`,
  },
  {
    period: '2024年12月〜2025年4月',
    duration: '5ヶ月',
    summary: `【案件名】
スマートフォン販売の WEB サイト運用、改修

【案件内容】
・通信系会社のスマートフォン販売サイトの運用・改修を担当。
・アジャイル開発（スクラム）でチームと連携しながら、新機能追加や既存機能の改善を実施。

【実施作業】
・Next.js、TypeScript を用いたフロントエンド開発・改修
・単体・結合・総合テストの実施（Jest / TestCafe）
・アジャイル開発（スクラム）でのチーム開発（デイリースクラム、スプリントプランニング、レトロスペクティブ参加）
・バグ修正やパフォーマンス改善対応`,
    tech: `【開発環境】
GitHub
Docker
Windows
Confluence
Jira
WebRlease2（CMS）

【言語等】
Next.js
TypeScript
Jest
TestCafe`,
  },
  {
    period: '2024年7月〜2024年11月',
    duration: '5ヶ月',
    summary: `【案件名】
退職金・年金保険などを管理するシステムのリプレイス

【案件内容】
・COBOL で構築されていた退職金・年金保険管理システムを Java へリプレイスするプロジェクトに参画。
・開発の最終工程（結合テスト・バグ修正フェーズ）から参加し、品質向上のための修正を担当。

【実施作業】
・Java を用いた機能の修正・バグフィックス
・結合テストの実施・テストケースの作成
・仕様書をもとに既存機能の動作検証・デバッグ
・バグの原因調査・ログ解析を行い、適切な修正を実施
・他チームとの連携による不具合報告・対応`,
    tech: `【開発環境】
VM
JP1

【言語等】
Java
Spring Boot
SQL`,
  },
  {
    period: '2023年8月〜2024年6月',
    duration: '11ヶ月',
    summary: `【案件名】
IoT 機器のユーザーインターフェイスの開発

【案件内容】
・家電制御用の IoT システムにおける Web アプリ部分（フロントエンド・バックエンド）の開発を担当。
・また、組み込みシステムのアドオン開発や各種エラー修正も対応。
・アジャイル開発のため、実装レビューやクライアントとのコミュニケーションを重視しながら開発を進行。

【実施作業】
・フロントエンド開発（Next.js, TypeScript）
・バックエンド開発（Express.js, Node.js）
・組み込みシステムのエラー修正（C++ を使用）
・API 仕様書・テスト仕様書など各種ドキュメント作成
・Jest を用いたテストコード作成・結合テスト
・Yocto を使用したビルド・動作確認
・実装レビューに関するクライアントワーク（仕様調整、コードレビュー、フィードバック対応）`,
    tech: `【開発環境】
Docker
SVN
Windows
Redmine
VS Code
Yocto
Redis

【言語等】
TypeScript
JavaScript
Express.js
Next.js
Jest
Frisby.js
C++`,
  },
  {
    period: '2022年1月〜2023年6月',
    duration: '18ヶ月',
    summary: `【案件名】
教育基幹システム及び顧客管理システムの保守・開発

【案件内容】
・スクールビジネス向けの顧客管理・カリキュラム管理システムを中心に、10 個程度のアプリの運用保守・改修業務を担当。
・社内の各部署からのヒアリングをもとに、要件定義から設計・実装・リリースまでを一貫して対応。
・運用保守業務だけでなく、新規機能の開発や Shopify を活用した EC サービスの構築も担当。

【実施作業】
・各部署からのヒアリングをもとに、要件定義・設計・実装・デプロイまでを担当
・バックエンド開発（Ruby on Rails）、フロントエンド改修（Next.js, TypeScript）
・SQL を活用したデータ抽出、データ修正
・障害対応（ログ解析・バグ修正）・Linux サーバーの調査対応
・AWS（EC2, ECS, CloudWatch）を活用したシステム運用・監視
・Shopify のサービス構築（EC 機能のカスタマイズ・拡張）`,
    tech: `【開発環境】
Docker
VS Code
GitHub
AWS
MySQL
CircleCI
GitHub Actions
macOS

【言語等】
Ruby
Ruby on Rails
TypeScript
Next.js`,
  },
  {
    period: '2021年11月〜2021年12月',
    duration: '2ヶ月',
    summary: `【案件名】
企業ホームページの新規開発

【案件内容】
・企業HPの新規作成を担当し、Figmaのデザインをもとにフロントエンドの実装を担当。
・レスポンシブ対応やアクセシビリティを考慮し、デザインの再現度を高める実装を行った。

【実施作業】
・Figmaのデザインをもとに、TypeScript、Next.jsでフロントエンドを実装
・PC・スマホのレスポンシブデザイン対応
`,
    tech: `【開発環境】
VS code
macOS


【言語等】
TypeScript
Next.js
Tailwind  CSS
`,
  },
  {
    period: '2021年8月〜2021年10月',
    duration: '3ヶ月',
    summary: `【案件名】
座席予約システムの新規開発

【案件内容 / サービス内容】
・コワーキングスペースや企業のフリーアドレス制に対応した座席予約SaaSシステムの開発に参画。
・主に 要件定義後の基本設計・UI設計、お客様との調整、PM補助業務を担当 し、プロジェクトの初期フェーズを支援。

【実施作業】
・デザイナーと連携し、基本設計書（画面仕様書）を作成
・お客様とのMTGに参加し、議事録作成・要件整理をサポート
・お客様の要望をもとに、必要な機能を精査・優先度を決定
・PM補助業務（メール・チャットでのやり取り、各種ドキュメント更新）

`,
    tech: `【役割】
PM補助業務
`,
  },
];
