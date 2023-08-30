import { useState } from 'react'
import './App.css'
import { useTheme } from './components/providers/ThemeProvider'
import DarkModeButton from './components/ui/DarkModeButton'
import { Nav } from './components/Nav/Nav';

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
    <main style={style}>
      <Nav/>
    </ main>
  )
}

export default App
