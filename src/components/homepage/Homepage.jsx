import { useEffect, useState } from "react";
import style from "./homepage.module.scss";
import Icons from "../ui/Icons";
import {motion} from "framer-motion"

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=57.048&longitude=9.9187&hourly=temperature_2m,rain,showers,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto"

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log("data", data);

  const time = data.hourly?.time[0] ?? null;
  const temperature = data.hourly?.temperature_2m[0] ?? null;
  const rain = data.hourly?.rain[0] ?? null;
  const weathercode = data.hourly?.weathercode[0] ?? null;
  const mintemp = data.daily?.temperature_2m_min[0] ?? null;
  const maxtemp = data.daily?.temperature_2m_max[0] ?? null;

console.log(weathercode);

  return (
    <>
      <motion.div 
      className={style.hpContainer}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: "100%"
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 1.5
      }}

      >
        
        <p>
          {time !== null ? `${new Date(time).toLocaleDateString([], {weekday: 'long', day : 'numeric', month: 'long', year: 'numeric' })}` : " Indlæser"}
        </p>
        <h1>
          {temperature !== null ? `${temperature} °C` : " Indlæser"}
        </h1>
        <p className={style.test}>
          <Icons icon={weathercode}/>
        </p>
        <div className={style.highLow}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48Z"/></svg>{mintemp != null? `${mintemp}°C` : " Indlæser"} <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 116.24a6 6 0 0 1-8.48 0L134 54.49V216a6 6 0 0 1-12 0V54.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48Z"/></svg> 
          {mintemp != null? `${maxtemp}°C` : " Indlæser"}
        </div>
   </motion.div>
    </>
  );
};
export default HomePage;
