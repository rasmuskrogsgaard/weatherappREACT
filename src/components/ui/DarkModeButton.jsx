import React from 'react'
import { useTheme } from '../providers/ThemeProvider'

export default function DarkModeButton() {
    const {theme, setTheme} = useTheme()
    console.log(theme, setTheme);

    const handleClick = () => {
        setTheme("light")
        if(theme === 'light'){
          setTheme("dark")
        } else{
          setTheme("light")
        }
    }
  return (
    <button
    onClick={() => handleClick()}
    >
        Switch color
    </button>
  )
}
