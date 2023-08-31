import { useTheme } from "../components/providers/ThemeProvider";
import style from "./Aboutus.module.scss"


export const About = () => {
    const {theme} = useTheme()
  return (
    <section className={style.about}>
        <h1>Om os</h1>
        <p>Vi har brugt</p>
      <div className={style.cardcontainer}>
        <article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}>
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}>
          <h4>Hello</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit mollitia perspiciatis reiciendis excepturi quo dolorum molestias aliquid ea, quidem ratione, amet deserunt qui. Perspiciatis fugiat modi, unde odit molestias vel dolor totam nam blanditiis quisquam aliquid repellat dolorem omnis incidunt consequuntur neque provident? Dolorem voluptates fugit modi. Optio, repellat reprehenderit!</p>
        </article>
        <article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}>
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article className={`${style.cards} ${theme === "dark" ? style.dark : " "}`}>
          <h4>Hello</h4>
          <p>Test</p>
        </article>


        <div>
            <p>En "Om" side der forklarer hvilke teknologier appen bruger, samt deler relevante links til evt. styling biblioteker, icon biblioteker, API´er og andre node packages i har brugt.</p>
        </div>
        
      </div>
    </section>
  );
};
