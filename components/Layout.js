import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyle from "../styles/utils.module.css";
import Link from "next/link";

const name = "Pave Up Blog";
export const siteTitle = "Pave Up Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${utilsStyle.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilsStyle.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.jpg"
              className={utilsStyle.borderCircle}
            />
            <h1 className={utilsStyle.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <button>
            <Link href="/">← ホームへ戻る</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Layout;
