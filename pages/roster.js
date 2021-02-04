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
                    <div className={styles.hexagonsContainer}>
                        <div className={styles.hexagonWrapper}>
                            <a href="/roster-csgo" className={styles.hexagon}>
                                <img src="/roster-icon/roster-hexagon-icon-csgo.png"></img>
                                {/* <i className={styles.fab fa-facebook}></i> */}
                            </a>
                        </div>
                        <div className={styles.hexagonWrapper}>
                            <a href="/roster-mlbb" className={styles.hexagon}>
                            <img src="/roster-icon/roster-hexagon-icon-mlbb.png"></img>

                                {/* <i className={styles.fab fa-twitter}></i> */}
                            </a>
                        </div>
                        <div className={styles.hexagonWrapper}>
                            <a href="/roster-pubg-mobile" className={styles.hexagon}>
                            <img src="/roster-icon/roster-hexagon-icon-pubgm.png"></img>
                                {/* <i className={styles.fab fa-instagram}></i> */}
                            </a>
                        </div>
                    </div>
                </main>

            <Footer />
        </div>
    )
}