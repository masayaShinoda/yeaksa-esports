import styles from "../styles/footer.module.css"

export default function Footer() {
    return (        
      <footer className={styles.footer}>
          <span>
              <div className={styles.sponsorsContainer}>
                <p>
                    Proudly sponsored by
                </p>
                <div style={{display: `flex`}}>
                  <a href="https://www.facebook.com/fansportstore">
                  <img src="/sponsors/Logo-Fan-Sport-png - Copy.png" alt="Fan Sport" className={styles.sponsorLogo} />
                  </a>
                  <a href="https://www.facebook.com/Good-Time-Hotel-Resort-Group-106046934410922">
                  <img src="/sponsors/GoodTimeGroup_White_Logo.png" alt="Good Time Group" className={styles.sponsorLogo} />
                  </a>
                  <a href="https://www.facebook.com/BEES-FC-111744477257357">
                  <img src="/sponsors/bees-logo.png" alt="Bees FC" className={styles.sponsorLogo} />
                  </a>
                </div>
              </div>

          </span>
          <span className={styles.copyrightContainer}>
           <p>Copyright &#169; 2021</p>
           <p>YeakSa Organization</p>
          </span>
    </footer>
    )
}