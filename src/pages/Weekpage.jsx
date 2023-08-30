import React, { useEffect, useState } from 'react'
import Icons from '../components/ui/Icons'
import style from "./Weekpage.module.scss"

export default function Weekpage() {
    const [errorMsg, setErrorMsg] = useState("")
    const [data, setData] = useState(null)
    const [day1, setDay1] = useState(null)
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

        setData(sortedData)

        const day1 = sortedData.filter((d, i) => {
            if(i < 24){
                return d
            }
        })
        const day2 = sortedData.filter((d, i) => {
            if(i >= 24){
                if(i < 48){
                    return d
                }
            }
        })
        const day3 = sortedData.filter((d, i) => {
            if(i >= 48){
                if(i < 72){
                    return d
                }
            }
        })
        const day4 = sortedData.filter((d, i) => {
            if(i >= 72){
                if(i < 96){
                    return d
                }
            }
        })
        const day5 = sortedData.filter((d, i) => {
            if(i >= 96){
                if(i < 120){
                    return d
                }
            }
        })
        const day6 = sortedData.filter((d, i) => {
            if(i >= 120){
                if(i < 144){
                    return d
                }
            }
        })
        const day7 = sortedData.filter((d, i) => {
            if(i >= 144){
                if(i < 168){
                    return d
                }
            }
        })

        const newData = [day1, day2, day3, day4, day5, day6, day7]

        console.log(newData);
        setDay1(day1)
        console.log(day1);

        console.log(sortedData);
    }

    const error = () => {
        setErrorMsg("missing cordinates")
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])
    
  return (
    <main>
        <h1>
            oversigt
        </h1>
        <h2>Monday</h2>
        <section 
        className={style.dayContainer}
        >
            {day1 && day1.map(d => (
                <article
                key={d.time}
                className={style.hour}
                >
                    <Icons icon={d.wwo} />
                    {new Date(d.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </article>
            ))}
        </section>
    </main>
  )
}
