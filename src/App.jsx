import { useEffect, useState } from "react";
import './App.css'
import HomePage from './components/homepage/Homepage.jsx'
import { useTheme } from './components/providers/ThemeProvider'
import DarkModeButton from './components/ui/DarkModeButton'

function App() {
  console.log(window.matchMedia("(prefers-color-scheme: light)"));
  const {theme} = useTheme()
  const style = theme === "dark" ? {
    backgroundColor: "#000",
    color: "#fff"
  } : {
    backgroundColor: "#fff",
    color: "#000"
  }

  return (
    <>
      <HomePage></HomePage>
    </>
  )
}

export default App
