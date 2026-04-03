import { PAGE_TOC_ITEMS } from '../constants';
import styles from '../wiki.module.css';

export function PageToc() {
  return (
    <nav className={styles.tocNav} aria-label="ページ内目次">
      <p className={styles.tocNavTitle}>目次</p>
      <ol className={styles.tocList}>
        {PAGE_TOC_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={styles.tocLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
