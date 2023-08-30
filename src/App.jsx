import { useEffect, useState } from "react";
import './App.css'
import HomePage from './components/homepage/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage></HomePage>
    </>
  )
}

export default App
