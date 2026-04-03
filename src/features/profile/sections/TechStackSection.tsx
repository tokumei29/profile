import styles from '../wiki.module.css';

export function TechStackSection() {
  return (
    <section className={styles.section} aria-labelledby="sec-activity">
      <h2 id="sec-activity" className={styles.sectionTitle}>
        技術スタック
      </h2>
      <div className={styles.sectionBody}>
        <h3>メインの技術スタック</h3>
        <p>
          Next.js, React, TypeScript をフロントエンドの主軸とし、Rails
          をバックエンドの主要技術として使用しています。これらの技術を活用したプロジェクト経験が豊富で、特に
          Web アプリケーションの設計・開発・運用に強みがあります。
        </p>
        <div className={styles.stackPanel}>
          <dl className={styles.techStackDl}>
            <div className={styles.techStackItem}>
              <dt>Next.js / React</dt>
              <dd>約 4 年</dd>
            </div>
            <div className={styles.techStackItem}>
              <dt>TypeScript</dt>
              <dd>約 4 年</dd>
            </div>
            <div className={styles.techStackItem}>
              <dt>Ruby on Rails</dt>
              <dd>約 1.5 年</dd>
            </div>
            <div className={styles.techStackItem}>
              <dt>Node.js</dt>
              <dd>約 1 年</dd>
            </div>
          </dl>
          <p className={styles.techStackFootnote}>
            その他：Docker、AWS、GitHub Actions
            などの関連技術もプロジェクトで使用経験があります。
          </p>
        </div>
        <h3>私の強み</h3>
        <ul className={styles.strengthList}>
          <li>
            設計→実装→テストのみならず、自社開発案件では担当部署からのヒアリングからリリース後の運用まで一気通貫で経験しているため、技術的な問題解決に加え、プロジェクトのビジネスゴールやユーザー体験を考慮した提案を行い、単なるコード実装にとどまらない価値を提供します。
          </li>
          <li>
            最新技術のキャッチアップも行っています（最近では Next.js v16、React
            v19）。AI
            やクラウドサービスなどの新しいツールも積極的に活用し、プロジェクトの効率化や品質向上に貢献します。
          </li>
          <li>
            AI ツール（Gemini、GitHub Copilot Agent、Cursor
            など）のキャッチアップも行っています。単にタスク消化を早めるだけではなく、プロジェクトに即した実装に加え、バグを抑えた堅牢な実装やベストプラクティスを追求することを心がけています。
          </li>
          <li>
            タスク消化のスピード・量は若い方と比較しても評価を受けてきました。施策プロジェクトでは他チームや企画側と積極的に調整を行い、コミュニケーション力や俯瞰した状況把握も評価を受けてきました。
          </li>
        </ul>
      </div>
    </section>
  );
}
