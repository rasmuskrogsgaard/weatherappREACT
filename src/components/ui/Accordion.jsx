import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import style from "./Accordion.module.scss"
import { useTheme } from '../providers/ThemeProvider'
import {motion} from "framer-motion"


export default function Accordion({title, content, choosen, index, setOpen, link}) {
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
    <motion.article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}
    initial={{
        opacity: "0%",
    }}
    animate={{
        opacity: "100%"
    }}
    transition={{
        duration: 2,
        delay: index / 2
    }}
    >
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
            <a href="">
                {link}
            </a>
           
        </div>}
    </motion.article>
  )
}
