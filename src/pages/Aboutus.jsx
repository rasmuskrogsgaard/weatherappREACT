import style from "./Aboutus.module.scss"


export const About = () => {
  return (
    <section className={style.about}>
        <h1>Om os</h1>
        <p>Vi har brugt</p>
      <div className={style.cardcontainer}>
        <article className={style.cards}>
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article class="cards">
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article class="cards">
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article class="cards">
          <h4>Hello</h4>
          <p>Test</p>
        </article>
        <article class="cards">
          <h4>Hello</h4>
          <p>Test</p>
        </article>
      </div>
    </section>
  );
};
