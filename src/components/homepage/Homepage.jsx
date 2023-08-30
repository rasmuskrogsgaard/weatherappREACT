import { useEffect, useState } from "react";
const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const url = 'https://api.open-meteo.com/v1/forecast?latitude=57.048&longitude=9.9187&hourly=temperature_2m,rain,showers'
  
    fetch(url).then(res => res.json()).then(data => setData(data))
  
  },[])
  console.log("data", data)

  const time = data.hourly?.time[0] ?? null;
  const temperature = data.hourly?.temperature_2m[0] ?? null;
  const rain = data.hourly?.rain[0] ?? null;
     return (
      <>
       <div>
       <p>{time !== null ? `${time}` : " Indlæser"}</p>
       <h1>{temperature !== null ? `${temperature}°C` : " Indlæser" }</h1>
       <p>{rain !== null ? `${rain}` : " Indlæser"}</p>
       </div>
      </>
    )
  }
  export default HomePage
  