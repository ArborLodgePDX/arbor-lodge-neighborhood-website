import React from 'react'
import styles from "../../styles/MainLayout.module.css";


const LandUse = () => {
  return (
    <div className={styles.landUseMargin}>
      <h2>Recent Land Use Updates</h2>
      <div className={styles.landUseTable}>
        <iframe width='100%' height='100%' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTF2-aPnzD-ZUA3O7uV_aq2dZihItDpBoxeBipvJA91vllw7TX3m3RZW33_sxZB90WEbetenqVFmM2n/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      </div>
      <div className={styles.landUseLink}>
        <a href="https://docs.google.com/spreadsheets/d/1m4Xg_HA6kGrkcmClRkrmn1f9GZKLIFxQECQSE7fkicg/edit?usp=sharing">Open Land Use In Google Sheet</a>
      </div>
    </div>
  )
}

export default LandUse