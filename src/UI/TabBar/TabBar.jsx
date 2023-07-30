import React from 'react'
import styles from './TabBar.module.scss'
import useTheme from '../../hooks/useTheme'

const TabBar = ({ list, ...props }) => {
    const { theme } = useTheme()

    return <div {...props} id={styles.tabBar} theme={theme}>
        { list.map(tabBarElement => <div id={styles.tabBarElement} onClick={() => tabBarElement.onClick()}>{tabBarElement.title}</div>) }
    </div>
}

export default TabBar