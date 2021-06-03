import { useState, useEffect } from "react";
import Layout from "../components/layout"
import DualPanel from "../components/dualPanel"
import rosterStyles from "../styles/roster.module.css"

export default function rosterValorant() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';

    const [playerData, setPlayerData] = useState((playerData) => {return null}) // by default there is no player data
    const [division, setDivision] = useState(null)

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
                    allValorants { 
                      firstname
                      ign
                      secondname
                      id
                      facebook
                      instagram
                      role
                      stream
                      profpic {
                          url
                      }
                      red
                      blue
                      coach
                    }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setPlayerData(res.data["allValorants"])
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <Layout pageName="Valorant Roster">
            <div className={rosterStyles.upperContent}>
                <a href="/members">
                    <h2 style={{margin: `0`}}>
                        &#8249; Back
                    </h2>
                </a>
                <p 
                    style={{margin: `0 auto`, fontSize: `2.25rem`, fontWeight: 700,}}
                >
                    Valorant
                </p>
            </div>
            <div className={rosterStyles.content} style={{marginTop: `1.25vmax`}}>
                <DualPanel>
                  <div className={rosterStyles.radioContainer}>
                        <label>
                            <input 
                                type="radio" 
                                checked={division === "red"}
                                value="red"
                                onChange={(e) => {setDivision(e.target.value)}}
                            />
                            <span>                                
                                <p>Team Red</p>
                            </span>   
                        </label>
                    </div>
                  <div className={rosterStyles.radioContainer}>
                        <label>
                            <input 
                                type="radio" 
                                checked={division === "blue"}
                                value="blue"
                                onChange={(e) => {setDivision(e.target.value)}}
                            />
                            <span>                                
                                <p>Team Blue</p>
                            </span>   
                        </label>
                    </div>
                </DualPanel>
                {playerData &&  
                    playerData.map(data => {
                        if (data.coach) {return null}
                        console.log(data[division])
                        if (data[division] === true) {
                            return (
                              <div className={rosterStyles.playerCard}>
                                <div className={rosterStyles.avatarContainer}>
                                {data.profpic ? 
                                    <img
                                        src={data.profpic.url}
                                        alt={data.ign} 
                                        className={rosterStyles.avatar}                            
                                    />
                                    : <img 
                                        src="/logo-with-bg.jpg" 
                                        style={{width: `15vmax`}}
                                        className={rosterStyles.avatar}
                                    />}
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
                                        {data.instagram ? <p>Instagram:</p> : <p></p>}
                                        <p>{data.instagram}</p>
                                        {data.facebook ? <p>Facebook:</p> : <p></p>}
                                        <p>{data.facebook}</p>
                                    </span>
                                </div>
                             </div>
                            )
                        }
                    })
                }
                {/* coach only */}
                {playerData &&  
                    playerData.map(data => {
                        if (data.coach) {
                            return (
                              <div className={rosterStyles.playerCard}>
                                <div className={rosterStyles.avatarContainer}>
                                {data.profpic ? 
                                    <img
                                        src={data.profpic.url}
                                        alt={data.ign} 
                                        className={rosterStyles.avatar}                            
                                    />
                                    : <img 
                                        src="/logo-with-bg.jpg" 
                                        style={{width: `15vmax`}}
                                        className={rosterStyles.avatar}
                                    />}
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
                                        {data.instagram ? <p>Instagram:</p> : <p></p>}
                                        <p>{data.instagram}</p>
                                        {data.facebook ? <p>Facebook:</p> : <p></p>}
                                        <p>{data.facebook}</p>
                                    </span>
                                </div>
                             </div>
                            )
                            
                        }
                    })
                }
                {/* coach only end */}
            </div>
        </Layout>
    )
}