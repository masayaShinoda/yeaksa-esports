import Layout from "../components/layout"

import { useState, useEffect } from "react";
import playerContractStyles from "../styles/playerContract.module.css"
import { StructuredText } from 'react-datocms';

export default function PlayerContract() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';

    const [playerContractData, setPlayerContractData] = useState((playerContractData) => {return null}); // by default there is no contract data

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
                    allPlayerContracts {
                        id
                        contractEnglish {
                          value
                        }
                        contractKhmer {
                          value
                        }
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setPlayerContractData(res.data["allPlayerContracts"][0])
            console.log(playerContractData)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <Layout pageName="Player Contract">
            <div className={playerContractStyles.playerContractContainer}>
                <h1>YeakSa Esports Player Contract</h1>
                <span className={playerContractStyles.englishContract}>
                    {playerContractData && 
                        <StructuredText data={playerContractData.contractEnglish} />                        
                    }
                </span>
            </div>
        </Layout>
    )
}