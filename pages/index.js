import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YeakSa E-sports</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.background}></div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming soon
        </h1>

        <p className={styles.description}>
          Pioneers in Cambodian esports.
        </p>

        <span>
            <a href="https://www.facebook.com/yeaksa.official">
              <img src="/fb_result.png" alt="Facebook" className={styles.logo} style={{margin: `0 0.75vmax`}} />
            </a>
            <a href="https://www.instagram.com/yeaksa.esports/">
              <img src="/ig_result.png" alt="Instagram" className={styles.logo} style={{margin: `0 0.75vmax`}} />
            </a>
            <a href="https://www.youtube.com/channel/UCXeZPlbx0ncbnYijLtFkZgQ">
              <img src="/yt_result.png" alt="YouTube" className={styles.logo} style={{margin: `0 0.75vmax`}} />
            </a>
          </span>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer style={{marginBottom: `5vh`}}className={styles.footer}>
          <p style={{marginRight: `.5vmax`}}>
            Proudly sponsored by
          </p>
          <span>
            <a href="https://www.facebook.com/fansportstore">
              <img src="/sponsors/Logo-Fan-Sport-png - Copy.png" alt="Fan Sport" className={styles.logo} />
            </a>
            <a href="https://www.facebook.com/Good-Time-Hotel-Resort-Group-106046934410922">
              <img src="/sponsors/GoodTimeGroup_White_Logo.png" alt="Good Time Group" className={styles.logo} />
            </a>
            <a href="https://www.facebook.com/BEES-FC-111744477257357">
              <img src="/sponsors/bees-logo.png" alt="Bees FC" className={styles.logo} />
            </a>
          </span>
      </footer>
    </div>
  )
}
