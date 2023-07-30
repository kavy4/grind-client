import { createContext, useState } from 'react'

const defaultState = 'dark'

export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultState)

    const switchTheme = theme => theme === 'dark' ? setTheme('light') : setTheme('dark')

    return <ThemeContext.Provider value={{ theme, switchTheme }}>
        { children }
    </ThemeContext.Provider>
}