import styles from './TechStackSection.module.css';

export function TechStackSection() {
  return (
    <section className={styles.section} aria-labelledby="技術スタック">
      <h2 id="技術スタック" className={styles.sectionTitle}>
        技術スタック
      </h2>
      <div className={styles.sectionBody}>
        <h3>メインの技術スタック</h3>
        <p>
          Next.js, React, TypeScript をフロントエンドの主軸とし、Rails
          をバックエンドの主要技術として使用しています。これらの技術を活用したプロジェクト経験、特に
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
        <h3>開発用PC</h3>
        <p>MacBook Air(M5, 24GB RAM, 1TB,2026年版)を所持しています。開発に困ることはないと思われるので、基本的に貸与は不要です。</p>
      </div>
    </section>
  );
}
