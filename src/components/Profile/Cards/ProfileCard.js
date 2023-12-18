import { Link } from "react-router-dom";

import style from './ProfileCard.module.css';

export const ProfileCard = ({ mark, model, name, _id, productId }) => {
    const address = '/product/detail/'

    return (
        <article className={`${style["profile__card"]} shadow`}>
            {!productId ?
                (<>
                    <div className={style['profile__line']}>
                        <p className="prop">Mark: <span className="span">{mark}</span></p>
                        <p className="prop">Model: <span className="span">{model}</span></p>
                        <Link className={`btn ${style["btn-view"]}`} to={`${productId ? address + productId : address + _id}`}>View</Link>
                    </div>
                </>)
                :
                (<>
                    <div className={style['profile__line']}>
                        <p className="prop">Mark: <span className="span">{name}</span></p>
                        <Link className={`btn ${style["btn-view"]}`} to={`${productId ? address + productId : address + _id}`}>View</Link>
                    </div>
                </>)
            }
        </article >
    );
}