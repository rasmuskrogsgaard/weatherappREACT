import React, { useEffect, useState } from 'react'

export default function Weekpage() {
    const [errorMsg, setErrorMsg] = useState("")
    const success = async (pos) => {
        const crd = pos.coords;

        const lat = crd.latitude;
        const lon = crd.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode`

        const data = await fetch(url)
        const result = await data.json()

        const sortedData = result.hourly.time.map((d, index) => {
            return{
                humidity: result.hourly.relativehumidity_2m[index],
                temp: result.hourly.temperature_2m[index],
                time: d,
                wwo: result.hourly.weathercode[index]
            }
        })

        console.log(sortedData);
    }

    const error = () => {
        setErrorMsg("missing cordinates")
    }

    navigator.geolocation.getCurrentPosition(success, error);
  return (
    <main>
        <p>
            {errorMsg}
        </p>
    </main>
  )
}
