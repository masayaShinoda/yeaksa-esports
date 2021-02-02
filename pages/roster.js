import Head from 'next/head'
import { NextSeo } from "next-seo"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'


export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                {/* <title>YeakSa E-sports</title> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
                <NextSeo
                    title="Roster | YeakSa E-sports"
                    description="Professional esports organzation based in Phnom Penh, Cambodia."
                    keywords="csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                />
            <Nav />
                
                <div className={styles.background}></div>

                <main className={styles.main}>
                    <h1>Roster</h1>
                    <div className={styles.grid}>
                        <a 
                            href="/roster-csgo"
                            className={styles.card} 
                            style={{
                                background: `url('/images/csgo-bg.jpg')`,
                                backgroundSize: `cover`,
                            }}
                        >
                            <h3>CS:GO</h3>
                            {/* <p>Find in-depth information about Next.js features and API.</p> */}
                        </a>
                        <a 
                            href="/roster-mlbb" 
                            className={styles.card}
                            style={{
                                background: `url('/images/mobilelegends.jpg')`,
                                backgroundSize: `cover`,
                            }}
                        >
                            <h3>Mobile Legends</h3>
                            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
                        </a>
                        <a
                            href="/roster-pubg-mobile"
                            className={styles.card}
                            style={{
                                background: `url('/images/pubg.jpg')`,
                                backgroundSize: `cover`,
                            }}
                        >
                            <h3>PUBG Mobile</h3>
                            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
                        </a>
                        {/* <a
                            href="/roster-wildrift"
                            className={styles.card}
                            style={{
                                background: `url('/images/wildrift.jpg')`,
                                backgroundSize: `cover`,
                            }}
                        >
                            <h3>Wild Rift</h3>
                        </a> */}
                    </div>
                </main>

            <Footer />
        </div>
    )
}