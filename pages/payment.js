import Head from 'next/head'
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'
import abaStyles from "../styles/Aba.module.css"

export default function Payment() {
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
                    <div className={abaStyles.abaContainer}>

                    <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf8jxpED9dfeq9ADtAGss4rIv9oUtCmpqmIOeaVeS29PyTN3w/viewform?embedded=true" 
                    width="640" 
                    height="1390" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">Loading…</iframe>

                    </div>
                </main>

            <Footer />
        </div>
    )
}