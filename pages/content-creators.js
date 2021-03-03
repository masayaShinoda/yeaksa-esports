import { useState, useEffect } from "react";
import Head from 'next/head'
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import styles from '../styles/Home.module.css'
import rosterStyles from "../styles/roster.module.css"

export default function rosterCsgo() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';

    const [playerData, setPlayerData] = useState((playerData) => {return null}); // by default there is no player data

    
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
                    allContentCreators { 
                        id
                        ign
                        instagram
                        role
                        secondname
                        streamLink
                        createdAt
                        facebook
                        firstname
                      } 
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setPlayerData(res.data["allContentCreators"])
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    console.log(playerData)
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

        <main className={styles.main} style={{justifyContent: `flex-start`}}>
            <div className={rosterStyles.upperContent}>
                <a href="/members">
                    <h2 style={{margin: `0`}}>
                        &#8249; Back
                    </h2>
                </a>
                <p 
                    style={{margin: `0`, fontSize: `2.25rem`, fontWeight: 700,}}
                >
                    Content Creators
                </p>
            </div>
            <div className={rosterStyles.content} style={{marginTop: `1.25vmax`}}>
                {playerData &&
                    playerData.map(data => {
                    return (
                        <div className={rosterStyles.playerCard}>
                        <div>
                            <img 
                                src="/logo-with-bg.jpg" 
                                style={{width: `15vmax`}}
                                className={rosterStyles.avatar}
                            />
                        </div>
                        <div className={rosterStyles.info}>
                            <span style={{display: `flex`}}>
                                <h1>{data.firstname}</h1>
                                <h1 style={{
                                    marginLeft: `1.25vmax`,
                                    marginRight: `1.25vmax`
                                    }}>
                                    "{data.ign}"
                                </h1>
                                <h1>{data.secondname}</h1>
                            </span>
                            <h2>{data.role}</h2>
                            <span className={rosterStyles.social}>
                                {data.instagram ? <p>Instagram:</p> : null}
                                <b><p>{data.instagram}</p></b>
                                {data.facebook ? <p>Facebook:</p> : null}
                                <b><p>{data.facebook}</p></b>
                                {data.streamLink ? <b><a href={data.streamLink}><p>Stream Link</p></a></b> : null}
                                
                            </span>
                        </div>
                    </div>
                    )
                    })
                }                
                




            </div>
        </main>

        <Footer />
    </div>
    )
}