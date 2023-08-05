import style from './Home.module.css';

export const Home = () => {
    return (
        <section className={style["home__section"]}>
            <div className={style["home__slider-immage"]}>
                <img src="/images/macbookPro.jpg" alt="macbook pro" />
                <img src="/images/interlI9.jpg" alt="Intel I9" />
                <img src="/images/evgaPowerSupply.jpg" alt="power supply" />
                <img src="/images/motherboard.jpg" alt="motherboard" />
                <img src="/images/nvidiaVideoCard.png" alt="nvidia Video Cards" />
                <img src="/images/office.jpg" alt="office machine" />
                <img src="/images/printer.png" alt="printer" />
            </div>
            <div className={`${style["home__information"]} shadow`}>
                <h1>Hello my customer, this is online market for buy of high tech techinque</h1>
                <p>This site is created and using for Defence of Angular Project to task
                    from
                    SoftUni <a href="https://softuni.bg">SoftUni</a> Create for learning goal not real Online market</p>
            </div>
        </section>
    );
}