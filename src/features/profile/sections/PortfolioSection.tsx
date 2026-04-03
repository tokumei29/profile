import Image from 'next/image';
import type { CSSProperties } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { useRevealOnScroll } from '../useRevealOnScroll';
import styles from '../wiki.module.css';

export function PortfolioSection() {
  const [portfolioListRef, portfolioCardsRevealed] =
    useRevealOnScroll<HTMLUListElement>();

  return (
    <section className={styles.section} aria-labelledby="sec-portfolio">
      <h2 id="sec-portfolio" className={styles.sectionTitle}>
        ポートフォリオ
      </h2>
      <div className={styles.sectionBody}>
        <p className={styles.portfolioIntro}>
          制作したポートフォリオです。実際に画面を見たい、動作を確認したい場合は、資料PDF内にリンク、テストアカウントの案内があるのでそちらを参照してください。
        </p>
        {PORTFOLIO_ITEMS.length > 0 ? (
          <ul
            ref={portfolioListRef}
            className={styles.portfolioList}
            aria-label="ポートフォリオ一覧"
          >
            {PORTFOLIO_ITEMS.map((item, index) => (
              <li key={`${item.title}-${index}`}>
                <article
                  className={`${styles.portfolioCard} ${
                    portfolioCardsRevealed ? styles.portfolioCardVisible : ''
                  }`}
                  style={
                    {
                      '--portfolio-card-delay': `${0.05 + index * 0.12}s`,
                    } as CSSProperties
                  }
                >
                  <div className={styles.portfolioCardMedia}>
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt ?? `${item.title}のスクリーンショット`}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className={styles.portfolioCardImg}
                    />
                  </div>
                  <div className={styles.portfolioCardBody}>
                    <h3 className={styles.portfolioCardTitle}>{item.title}</h3>
                    <p className={styles.portfolioOutline}>{item.summary}</p>
                    <div className={styles.portfolioBlock}>
                      <h4 className={styles.portfolioSubheading}>使用技術</h4>
                      <dl className={styles.portfolioTechList}>
                        {Object.entries(item.tech).map(([label, text]) => (
                          <div key={label} className={styles.portfolioTechRow}>
                            <dt className={styles.portfolioTechLabel}>
                              {label}
                            </dt>
                            <dd className={styles.portfolioTechDetail}>
                              {text}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className={styles.portfolioBlock}>
                      <h4 className={styles.portfolioSubheading}>
                        技術コンセプト
                      </h4>
                      <p className={styles.portfolioText}>{item.concept}</p>
                    </div>
                    <div className={styles.portfolioLinks}>
                      {item.githubFeUrl ? (
                        <a
                          href={item.githubFeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.portfolioLink}
                        >
                          GitHub（FE）
                        </a>
                      ) : null}
                      {item.githubBeUrl ? (
                        <a
                          href={item.githubBeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.portfolioLink}
                        >
                          GitHub（BE）
                        </a>
                      ) : null}
                      {item.pdfUrl ? (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.portfolioLink}
                        >
                          資料 PDF
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.relatedEmpty}>
            掲載する項目は <code>constants/portfolio.ts</code> の{' '}
            <code>PORTFOLIO_ITEMS</code> に追加してください。
          </p>
        )}
      </div>
    </section>
  );
}
