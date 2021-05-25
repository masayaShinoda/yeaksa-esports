import timelineStyles from "../styles/Timeline.module.css"

export default function Timeline() {
    
    return (
        <ul class={timelineStyles.timeline}>
            {/* <!-- Item 1 --> */}
            <li>
                <div class={timelineStyles.direction_r}>
                    <div class={timelineStyles.flag_wrapper}>
                        <span class={timelineStyles.flag}>
                            1k likes
                        </span>
                        <span class={timelineStyles.time_wrapper}>
                            <span class={timelineStyles.time}>
                                February 2021
                            </span>
                        </span>
                    </div>
                    <div class={timelineStyles.desc}>
                        Our first social media milestone.
                    </div>
                </div>
            </li>
        
            {/* <!-- Item 2 --> */}
            <li>
               <div class={timelineStyles.direction_l}>
                    <div class={timelineStyles.flag_wrapper}>
                        <span class={timelineStyles.flag}>
                            Startup
                        </span>
                        <span class={timelineStyles.time_wrapper}>
                            <span class={timelineStyles.time}>
                                January 2021
                            </span>
                        </span>
                    </div>
                    <div class={timelineStyles.desc}>
                        Yeaksa was formerly a local CS:GO team in 2020. Then we became an esports organization.
                    </div>
                </div>
            </li>
        
        </ul>
    )
}