import style from "./Nav.module.scss"
import { BiHomeAlt2 } from "react-icons/bi"
import { LuCalendarDays } from "react-icons/lu"
import { MdPersonOutline } from "react-icons/md"
import { useEffect, useState } from "react"
import DarkModeButton from "../ui/DarkModeButton"
import { useTheme } from "../providers/ThemeProvider"
import { Link } from "react-router-dom"


export const Nav = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState(null);
    const {theme} = useTheme()

    useEffect(() => {
        // Hent brugerens placering ved hjælp af geolocation API'en
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
    
              try {
                // Omvendt geokodning for at få bynavnet baseret på koordinater
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
                const data = await response.json();
                setCity(data.address.city || data.address.town || data.address.village);
              } catch (error) {
                console.error("Fejl ved omvendt geokodning:", error);
              }
            },
            (error) => {
              console.error("Fejl ved at hente placering:", error);
            }
          );
        } else {
          console.error("Geolocation er ikke tilgængelig i denne browser.");
        }
      }, []);

    return (
        <nav className={`${style.nav} ${theme === "dark" ? style.dark : ""}`}>
          <div className={style.wrapper}>
            <div>
            {latitude !== null && longitude !== null ? (
        <div>
          {city !== null ? <h3>{city}</h3> : <p>Finder bynavn...</p>}
        </div>
      ) : (
        <p>Finder din placering...</p>
      )}
              <p>Nuværende Location</p>
            </div>
            <ul>
              <li>
                <Link to="/"><BiHomeAlt2/></Link>
              </li>
              <li>
                <Link to="/uge"><LuCalendarDays/></Link>
              </li>
              <li>
                <Link to="/about"><MdPersonOutline/></Link>
              </li>
              <li>
                <DarkModeButton />
                
              </li>
            </ul>
          </div>
        </nav>
      );
}