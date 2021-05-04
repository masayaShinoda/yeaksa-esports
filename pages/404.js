import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import homeData from "../components/content"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'

const News = () => {
    
    // const router = useRouter()
    // const {id} = router.query
    console.log(homeData)
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
                    <h1>Error 404</h1>
                    <p>Page not found</p>
                </main>

            <Footer />
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch('')
// }

export default News