import { useState, useEffect } from "react";
import shopStyles from "../styles/Shop.module.css"

export default function Merch() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';
    const [merchData, setMerchData] = useState((merchData) => {return null}); // by default there is no player data

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
                    allMerchandises {
                        id
                        itemName
                        price
                        details
                        category
                        instock
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
            setMerchData(res.data["allMerchandises"])
            console.log(res.data["allMerchandises"])   
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <>
            {merchData &&
                merchData.map(data => 
                    {
                        if(data.instock) {
                            return (
                                <div className={shopStyles.itemBox}>
                                    <img src={data.displayImg.url} alt={data.displayImg.alt}/>
                                    <h1 className={shopStyles.itemName}>{data.itemName}</h1>
                                    <p className={shopStyles.details}>{data.details}</p>
                                    <span style={{display: `flex`, alignItems: `center`, gap: `1.25vmax`}}>
                                        <p className={shopStyles.price}>{data.price}</p>
                                        <span className={shopStyles.buyBtn}>
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8jxpED9dfeq9ADtAGss4rIv9oUtCmpqmIOeaVeS29PyTN3w/viewform?usp=sf_link">
                                                {/* <img className={shopStyles.icon} src="/icons/aba.jpg" alt=""/> */}
                                                <h2>Buy</h2>
                                            </a>
                                        </span>

                                    </span>
                                </div>
                            )
                    }
                })
            }        
        </>
    )
}