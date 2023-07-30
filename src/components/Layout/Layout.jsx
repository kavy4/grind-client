import React from 'react'
import styles from './Layout.module.scss'
import useTheme from '../../hooks/useTheme'
import TabBar from '../../UI/TabBar/TabBar'
import { useDispatch } from 'react-redux'
import { setPage } from '../../store/pagesReducer'

const Layout = ({ children }) => {
    const { theme } = useTheme()

    const dispatch = useDispatch()

    const tabBarList = [
        {
            title: 'Top',
            onClick: () => console.log('not working')
        },

        {
            title: 'Main',
            onClick: () => dispatch(setPage('main'))
        },

        {
            title: 'Earn',
            onClick: () => dispatch(setPage('earn'))
        },

        {
            title: 'Other',
            onClick: () => console.log('not working')
        }
    ]

    return <div id={styles.layout} theme={theme}>
        <div className='p-4'>
            { children }
        </div>
        <TabBar list={tabBarList} />
    </div>
}

export default Layout