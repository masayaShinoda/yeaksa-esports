import { useState, useEffect } from "react";
import Layout from "../components/layout"
import rosterStyles from "../styles/roster.module.css"

export default function rosterPubgm() {
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
                    allPubgms { 
                      firstname
                      ign
                      secondname
                      id
                      facebook
                      instagram
                      role
                      stream
                      } 
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setPlayerData(res.data["allPubgms"])
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <Layout pageName="PUBGM Roster">            
            <div className={rosterStyles.upperContent}>
                <a href="/members">
                    <h2 style={{margin: `0`}}>
                        &#8249; Back
                    </h2>
                </a>
                <p 
                    style={{margin: `0 auto`, fontSize: `2.25rem`, fontWeight: 700,}}
                >
                    PUBG Mobile
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
                            </span>
                        </div>
                    </div>
                    )
                    })
                }
            </div>
        </Layout>
    )
}