import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player"
import contentStyles from "../styles/content.module.css"

const Content = () => {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';
    const [homeData, setHomeData] = useState((homeData) => {return null}); // by default there is no homepage data

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
                    allHomepages {
                        content {
                          ... on HeadingRecord {
                            id
                            heading
                            subheading
                            date
                          }
                          ... on BodyRecord {
                            id
                            text
                            singlephoto {
                              url
                              alt
                            }
                            video {
                              url
                            }
                            actionLink
                            actionText
                          }
                        }
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setHomeData(res.data["allHomepages"])
            console.log(res.data["allHomepages"])
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <article className={contentStyles.contentContainer}>
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
            {homeData &&
                homeData.map(data => {
                    return (
                        <>
                            <div className={contentStyles.div1}>
                                <Link href={`/news/${data.content[0].id}`}>
                                    <h1 style={{cursor: `pointer`}} >{data.content[0].heading}</h1>
                                </Link>
                                {data.content[0].subheading ? <h2>{data.content[0].subheading}</h2> : null}
                            </div>
                            <div className={contentStyles.div2}>                            
                                {data.content[1].singlephoto ? <img src={data.content[1].singlephoto.url} alt={data.content[1].singlephoto.url} /> : null}

                                {data.content[1].video ? 
                                   <ReactPlayer url={data.content[1].video.url} />                                    
                                : null}
                                <span>
                                    {data.content[1].text ? 
                                        <>
                                            <p>{data.content[1].text}</p>
                                            <Link 
                                                href={`/news/${data.content[0].id}`} 
                                                style={{maxWidth: `max-content`, fontWeight: `700`}}
                                            >
                                                Read more
                                            </Link>
                                        </>
                                    : null}
                                    {data.content[1].actionLink ? 
                                    <Link href={data.content[1].actionLink} className={contentStyles.actionBtn}>
                                        {data.content[1].actionText}
                                    </Link> : null}
                                    
                                </span>
                                
                            </div>

                        </>
                    )
                })
            }
        </article>
    )
}
export default Content;