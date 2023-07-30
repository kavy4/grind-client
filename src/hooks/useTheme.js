import { useContext } from 'react'
import { ThemeContext } from '../providers/ThemeContext'

const useTheme = () => {
    const value = useContext(ThemeContext)

    return value
}

export default useTheme