import React from 'react'
import { MdLocationOff } from 'react-icons/md'
import style from "./AllowPage.module.scss"
import { useTheme } from '../components/providers/ThemeProvider'

export default function Allowpage() {
    const {theme} = useTheme()
    
  return (
    <div className={`${style.allow} ${theme === "dark" ? style.dark : " " }`}>
        <MdLocationOff />
        <p>
            It seems like Geolocation, which is required for this page, is not enabled in your browser. Please turn it on.
        </p>
    </div>
  )
}
