import accordionStyles from "../styles/Accordion.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function TourRulesAccordion() {
    return (
        <div className={accordionStyles.accordion}>
             <a href="/[KH]Rules_YeakSa_Summer_Cup_2021.pdf" download style={{display: `inline-flex`, alignItems: `center`}}>
                <FontAwesomeIcon icon={faDownload} title="Lights off" style={{width: `1.25rem`, maxWidth: `1.25rem`, maxHeight: `1.25rem`}} />
                <p style={{margin: `0 auto`, margin: `0 .5rem`, lineHeight: 1.24}}>ច្បាប់នៃការប្រកួត</p>
                <img src="/icons/kh-flag128.png" alt="KH" style={{height: `.8rem`}} />
            </a>
            {/* <div className={accordionStyles.row}>
                <div className={accordionStyles.col}>
                    <h2>Open <b>multiple</b></h2>
                    <div className={accordionStyles.tabs}>
                    <div className={accordionStyles.tab}>
                        <input type="checkbox" id="chck1" />
                        <label className={accordionStyles.tabLabel} for="chck1">Item 1</label>
                        <div className={accordionStyles.tabContent}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                        </div>
                    </div>
                    <div className={accordionStyles.tab}>
                        <input type="checkbox" id="chck2" />
                        <label className={accordionStyles.tabLabel} for="chck2">Item 2</label>
                        <div className={accordionStyles.tabContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                        </div>
                    </div>
                    </div>
                </div>
                <div className={accordionStyles.col}>
                    {/* <h2>Rules</h2> */}
                    {/* <div className={accordionStyles.tabs}>
                    <div className={accordionStyles.tab}>
                        <input type="radio" id="rd1" name="rd" />
                        <label className={accordionStyles.tabLabel} for="rd1">	&#127472; &#127469;</label>
                        <div className={accordionStyles.tabContent}>
                            <p>
                            <ul>
                                - ការប្រកួតនេះគឺជាការប្រកួតតាមអនឡាញដោយបិទហេរ៉ូចំនួន ៣។ 
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div className={accordionStyles.tab}>
                        <input type="radio" id="rd2" name="rd" />
                        <label className={accordionStyles.tabLabel} for="rd2">Item 2</label>
                        <div className={accordionStyles.tabContent}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                        </div>
                    </div>
                    <div className={accordionStyles.tab}>
                        <input type="radio" id="rd3" name="rd" />
                        <label for="rd3" className={accordionStyles.tabClose}>&times;</label>
                    </div>
                    </div>
                </div> 
            </div> */}
        </div>
    )
}