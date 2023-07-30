import React from 'react'
import styles from './MainButton.module.scss'
import useTheme from '../../hooks/useTheme'
import Hr from '../Hr/Hr'

const MainButton = ({ buttonOptions, onClick = null, children, ...props }) => {
    const { value, title } = buttonOptions
    const { theme } = useTheme()

    return <div id={styles.button} theme={theme} {...props}>
        <button id={styles.buttonTop} onClick={onClick} empty={Boolean(!onClick).toString()}>{ title }</button>

        <Hr />
        
        <div id={styles.buttonBottom}>{ value }</div>

        { children }
    </div>
}

export default MainButton