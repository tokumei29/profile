'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ProfileDetailsAccordion } from '../components/ProfileDetailsAccordion';
import leadStyles from '../components/ProfileSectionLead.module.css';
import styles from './PortfolioSection.module.css';

export function PortfolioSection() {
  /** アコーディオンを開くたび増やして <ul> を再マウントし、カードの @keyframes を毎回最初から再生する */
  const [portfolioListKey, setPortfolioListKey] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="ポートフォリオ">
      <h2 id="ポートフォリオ" className={styles.sectionTitle}>
        ポートフォリオ
      </h2>
      <div className={styles.sectionBody}>
        <p className={leadStyles.lead}>
          制作したポートフォリオです。実際に画面を見たい、動作を確認したい場合は、アコーディオンを開いて資料PDF内にアプリのリンク、テストアカウントの案内があるのでそちらを参照してください。
        </p>
        {PORTFOLIO_ITEMS.length > 0 ? (
          <ProfileDetailsAccordion
            summaryTitle="ポートフォリオの詳細を表示"
            summaryMeta={`クリックで開閉 · 全 ${PORTFOLIO_ITEMS.length} 件`}
            contentPadded
            onOpenChange={(open) => {
              if (open) setPortfolioListKey((k) => k + 1);
            }}
          >
            <ul
              key={portfolioListKey}
              className={styles.portfolioList}
              aria-label="ポートフォリオ一覧"
            >
              {PORTFOLIO_ITEMS.map((item, index) => (
                <li key={`${item.title}-${index}`}>
                  <article
                    className={styles.portfolioCard}
                    style={
                      {
                        '--portfolio-card-delay': `${0.05 + index * 0.12}s`,
                      } as CSSProperties
                    }
                  >
                    <div className={styles.portfolioCardMedia}>
                      <Image
                        src={item.iconSrc}
                        alt={
                          item.iconAlt ?? `${item.title}のスクリーンショット`
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, 30vw"
                        className={styles.portfolioCardImg}
                      />
                    </div>
                    <div className={styles.portfolioCardBody}>
                      <h3 className={styles.portfolioCardTitle}>
                        {item.title}
                      </h3>
                      <p className={styles.portfolioOutline}>{item.summary}</p>
                      <div className={styles.portfolioBlock}>
                        <h4 className={styles.portfolioSubheading}>使用技術</h4>
                        <dl className={styles.portfolioTechList}>
                          {Object.entries(item.tech).map(([label, text]) => (
                            <div
                              key={label}
                              className={styles.portfolioTechRow}
                            >
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
          </ProfileDetailsAccordion>
        ) : (
          <p className={styles.relatedEmpty}>
            掲載する項目は <code>constants/Portfolio.ts</code> の{' '}
            <code>PORTFOLIO_ITEMS</code> に追加してください。
          </p>
        )}
      </div>
    </section>
  );
}
