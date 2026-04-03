'use client';

import Head from 'next/head';
import styles from './ProfilePage.module.css';
import {
  BioSection,
  CareerSection,
  OutlookSection,
  PageToc,
  PortfolioSection,
  TechBlogSection,
  TechStackSection,
} from './sections';

export const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>プロフィール</title>
        <meta
          name="description"
          content="日笠泰彰の公式プロフィールWiki。略歴・Rails・Next.js による開発、開発実績・出版を一次情報として掲載。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="プロフィール" />
        <meta
          property="og:description"
          content="公式プロフィールWiki。略歴・活動・実績を一次情報として掲載します。"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="日笠泰彰 Wiki | 公式プロフィール" />
        <meta
          name="twitter:description"
          content="公式プロフィールWiki。略歴・活動・実績を一次情報として掲載します。"
        />
      </Head>

      <div className={styles.page}>
        <div className={styles.shell}>
          <article className={styles.docPaper}>
            <header className={styles.docHeader}>
              <p className={styles.badge}>Official profile wiki</p>
              <h1 className={styles.title}>プロフィール Wiki</h1>
              <p className={styles.lead}>
                本ページは、私の経歴・活動・リンクを明示する目的で運営しています。皆様が、信頼できる要約にアクセスできるよう構成しています。
              </p>
            </header>

            <div className={styles.docBody}>
              <PageToc />
              <BioSection />
              <TechStackSection />
              <CareerSection />
              <PortfolioSection />
              <TechBlogSection />
              <OutlookSection />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
