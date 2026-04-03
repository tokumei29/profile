import { Fragment } from 'react';
import { WORK_HISTORY } from '../constants';
import styles from '../wiki.module.css';

export function CareerSection() {
  return (
    <section className={styles.section} aria-labelledby="sec-career">
      <h2 id="sec-career" className={styles.sectionTitle}>
        業務経歴
      </h2>
      <div className={styles.sectionBody}>
        <p className={styles.workHistoryLead}>
          これまでの主な在籍・業務内容です。期間・内容は随時更新します。
        </p>
        <details className={styles.workHistoryAccordion}>
          <summary className={styles.workHistorySummary}>
            <span className={styles.workHistorySummaryText}>
              <span className={styles.workHistorySummaryTitle}>
                業務経歴の詳細を表示
              </span>
              <span className={styles.workHistorySummaryMeta}>
                クリックで開閉 · 全 {WORK_HISTORY.length} 件の案件
              </span>
            </span>
            <span className={styles.workHistorySummaryIcon} aria-hidden />
          </summary>
          <div className={styles.workHistoryScroll}>
            <table className={styles.workHistoryTable}>
              <caption className={styles.workHistoryCaption}>
                業務経歴一覧
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.workHistoryThNum}>
                    No.
                  </th>
                  <th scope="col" className={styles.workHistoryThPeriod}>
                    在籍期間
                  </th>
                  <th scope="col" className={styles.workHistoryThDuration}>
                    月数
                  </th>
                  <th scope="col" className={styles.workHistoryThSummary}>
                    業務内容
                  </th>
                  <th scope="col" className={styles.workHistoryThTech}>
                    使用技術
                  </th>
                </tr>
              </thead>
              <tbody>
                {WORK_HISTORY.map((row, index) => (
                  <tr
                    key={`${row.period}-${index}`}
                    className={styles.workHistoryRow}
                    style={{
                      animationDelay: `${0.04 + index * 0.09}s`,
                    }}
                  >
                    <td className={styles.workHistoryTdNum}>{index + 1}</td>
                    <td className={styles.workHistoryTdPeriod}>
                      {row.period.split('〜').map((segment, i) => (
                        <Fragment key={i}>
                          {i > 0 ? (
                            <>
                              〜<wbr />
                            </>
                          ) : null}
                          {segment}
                        </Fragment>
                      ))}
                    </td>
                    <td className={styles.workHistoryTdDuration}>
                      {row.duration}
                    </td>
                    <td className={styles.workHistoryTdSummary}>
                      {row.summary}
                    </td>
                    <td className={styles.workHistoryTdTech}>{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
