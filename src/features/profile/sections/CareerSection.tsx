'use client';

import { Fragment, useState } from 'react';
import { WORK_HISTORY } from '../constants';
import { ProfileDetailsAccordion } from '../components/ProfileDetailsAccordion';
import leadStyles from '../components/ProfileSectionLead.module.css';
import styles from './CareerSection.module.css';

export function CareerSection() {
  const [tbodyKey, setTbodyKey] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="業務経歴">
      <h2 id="業務経歴" className={styles.sectionTitle}>
        業務経歴
      </h2>
      <div className={styles.sectionBody}>
        <p className={leadStyles.lead}>
          これまでの主な在籍・業務内容です。期間・内容は随時更新します（スマホ、タブレットで見る場合は横スクロールできます）。
        </p>
        <ProfileDetailsAccordion
          summaryTitle="業務経歴の詳細を表示"
          summaryMeta={`クリックで開閉 · 全 ${WORK_HISTORY.length} 件の案件`}
          contentScrollable
          onOpenChange={(open) => {
            if (open) setTbodyKey((k) => k + 1);
          }}
        >
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
            <tbody key={tbodyKey}>
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
                  <td className={styles.workHistoryTdSummary}>{row.summary}</td>
                  <td className={styles.workHistoryTdTech}>{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ProfileDetailsAccordion>
      </div>
    </section>
  );
}
