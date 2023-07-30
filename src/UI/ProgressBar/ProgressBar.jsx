import React from 'react'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ filled, ...props }) => {
    return <div id={styles.progressBarContainer} {...props}>
        <div id={styles.progressBar} style={{ width: `${filled}%` }}></div>
    </div>
}

export default ProgressBar