import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>myApp | Home</title>
        <meta name="keywords" content="myApp" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum, vero
          inventore ex maiores consequatur neque nesciunt autem omnis mollitia
          impedit consectetur officiis soluta obcaecati rerum aut molestias
          aspernatur. Excepturi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum, vero
          inventore ex maiores consequatur neque nesciunt autem omnis mollitia
          impedit consectetur officiis soluta obcaecati rerum aut molestias
          aspernatur. Excepturi!
        </p>
        <Link href="/contacts">
          <a className={styles.btn}>See Contacts</a>
        </Link>
      </div>
    </>
  );
}
