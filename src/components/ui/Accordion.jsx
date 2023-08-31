import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import style from "./Accordion.module.scss"
import { useTheme } from '../providers/ThemeProvider'

export default function Accordion({title, content, choosen, index, setOpen}) {
    const {theme} = useTheme()
    const [accordionOpen, setAccordionOpen] = useState(false)

    if(accordionOpen && choosen !== index){
        setAccordionOpen(false)
    }

    const handleOpen = () => {
        setOpen(index)
        setAccordionOpen(!accordionOpen)
    }

    console.log(theme);
  return (
    <article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}>
        <div 
        className={`${style.accheader} ${theme === "dark" ? style.dark : " "}`} 
        onClick={() => handleOpen()}
        >
            <h3>
                {title} 
            </h3>
            {accordionOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}

        </div>
        {accordionOpen && <div className={`${style.accbottem} ${theme === "dark" ? style.dark : " "}`}>
            <p>
                {content}
            </p>
           
        </div>}
    </article>
  )
}