import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How many fucks does Elon Musk give?</title>
      </Head>
      <h1 className={styles.zero}>ZERO</h1>
      <h1 className={styles.fucks}>FUCKS</h1>
    </div>
  );
}
