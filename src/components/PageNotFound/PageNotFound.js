import style from './PageNotFountd.module.css';

export const PageNotFound = () => {
    return (
        <section className={style["not-found__section"]}>
            <div className={`${style["not-found__container"]} shadow`}>
                <p>404 Page not Found</p>
            </div>
        </section>
    );
}