import Head from 'next/head'
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'
import abaStyles from "../styles/Aba.module.css"

export default function Aba() {
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
                        <div style={{display: `flex`, gap: `2.5vmax`}}>
                            <img src="/icons/aba.jpg" alt="aba"/>
                            <span>
                                <h1>Transfer to:</h1>
                                <p>Eng Bonnarong</p>
                                <h2>002388759</h2>
                            </span>
                        </div>
                        <div style={{
                            display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`,
                            }}>
                            <h2 style={{margin: 0, marginBottom: `1.25vmax`}}>Please contact:</h2>
                            <a 
                                className={abaStyles.fbLink}
                                href="https://www.facebook.com/yeaksa.official/"
                                style={{display:`flex`, alignItems: `center`, justifyContent: `center`,
                                padding: `.025vmin 2.5vmax`, borderRadius: `2.5vmax`
                            }
                                }><img className={abaStyles.fb} src="/fb_result.png" alt="YeakSa FB"/>
                            <p style={{fontWeight: 600}}>Yeaksa.official</p>
                            </a>

                        </div>

                    </div>
                </main>

            <Footer />
        </div>
    )
}