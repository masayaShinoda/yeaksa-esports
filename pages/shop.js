import Head from 'next/head'
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'
import shopStyles from "../styles/Shop.module.css"
import Merch from "../components/merch.js"
import Memberships from "../components/memberships.js"

export default function Shop() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>YeakSa E-sports</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Nav />
                
                <div className={styles.background}></div>

                <main className={styles.main}>
                    <h1 id="memberships">Memberships</h1>
                    <div className={shopStyles.div2}>
                        <Memberships />
                    </div>
                    <h1 id="merchandise">Merchandise</h1>
                   <div className={shopStyles.div1}>
                        <Merch />
                    </div>
                </main>

            <Footer />
        </div>
    )
}