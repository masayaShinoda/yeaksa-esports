import styles from "../styles/Frontpage.module.css"
import Content from "./content"
export default function Frontpage() {
    return (
        <div className={styles.frontpageContainer}>
            <div className={styles.frontpage}>
                <h1 style={{marginBottom: 0}}>We're back!</h1>
                <p>Saying hello to the Cambodian E-sports scene, YeakSa is back prepared and up for the challenge.</p>                
                <a className={styles.actionBtn} href="/members">See Our Roster &#187;</a>
            </div>
            <iframe style={{marginTop: `2.5vmax`}} width="560" height="315" src="https://www.youtube-nocookie.com/embed/HNbO-oSpdjo?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   
            <Content />
        </div>

    )
}