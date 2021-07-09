import Layout from "../components/layout"
import TourRulesAccordion from "../components/tourRulesAccordion"

export default function TournamentRules() {
    
    return (
        <Layout pageName="Tournament Rules">
            {/* <h1 id="memberships">Memberships</h1>
            <div className={shopStyles.div2}>
                <Memberships />
            </div> */}
            <h1 id="merchandise">Rules</h1>
            <TourRulesAccordion />
            
        </Layout>
    )
}