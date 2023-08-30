import { useState } from 'react'
import './App.css'
import { useTheme } from './components/providers/ThemeProvider'
import DarkModeButton from './components/ui/DarkModeButton'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weekpage from './pages/Weekpage';

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
      <BrowserRouter>
        <Routes>
          <Route index element={<DarkModeButton />} />
          <Route path='/uge' element={<Weekpage />} />
        </Routes>
      </BrowserRouter>
    </ main>
  )
}

export default App
