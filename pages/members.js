import Layout from "../components/layout"
import styles from "../styles/Home.module.css"

export default function Members() {
    return (
        <Layout pageName="Members">
            <h1>Members</h1>
            <div className={styles.hexagonsContainer}>
                <div className={styles.hexagonWrapper}>
                    <a href="/roster-csgo" className={styles.hexagon}>
                        <img src="/roster-icon/roster-hexagon-icon-csgo.png"></img>
                        {/* <i className={styles.fab fa-facebook}></i> */}
                    </a>
                </div>
                <div className={styles.hexagonWrapper}>
                    <a href="/roster-valorant" className={styles.hexagon}>
                    <img src="/roster-icon/roster-hexagon-icon-val.png"></img>
                        {/* <i className={styles.fab fa-instagram}></i> */}
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
                <div className={styles.hexagonWrapper}>
                    <a href="/content-creators" className={styles.hexagon}>
                    <img src="/roster-icon/roster-hexagon-icon-staff.png"></img>
                        {/* <i className={styles.fab fa-instagram}></i> */}
                    </a>
                </div>
            </div>
        </Layout>
    )
}