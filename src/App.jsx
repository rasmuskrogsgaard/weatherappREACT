import { useEffect, useState } from "react";
import './App.css'
import HomePage from './components/homepage/Homepage.jsx'
import { useTheme } from './components/providers/ThemeProvider'
import DarkModeButton from './components/ui/DarkModeButton'
import { Nav } from './components/Nav/Nav';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Weekpage from './pages/Weekpage';
import { About } from "./pages/Aboutus";
import Allowpage from "./pages/Allowpage";


function App() {
  const [location, setLocation] = useState(true)
  const {theme} = useTheme()

  const success = (pos) => {
    setLocation(true)
  }
  const error = (pos) => {
    setLocation(false)
  }

  navigator.geolocation.getCurrentPosition(success, error)
  

  const style = theme === "dark" ? {
    backgroundColor: "#121212",
    color: "#fff"
  } : {
    backgroundColor: "#fff",
    color: "#121212"
  }

  return (
    <main style={style}>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/uge' element={<Weekpage />} />
          <Route path='/about' element={<About />} />
          <Route index element={location ? <HomePage /> : <Navigate to="/allow" />} />
          <Route path='/uge' element={location ? <Weekpage /> : <Navigate to="/allow" />} />
          <Route path='/allow' element={!location ? <Allowpage /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ main>
  )
}

export default App
