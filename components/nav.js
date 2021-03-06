import { useState, useEffect } from "react";
import Link from "next/link"
import styles from "../styles/nav.module.css"

export default function Nav({ goDarkBtn }) {
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
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';
    const [liveData, setLiveData] = useState({}); // by default there is no live data

    useEffect(() => {
        fetch(
            'https://graphql.datocms.com/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({
                query: `{ 
                    allLives {
                        liveStatus
                        link
                        id
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setLiveData(res.data.allLives[0])            
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
        
    
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
            <div className={styles.navContainer + ` navContainer`} id="nav">            
                <Link className={styles.logoBtn} href="/">
                    <img className={styles.logo} src="/256w/logo-256.png" alt="Logo" />
                    {/* <img className={styles.logo} src="/428w/yeaksa-monochrome-06_result.png" alt="Logo" /> */}
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/members">Members</Link>
                    {/* <span className={styles.navDropDown}>
                        <a style={{display: `inline-block`}} href="/members">Members</a>
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
                            <li>
                                <a href="/content-creators">Content Creators</a>                            
                            </li>
                        </ul>
                    </span> */}
                    <Link href="/shop">Shop</Link>    
                    <Link href="/about">About</Link>
                    {liveData.liveStatus &&
                    <Link href={liveData.link}>Live &#128308;</Link> 
                    }
                    {goDarkBtn}
                </nav>
            </div>
        </div>
    )
}