import Head from 'next/head'
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'
import abaStyles from "../styles/Aba.module.css"

export default function jerseyForm() {
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
                    <h1>Purchase Jersey</h1>

                    <div className={abaStyles.abaContainer}>
                        <div className={abaStyles.div1} style={{display: `flex`, gap: `2.5vmax`}}>
                            <div style={{display: `flex`, alignItems: `center`, gap: `2.5vmin`}}>
                                <img src="/icons/aba.jpg" alt="aba"/>
                                <span>
                                    <h2>Transfer to:</h2>
                                    <p>Eng Bonnarong</p>
                                    <h2>002388759</h2>
                                </span>
                            </div>
                            <div style={{
                            display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`,
                            }}>
                                <h2 style={{margin: 0, marginBottom: `1.25vmax`}}>Please send receipt to:</h2>
                                <a 
                                    className={abaStyles.fbLink}
                                    href="https://www.facebook.com/yeaksa.official/"
                                    style={{display:`flex`, alignItems: `center`, justifyContent: `center`,
                                }
                                    }><img className={abaStyles.fb} src="/fb_result.png" alt="YeakSa FB"/>
                                <p style={{fontWeight: 600}}>Yeaksa.official</p>
                                </a>
                            </div>
                        </div>


                    </div>
                        <div className={abaStyles.formContainer}>
                            
                            <form action="https://formspree.io/f/mqkgnnbz" method="POST">
                            {/* <label>
                                Your email
                                <input type="text" name="_replyto" />
                            </label>  */}
                                <label>
                                    Your Messenger/Instagram
                                    <input type="text" />
                                </label> 
                                <label>
                                    Name on Jersey
                                    <input type="text" />
                                </label> 
                                <div style={{display: `flex`, gap: `1.25vmax`}}>
                                    <label>
                                        Size
                                        <select name="sizes" id="sizes" style={{maxWidth: `max-content`}}>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </label>
                                    <label>
                                        Mobile Number
                                        <input type="tel" />
                                        
                                    </label>
                                    </div>       
                                    <button type="submit">Send</button>
                            </form>
                        </div>
                    
                </main>

            <Footer />
        </div>
    )
}