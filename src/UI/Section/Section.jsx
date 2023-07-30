import React from 'react'
import styles from './Section.module.scss'
import useTheme from '../../hooks/useTheme'

const Section = ({ children, ...props }) => {
    const { theme } = useTheme()

    return <div {...props} id={styles.section} theme={theme}>
        { children }
    </div>
}

export default Section