import { useState, useEffect } from "react";
import timelineStyles from "../styles/Timeline.module.css"
import TimelineAccordion from "./timelineAccordion"

export default function Timeline() {
    const token = '7d75f2d5a1e12e28d4ee89f229cdc5';

    const [timelineData, setTimelineData] = useState((timelineData) => {return null}); // by default there is no data

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
                    allAchievements(orderBy: date_ASC) {
                        id
                        date
                        achievementName
                        achievementDescription
                        left
                        right
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setTimelineData(res.data["allAchievements"])
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    console.log(timelineData)


    return (
        <TimelineAccordion>
            <ul className={timelineStyles.timeline}>
                <li>
                    <div className={timelineStyles.direction_l}>
                        <div className={timelineStyles.flag_wrapper}>
                            <span className={timelineStyles.flag}>
                                Startup
                            </span>
                            <span className={timelineStyles.time_wrapper}>
                                <span className={timelineStyles.time}>
                                    January 2021
                                </span>
                            </span>
                        </div>
                        <div className={timelineStyles.desc}>
                            Yeaksa was formerly a local CS:GO team in 2020. Then we became an esports organization.
                        </div>
                    </div>
                </li>       
            <li>
                    <div className={timelineStyles.direction_r}>
                        <div className={timelineStyles.flag_wrapper}>
                            <span className={timelineStyles.flag}>
                                1k likes
                            </span>
                            <span className={timelineStyles.time_wrapper}>
                                <span className={timelineStyles.time}>
                                    February 2021
                                </span>
                            </span>
                        </div>
                        <div className={timelineStyles.desc}>
                            Our first social media milestone.
                        </div>
                    </div>
                </li>

            {timelineData && 
                    timelineData.map(data => {
                        if(data.left) {
                            return (
                            <li>
                                <div className={timelineStyles.direction_l}>
                                    <div className={timelineStyles.flag_wrapper}>
                                        <span className={timelineStyles.flag}>
                                            {data.achievementName}
                                        </span>
                                        <span className={timelineStyles.time_wrapper}>
                                            <span className={timelineStyles.time}>
                                                {data.date}
                                            </span>
                                        </span>
                                    </div>
                                    <div className={timelineStyles.desc}>
                                        {data.achievementDescription}                                        
                                    </div>
                                </div>
                            </li>
                            )
                        }
                        if(data.right) {
                            return (
                            <li>
                                <div className={timelineStyles.direction_r}>
                                    <div className={timelineStyles.flag_wrapper}>
                                        <span className={timelineStyles.flag}>
                                            {data.achievementName}
                                        </span>
                                        <span className={timelineStyles.time_wrapper}>
                                            <span className={timelineStyles.time}>
                                                {data.date}
                                            </span>
                                        </span>
                                    </div>
                                    <div className={timelineStyles.desc}>
                                        {data.achievementDescription}
                                    </div>
                                </div>
                            </li>
                            )
                        }
                    })
                }
         

            


            
            </ul>
        </TimelineAccordion>

    )
}