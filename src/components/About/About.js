import style from './About.module.css';

export const About = () => {
    return (
        <section className={style["about__section"]}>
            <h1 className={style["about__title"]}>About Page</h1>
            <div className={style["about__left-form"]}>
                <form action="">
                </form>
            </div>
            <aside className={style["about__right-info"]}>
                <p>Small seller of computer products and accessory!</p>
            </aside>
        </section>
    );
}