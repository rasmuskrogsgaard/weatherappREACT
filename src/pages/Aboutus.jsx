import { useState } from "react";
import { useTheme } from "../components/providers/ThemeProvider";
import style from "./Aboutus.module.scss"
import Accordion from "../components/ui/Accordion";



export const About = () => {
    const {theme} = useTheme()
    const [open, setOpen] = useState(0)
    

    const data = [
      {
        title: 'Lavet af',
        content: 'Rasmus, Morten, Niklas',
      },
      {
        title: 'Vores app',
        content: 'Content for Item 2',
      },
      {
        title: 'React',
        content: 'skriver vi brugt det til',
        link: 'https://react-icons.github.io/react-icons',
        link2: 'https://react-icons.github.io/react-icons'
      },
      {
        title: 'Api',
        content: 'Content for Item 3',
        link: 'https://react-icons.github.io/react-icons'
      },
      {
        title: 'Styling',
        content: 'Content for Item 4',
        link: 'https://react-icons.github.io/react-icons'
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
        link={item.link}
        />
      ))}


        <div>
            <p>En "Om" side der forklarer hvilke teknologier appen bruger, samt deler relevante links til evt. styling biblioteker, icon biblioteker, API´er og andre node packages i har brugt.</p>
        </div>
        
      </div>
    </section>
  );
};
