import { useState, useEffect } from "react";
import shopStyles from "../styles/Shop.module.css"

export default function Memberships() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';
    const [membershipData, setMembershipData] = useState((membershipData) => {return null}); // by default there is no player data

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
                    allMemberships {
                        id
                        itemName
                        price
                        details
                        displayImg {
                            url
                            alt
                          }
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setMembershipData(res.data["allMemberships"])
            console.log(res.data["allMemberships"])   
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])




    return (
        <>
            {membershipData &&
                membershipData.map(data => {
                    return (
                        <div className={shopStyles.itemBox}>
                            <img src={data.displayImg.url} alt={data.displayImg.alt}/>
                            <h1 className={shopStyles.itemName}>{data.itemName}</h1>
                            <p className={shopStyles.details}>{data.details}</p>
                            <span style={{display: `flex`, alignItems: `center`, gap: `1.25vmax`}}>
                                <p className={shopStyles.price}>{data.price}</p>
                                <span className={shopStyles.buyBtn}>
                                    <a href="/aba">
                                        <img className={shopStyles.icon} src="/icons/aba.jpg" alt=""/>
                                        <h2>Buy</h2>
                                    </a>
                                </span>

                            </span>

                        </div>
                    )
                })
            }        
        </>
    )
}