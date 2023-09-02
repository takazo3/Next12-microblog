import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";


export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          アメリカのオンライン大学でコンピューターサイエンスを専攻しつつ、サイバーセキュリティを学び現役エンジニアをしています
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior><a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか</a></Link>
            <br />
            <small className={utilStyles.lightText}>date</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior><a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか</a></Link>
            <br />
            <small className={utilStyles.lightText}>date</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior><a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか</a></Link>
            <br />
            <small className={utilStyles.lightText}>date</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior><a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか</a></Link>
            <br />
            <small className={utilStyles.lightText}>date</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
