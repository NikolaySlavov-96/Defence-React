import { Link, useParams } from 'react-router-dom';
import style from './Detail.module.css';

export const Detail = () => {

    const { id } = useParams()
    const { img, articul, mark, model, description, _id } = { img: '22', articul: '22', mark: '22', model: '2', description: '22', _id: '22' }
    const owner = false;

    return (
        <section className={style["detail__section"]}>
            <article className={`${style["detail__container"]} shadow`}>
                <div className="detail__img">
                    <img src={img} alt="address" />
                </div>
                <div className={style["detail__description"]}>
                    <h1 className="prop">Detail of: <span className="span">{articul}</span></h1>
                    <p className="prop">Mark: <span className="span">{mark}</span></p>
                    <p className="prop">Model: <span className="span">{model}</span></p>
                    <p className="prop">Description: <span className="span">{description}</span></p>
                </div>
                <div className={style["detail__button"]}>
                    {owner && (
                        <>
                            <Link to={`/product/edit/${_id}`} className={`btn ${style["edit"]}`}>Edit</Link>
                            <Link to={`/product/delete/${_id}`} className={`btn ${style["delete"]}`}>Delete</Link>
                        </>
                    )}
                    {!owner && (
                        <Link to={`/cart/${_id}`} className={`btn ${style["buy"]}`}>Buy Product</Link>
                    )}
                </div >
            </article >
        </section >
    );
}