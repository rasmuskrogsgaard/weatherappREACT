import { useState } from "react";
import { useTheme } from "../components/providers/ThemeProvider";
import style from "./Aboutus.module.scss"
import Accordion from "../components/ui/Accordion";
import {BiLogoReact} from "react-icons/bi"
import { BiLogoSass } from "react-icons/bi"
import { AiOutlineLink } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { TiWeatherPartlySunny } from "react-icons/ti"


export const About = () => {
    const {theme} = useTheme()
    const [open, setOpen] = useState(0)
    

    const data = [
      {
        title: 'Lavet af',
        icon: <BsFillPersonFill />,
        content: 'Rasmus, Morten, Niklas',
      },
      {
        title: 'Vores app',
        icon: <TiWeatherPartlySunny />,
        content: 'Vores vejr-app holder dig opdateret om vejret døgnet rundt. Få øjeblikkelig oversigt over dagens og den kommende uges vejr. Vælg mellem dark og light theme for at tilpasse din oplevelse.',
      },
      {
        title: 'React',
        icon: <BiLogoReact />,
        content: 'Den er lavet i React med brug hvor react-icons er brugt til iconer og brugt og react-router-dom som vores router',
        links: ['https://react-icons.github.io/react-icons','https://reactrouter.com/en/main'],
      },
      {
        title: 'Api',
        icon: <AiOutlineLink />,
        content: 'Der blevet brugt en vejr api til hent data af dit vejr og samt brugt en lokation api til finde din placering',
        links: ['https://open-meteo.com/','https://nominatim.openstreetmap.org/ui/search.html'],
      },
      {
        title: 'Styling',
        icon: <BiLogoSass />,
        content: 'Brugt Figma til design af vores vejr app og brugt google fonts til style af text, og stylet det i sass',
        links: ['https://fonts.google.com/specimen/Inter?query=inter','https://sass-lang.com/','https://www.figma.com/file/CCcmlhzQgGNmZzbRkZBUu8/Mono-Weather-UI-Kit-(Community)?type=design&node-id=1%3A172&mode=design&t=tydKCd04Yt3XXjXQ-1'],
      },


    ];

  return (
    <section className={style.about}>
        <h1>Om os</h1>
        <p>Vi har brugt</p>
      <div className={style.cardcontainer} >
        {data.map((item, index) => (
        <Accordion 
        key={index}
        title={item.title}
        content={item.content}
        choosen={open}
        index={index}
        setOpen={setOpen}
        links={item.links}
        icon={item.icon}
        />
      ))}
      
      </div>
    </section>
  );
};
