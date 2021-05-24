import { NextSeo } from 'next-seo';
import { useState, useEffect } from "react";
import Head from 'next/head';
import Nav from "./nav.js"
import Footer from "./footer"
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export default function Layout({ children, pageName }) {
    const [isDarkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        if (isBrowser) {    
            const darkmodeStatus = localStorage.getItem("darkmode")
            if (darkmodeStatus === "dark") {
                setDarkMode(true)        
            } else {
                setDarkMode(false)                
            }
        }
    }, [])

    useEffect(() => {       

        if(isDarkMode) {
            document.getElementById("container").classList.add("dark")
            localStorage.setItem("darkmode", "dark")
            // setDarkMode(true)//
        } else {
            document.getElementById("container").classList.remove("dark")
            localStorage.setItem("darkmode", "light")
            // setDarkMode(false)
        }
        // localStorage.setItem("darkmode", isDarkMode)

    }, [isDarkMode])


    const goDarkBtn = <button onClick={() => {setDarkMode(!isDarkMode)}} className="goDarkBtn">
                        <FontAwesomeIcon icon={faMoon} title="Lights off" style={{width: `1em`, maxWidth: `1em`}} />
                        <FontAwesomeIcon icon={faLightbulb} title="Lights on" style={{width: `1em`, maxWidth: `1em`}} />
                      </button>
                          
    return (
        <div className={styles.container} id="container">
            <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            {pageName ? 
                <NextSeo 
                    title={`${pageName} | YeakSa Esports`}
                    description="Professional esports organzation based in Phnom Penh, Cambodia."
                    keywords="yeaksa team, team yeaksa, competitive gaming cambodia, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                /> 
                :   <NextSeo 
                        title="YeakSa Esports"
                        description="Professional esports organzation based in Phnom Penh, Cambodia."
                        keywords="yeaksa team, team yeaksa, competitive gaming cambodia, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                    /> 
            }

            <Nav />
            <div className={styles.background}></div>
            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}