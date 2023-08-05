import style from './About.module.css';

export const About = () => {
    return (
        <section class={style["about__section"]}>
            <h1 class={style["about__title"]}>About Page</h1>
            <div class={style["about__left-form"]}>
                <form action="">
                </form>
            </div>
            <aside class={style["about__right-info"]}>
                <p>Small seller of computer products and accessory!</p>
            </aside>
        </section>
    );
}