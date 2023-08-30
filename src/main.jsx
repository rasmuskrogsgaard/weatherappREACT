import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from './components/providers/ThemeProvider.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
