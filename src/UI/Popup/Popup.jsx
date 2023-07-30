import React from 'react'
import styles from './Popup.module.scss'
import useTheme from '../../hooks/useTheme'

const Popup = ({ isOpenOptions, children, ...props }) => {
    const { isOpen, setIsOpen } = isOpenOptions
    const { theme } = useTheme()

    if (isOpen) {
        return <div id={styles.overlay} onClick={() => setIsOpen(false)}>
            <div {...props} theme={theme} id={styles.popup} onClick={event => event.stopPropagation()}>
                { children }
            </div>
        </div>
    }
}

export default Popup