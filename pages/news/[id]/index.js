import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Nav from "../../../components/nav.js"
import Footer from "../../../components/footer.js"
import layoutStyles from '../../../styles/Home.module.css'
import articleStyles from "../../../styles/Article.module.css"

const News = () => {
    const router = useRouter();
    const {id} = router.query
    const pageId = id;
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';
    const [articleData, setArticleData] = useState((articleData) => {return null}); // by default there is no homepage data
    
    //generate an array of IDs
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
            setArticleData(res.data["allHomepages"])        
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <div className={layoutStyles.container}>
            <Head>
                {/* <title>YeakSa E-sports</title> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
                <NextSeo
                    title="News | YeakSa E-sports"
                    description="Professional esports organzation based in Phnom Penh, Cambodia."
                    keywords="csgo team cambodia, mlbb team cambodia, pubgm team cambodia, khmer esports organization, yeaksa gaming, yeaksa, yeaksa esports, yeaksa esports organization"
                />
            <Nav />
                
                <div className={layoutStyles.background}></div>

                <main className={layoutStyles.main}>
                    {articleData &&
                        articleData.map(data => {
                            if (data.content[0]["id"] == pageId) {
                                return (
                                    <article className={articleStyles.articleContainer}>
                                        <span style={{margin: 0, padding: 0, width: `100%`, marginBottom: `3.25vh`}}>
                                            <a 
                                                style={{display: `inline-block`, maxWidth: `max-content`}}
                                                href="/"
                                            >
                                                <h2 style={{margin: `0`}}>
                                                    &#8249; Back
                                                </h2>
                                            </a>
                                        </span>
                                        <div className={articleStyles.content}>
                                            <div>
                                                {data.content[1]["singlephoto"]["url"] ? 
                                                    <img 
                                                        src={data.content[1]["singlephoto"]["url"]}
                                                        alt={data.content[1]["singlephoto"]["alt"]}
                                                        style={{width: `400px`}}
                                                    ></img>                      
                                                : null}
                                            </div>
                                            <div>
                                                <span>
                                                    <h1>
                                                        {data.content[0]["heading"]}
                                                    </h1>
                                                    {data.content[0]["subheading"] ? 
                                                        <h2>{data.content[0]["subheading"]}</h2>                                        
                                                    : null}
                                                    {/* <p>{data.content[0]["date"]}</p> */}
                                                </span>
                                                <span>
                                                    {data.content[1]["text"] ?
                                                        <p>{data.content[1]["text"]}</p>
                                                    : null}
                                                    {data.content[1]["actionLink"] ? 
                                                        <a href={data.content[1]["actionLink"]} className={articleStyles.actionBtn}>
                                                            {data.content[1].actionText}
                                                        </a> 
                                                    : null}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                )
                        }
                    })}
                </main>

            <Footer />
        </div>
    )
}

export default News