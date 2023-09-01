import style from "./Nav.module.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import DarkModeButton from "../ui/DarkModeButton";
import { useTheme } from "../providers/ThemeProvider";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { theme } = useTheme();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Hent brugerens position
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        // Brug Nominatim API til at få bynavnet
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
          const data = await response.json();

          if (data.address && data.address.city) {
            setCity(data.address.city);
          } else {
            setCity('Ukendt by');
          }
        } catch (error) {
          console.error('Error fetching city name:', error);
        }
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <nav className={`${style.nav} ${theme === "dark" ? style.dark : ""}`}>
      <div className={style.wrapper}>
        <div>
          {latitude !== null && longitude !== null ? (
            <div>
              {city !== null ? <h3>{city}</h3> : <p>Finder din lokation...</p>}
            </div>
          ) : (
            <p>Finder din placering...</p>
          )}
          <p className={`${style.location} ${theme === "dark" ? style.dark : " "}`}>Nuværende Location</p>
        </div>
        <ul>
          <li>
            <Link to="/">
              <BiHomeAlt2 />
            </Link>
          </li>
          <li>
            <Link to="/uge">
              <LuCalendarDays />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <MdPersonOutline />
            </Link>
          </li>
          <li>
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};
