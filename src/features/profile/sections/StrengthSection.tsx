import { STRENGTHS } from '../constants';
import styles from './StrengthSection.module.css';

export function StrengthSection() {
  return (
    <section className={styles.section} aria-labelledby="私の強み">
      <h2 id="私の強み" className={styles.sectionTitle}>
        私の強み
      </h2>
      <div className={styles.sectionBody}>
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
            など）のキャッチアップも行っています。単にタスク消化を早めるだけではなく、AIがあるからこそプロジェクトに即した実装に加え、バグを抑えた堅牢な実装やベストプラクティスを追求することを心がけています。
          </li>
          <li>
            タスク消化のスピード・量は若い方と比較しても評価を受けてきました。施策プロジェクトでは他チームや企画側と積極的に調整を行い、コミュニケーション力や俯瞰した状況把握も評価を受けてきました。
          </li>
        </ul>

        <h3>AIでは代替できない強み</h3>
        <p>
          技術スタック（Next.js / Rails）に加え、AIや若手エンジニアには代替不可能な、チームや組織を動かして「プロジェクトを完遂させる力」をもってプロジェクトに貢献します。
        </p>
        <ul className={styles.aiStrengthList}>
          {STRENGTHS.map(({ number, title, body }) => (
            <li key={number} className={styles.aiStrengthItem}>
              <span className={styles.aiStrengthNumber}>{number}</span>
              <div>
                <p className={styles.aiStrengthTitle}>{title}</p>
                <p className={styles.aiStrengthBody}>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
