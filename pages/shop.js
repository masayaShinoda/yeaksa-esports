import Layout from "../components/layout"
import shopStyles from "../styles/Shop.module.css"
import Merch from "../components/merch.js"
import Memberships from "../components/memberships.js"

export default function Shop() {
    
    return (
        <Layout pageName="Shop">
            {/* <h1 id="memberships">Memberships</h1>
            <div className={shopStyles.div2}>
                <Memberships />
            </div> */}
            <h1 id="merchandise">Merchandise</h1>
            <div className={shopStyles.div1}>
                <Merch />
            </div>            
        </Layout>
    )
}