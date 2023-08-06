import { Link } from "react-router-dom";

import style from './Product.module.css';

export const ProductCard = ({ articul, mark, model, createAt, owner, _id, img }) => {
    return (
        <article className={`${style["catalog__product"]} shadow`}>
            <div className={style["product__picture"]}>
                <img src={img} alt="address" />
            </div>
            <h1 className="prop">Product: <span className="span">{articul}</span></h1>
            <div className={style["product__information"]}>
                <p className="prop">mark: <span className="span">{mark}</span></p>
                <p className="prop">model: <span className="span">{model}</span></p>
                <p className="prop">Create: <span>{createAt}</span></p>
            </div>
            <div className={style["product__container"]}>
                <p className={`prop ${style["owner"]}`}>Owner: <span className="span">{owner.username}</span></p>
                <Link className={`btn ${style["btn-view"]}`} to={`/product/detail/${_id}`}>View</Link>
            </div>
        </article>
    );
}