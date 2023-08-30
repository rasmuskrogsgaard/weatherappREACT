import React from 'react'
import { useTheme } from '../providers/ThemeProvider';
import style from "./DarkModeButton.module.scss"
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"

export default function DarkModeButton() {
    const {theme, setTheme} = useTheme()

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
    className={`${style.darkButton} ${theme === "dark" ? style.dark : ""}`}
    >
        {theme === "dark" ? (
          <BsFillSunFill />
        ) : (
          <BsFillMoonStarsFill />
        )}
    </button>
  )
}
