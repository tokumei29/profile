import styles from '../wiki.module.css';

export function BioSection() {
  return (
    <section className={styles.section} aria-labelledby="sec-bio">
      <h2 id="sec-bio" className={styles.sectionTitle}>
        略歴
      </h2>
      <div className={styles.sectionBody}>
        <p>
          1981年生まれ。45歳。最終学歴は大学院（司法研究科）です。20代は法律に従事し、30代はエンタメ業界および福祉業界で働きました。
          <br />
          ITエンジニア経験は<strong>4年半</strong>
          になります（2026年3月現在）。
        </p>
        <p>
          40歳から職業訓練で Java
          を学び、ベンチャー企業（自社開発）へ就職。その後、SESに転職し、現在 45
          歳、フリーランスエンジニアとして活動しています。
        </p>
        <p>
          IT一筋ではありませんがその分、多様な観点からの問題解決や、ビジネスゴールを考慮した提案ができると考えています。
        </p>
      </div>
    </section>
  );
}
