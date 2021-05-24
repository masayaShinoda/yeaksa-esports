import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import aboutStyles from "../styles/About.module.css"

export default function About() {
    return (
        <Layout pageName="About Us">
            <div className={aboutStyles.aboutContainer}>
                
                <div className={aboutStyles.div1}>
                    <h1>
                        About us
                    </h1>
                    <p>
                        YeakSa Esports Organization<sup>&#169;</sup> is composed of competitive gaming teams in Cambodia competing in popular Esports titles. Originally founded in 2019 with three original members, we have since grown to become a model for competitive Esports Teams in Cambodia with our distinguished tournament participations, and high-quality production during each and every one of our events.
                    </p>
                </div>
                <div className={aboutStyles.div2}>
                    <h1>
                        Our partners
                    </h1>
                    <div className={aboutStyles.sponsorLogosContainer}>
                        <a href="https://www.facebook.com/fansportstore">
                            <img src="/sponsors/Logo-Fan-Sport-png - Copy.png" alt="Fan Sport" className={styles.logo} />
                        </a>
                        <a href="https://www.facebook.com/Good-Time-Hotel-Resort-Group-106046934410922">
                            <img src="/sponsors/GoodTimeGroup_Gold_Logo_result_result_result.png" alt="Good Time Group" className={styles.logo} />
                        </a>
                        <a href="https://www.facebook.com/BEES-FC-111744477257357">
                            <img src="/sponsors/bees-logo.png" alt="Bees FC" className={styles.logo} />
                        </a>
                    </div>
                </div>
                <div className={aboutStyles.div3}>
                    <h1>Contact Us</h1>
                    <a 
                        href="mailto:yeaksa.official@gmail.com"
                        >
                        yeaksa.official@gmail.com    
                    </a>
                    <span className={aboutStyles.details}>
                        <p><b>Management:</b> Bonna Rong, Dekin</p>
                        <p><b>Digital Marketing:</b> Dekin, Masaya</p>
                        <p><b>Developer:</b> Masaya</p>
                    </span>
                </div>
                <div className={aboutStyles.div4}>
                    <h1>Social Media</h1>
                    <span>
                        <a 
                            href="https://www.facebook.com/yeaksa.official"
                            style={{display: `flex`, alignItems: `center`}}
                            >
                            <img src="./fb-clear.png" alt="Facebook" />
                            <p>yeaksa.esports</p>
                        </a>
                        <a 
                            href="https://www.instagram.com/yeaksa.esports/"
                            style={{display: `flex`, alignItems: `center`}}
                        >
                            <img src="./ig-clear.png" alt="Instagram" />
                            <p>@yeaksa.official</p>
                        </a>
                    </span>
                </div>

            </div>
        </Layout>
    )
}