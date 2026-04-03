import type { CSSProperties } from 'react';
import { TECH_BLOG_LINKS } from '../constants';
import { useRevealOnScroll } from '../useRevealOnScroll';
import styles from './TechBlogSection.module.css';

export function TechBlogSection() {
  const [blogCardGridRef, blogCardsRevealed] =
    useRevealOnScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-labelledby="技術ブログ">
      <h2 id="技術ブログ" className={styles.sectionTitle}>
        技術ブログ
      </h2>
      <div className={styles.sectionBody}>
        <p className={styles.relatedIntro}>
          技術記事・執筆ページへのリンクです（新しいタブで開きます）。
        </p>
        {TECH_BLOG_LINKS.length > 0 ? (
          <div
            ref={blogCardGridRef}
            className={styles.blogCardGrid}
            aria-label="技術ブログへのリンク"
          >
            {TECH_BLOG_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.blogCard} ${
                  link.variant === 'zenn'
                    ? styles.blogCardZenn
                    : styles.blogCardQiita
                } ${blogCardsRevealed ? styles.blogCardVisible : ''}`}
                style={
                  {
                    '--blog-card-delay': `${0.05 + index * 0.12}s`,
                  } as CSSProperties
                }
              >
                <span className={styles.blogCardHeader}>{link.label}</span>
                {link.description ? (
                  <span className={styles.blogCardBody}>
                    {link.description}
                  </span>
                ) : null}
                <span className={styles.blogCardFooter}>
                  記事一覧を見る
                  <span className={styles.blogCardArrow} aria-hidden>
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className={styles.relatedEmpty}>
            掲載するリンクは <code>constants/TechBlog.ts</code> の{' '}
            <code>TECH_BLOG_LINKS</code> に <code>label</code> と{' '}
            <code>href</code> を追加してください。
          </p>
        )}
      </div>
    </section>
  );
}
