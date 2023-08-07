import { Link } from 'react-router-dom';

import style from './Delete.module.css';

export const Delete = () => {

    const { articul, mark, model } = {};

    return (
        <section className={style["delete__section"]}>
            <div className={`shadow ${style["delete__container"]}`}>
                <h1 className={style["delete__title"]}>Delete page</h1>
                <p className={style["remove__text"]}>Are you shure you want to delete this product? <span>{articul}</span></p>
                <div className={style["prod__info"]}>
                    <p className="prop">Product Type: <span className="span">{articul}</span></p>
                    <p className="prop">Mark: <span className="span">{mark}</span></p>
                    <p className="prop">Model: <span className="span">{model}</span></p>
                </div>
                <div className={style["delete_btn"]}>
                    <button className="btn">Delete</button>
                    <Link className="btn" to="/product/catalog">Cancel</Link>
                </div>
            </div>
        </section >
    );
}