import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import timelineAccordionStyles from "../styles/timelineAccordion.module.css"

export default function TimelineAccordion({ children }) {
    const [accordionArrow, setAccordionArrow] = useState(0)

    function handleAccordion() {
        setAccordionArrow(!accordionArrow)
    }
    
    return (
        <div className={timelineAccordionStyles.accordionContainer}>
            <button onClick={() => handleAccordion()}>
                <span>
                    <h2>Timeline</h2>
                    <FontAwesomeIcon icon={accordionArrow ? faAngleUp : faAngleDown} title="Lights off" style={{width: `1.25rem`, maxWidth: `1.25rem`, maxHeight: `1.25rem`}} />
                </span>
            </button>
            <div className={timelineAccordionStyles.accordionContent}>
                {accordionArrow ? children
                : null}
            </div>
        </div>
    )
}