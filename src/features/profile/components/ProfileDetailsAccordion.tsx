import type { ReactNode } from 'react';
import styles from './ProfileDetailsAccordion.module.css';

type Props = {
  summaryTitle: string;
  summaryMeta: string;
  /** 内側を横スクロール可能にする（表など） */
  contentScrollable?: boolean;
  /** 内側にパディングを付ける（カード一覧など） */
  contentPadded?: boolean;
  /** `<details>` の開閉時（閉じたときにアニメ状態をリセットする用途など） */
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
};

export function ProfileDetailsAccordion({
  summaryTitle,
  summaryMeta,
  contentScrollable = false,
  contentPadded = false,
  onOpenChange,
  children,
}: Props) {
  return (
    <details
      className={styles.accordion}
      data-profile-details=""
      onToggle={(e) => onOpenChange?.(e.currentTarget.open)}
    >
      <summary className={styles.summary}>
        <span className={styles.summaryText}>
          <span className={styles.summaryTitle}>{summaryTitle}</span>
          <span className={styles.summaryMeta}>{summaryMeta}</span>
        </span>
        <span className={styles.summaryIcon} aria-hidden />
      </summary>
      <div
        className={[
          styles.content,
          contentScrollable ? styles.contentScroll : '',
          contentPadded ? styles.contentPadded : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </details>
  );
}
