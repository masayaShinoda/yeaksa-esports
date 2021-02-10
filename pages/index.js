import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Nav from "../components/nav.js"
import Frontpage from "../components/frontpage.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'


export default function Homepage() {    
    
    return (
        <div className={styles.container}>
            <Head>
              <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
              <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
                <NextSeo
                    title="Home | YeakSa Esports"
                    description="Professional esports organzation based in Phnom Penh, Cambodia."
                    keywords="yeaksa team, team yeaksa, competitive gaming cambodia, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                />
             <Nav />
             
            <div className={styles.background}></div>

            <main className={styles.main}>
                <Frontpage />
            </main>

            <Footer />
        </div>
    )
}