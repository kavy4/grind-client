import React from 'react'
import styles from './Input.module.scss'
import useTheme from '../../hooks/useTheme'

const Input = ({ ...props }) => {
    const { theme } = useTheme()

    return <input id={styles.input} theme={theme} type='text' {...props} />
}

export default Input