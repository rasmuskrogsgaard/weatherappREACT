import { useState } from "react";
import { useTheme } from "../components/providers/ThemeProvider";
import style from "./Aboutus.module.scss"
import Accordion from "../components/ui/Accordion";



export const About = () => {
    const {theme} = useTheme()
    

    const data = [
      {
        title: 'Item 1',
        content: 'Content for Item 1',
      },
      {
        title: 'Item 2',
        content: 'Content for Item 2',
      },
      {
        title: 'Item 3',
        content: 'Content for Item 3',
      },
      {
        title: 'Item 4',
        content: 'Content for Item 4',
      },


    ];

  return (
    <section className={style.about}>
        <h1>Om os</h1>
        <p>Vi har brugt</p>
      <div className={style.cardcontainer} >
        {data.map((item, index) => (
        <Accordion key={index}
        title={item.title}
        content={item.content}
        />
      ))}


        <div>
            <p>En "Om" side der forklarer hvilke teknologier appen bruger, samt deler relevante links til evt. styling biblioteker, icon biblioteker, API´er og andre node packages i har brugt.</p>
        </div>
        
      </div>
    </section>
  );
};
