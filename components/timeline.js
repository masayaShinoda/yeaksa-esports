import timelineStyles from "../styles/Timeline.module.css"
import TimelineAccordion from "./timelineAccordion"

export default function Timeline() {
    
    return (
        <TimelineAccordion>
            <ul className={timelineStyles.timeline}>
                {/* <!-- Item 1 --> */}
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
            
                {/* <!-- Item 2 --> */}
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
            
            </ul>
        </TimelineAccordion>

    )
}