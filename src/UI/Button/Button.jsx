import React from 'react'
import styles from './Button.module.scss'
import useTheme from '../../hooks/useTheme'

const Button = ({ children, ...props }) => {
    const { theme } = useTheme()

    return <button {...props} theme={theme} id={styles.button}>
        { children }
    </button>
}

export default Button