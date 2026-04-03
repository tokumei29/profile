import styles from './OutlookSection.module.css';

export function OutlookSection() {
  return (
    <section className={styles.section} aria-labelledby="今後の展望">
      <h2 id="今後の展望" className={styles.sectionTitle}>
        今後の展望
      </h2>
      <div className={styles.sectionBody}>
        <p>
          まずプロジェクトに対して、
          <strong>技術面で貢献していきたい</strong>
          と考えています。自走して問題なく進められることはもちろん、指示待ちではなく、課題を見つけて手を動かし、前に進める姿勢を大切にしたいです。
        </p>
        <p>
          そのうえで、年齢を重ねてきたからこそ、
          <strong>チーム間・部署間の調整にも力を発揮したい</strong>
          です。技術的な推進力と、関係者をつなぐ調整力の両方で、プロジェクトを前に引っ張れる存在になりたいと思っています。
        </p>
        <p>
          各チーム・各部署の皆さんと同じ目的——
          <strong>より良いプロダクトを形にし、世の中に届けること</strong>
          ——のために、自分に何ができるかを考え続け、貢献できる人材であり続けたいです。
        </p>
      </div>
    </section>
  );
}
