import styles from "../styles/dualPanel.module.css"

export default function DualPanel({ children }) {
    return (
        <div className={styles.dualPanelContainer}> 

            <div className={styles.panelContent}>
                {children}
            </div>
        </div>
    )
}