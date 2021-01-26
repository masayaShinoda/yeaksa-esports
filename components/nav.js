import styles from "../styles/nav.module.css"

export default function Nav() {
    function openNav() {
        document.getElementById("nav").style.display = "flex"
        document.getElementById("openNavBtn").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "block"        
    }
    function closeNav() {
        document.getElementById("nav").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "none"
        document.getElementById("openNavBtn").style.display = "block"
    }

    return (
        <div className={styles.navParent}>
            <button id="openNavBtn" onClick={openNav} className={styles.openNavBtn}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button id="closeNavBtn" onClick={closeNav} className={styles.closeNavBtn} style={{display: `none`}}>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </button>
        <div className={styles.navContainer} id="nav">            
            <a className={styles.logoBtn} href="/">
                <img className={styles.logo} src="/256w/logo-256.png" alt="Logo" />
            </a>
            <nav>
                <a href="/">Home</a>
                <span className={styles.navDropDown}>
                    <a href="/roster">Roster</a>
                    <ul className={styles.dropDown}>
                        <li>
                            <a href="/roster-csgo">CS:GO</a>                            
                        </li>
                        <li>
                            <a href="/roster-pubg-mobile">PUBG Mobile</a>                            
                        </li>
                        <li>
                            <a href="/roster-mlbb">Mobile Legends</a>                            
                        </li>
                        {/* <li>
                            <a href="/">Wild Rift</a>                            
                        </li>                         */}
                    </ul>
                </span>
                <a href="/shop">Shop</a>    
                {/* <a href="/">Partners</a> */}
                <a href="/about">About</a>
                <a href="/">Live &nbsp;&#11044;</a>
                              {/* if live then  &#128308; */}
            </nav>
        </div>
        </div>
    )
}