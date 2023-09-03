import Head from "next/head";
import styles from "./layout.module.css"
import utilsStyle from "../styles/utils.module.css"

const name = "Pave Up Blog";
export const siteTitle = "Pave Up Blog";

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.jpg" className={utilsStyle.borderCircle} />
        <h1 className={utilsStyle.heading2Xl}>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
