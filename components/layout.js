import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Nav from "./nav.js"
import Footer from "./footer"
import styles from '../styles/Home.module.css'

export default function Layout({ children, pageName }) {
    
    return (
        <div className={styles.container}>
            <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            {pageName ? 
                <NextSeo 
                    title={`${pageName} | YeakSa Esports`}
                    description="Professional esports organzation based in Phnom Penh, Cambodia."
                    keywords="yeaksa team, team yeaksa, competitive gaming cambodia, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                /> 
                :   <NextSeo 
                        title="YeakSa Esports"
                        description="Professional esports organzation based in Phnom Penh, Cambodia."
                        keywords="yeaksa team, team yeaksa, competitive gaming cambodia, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                    /> 
            }

            <Nav />
            <div className={styles.background}></div>
            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}