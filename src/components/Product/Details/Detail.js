import { Link, useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';

export const Detail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { getProduct } = useProductContext();
    const { userId } = useAuthContext()

    useEffect(() => {
        setProduct(getProduct(id));
    }, [id]);

    const owner = userId && product.owner?._id === userId;

    return (
        <section className={style["detail__section"]}>
            <article className={`${style["detail__container"]} shadow`}>
                <div className={style["detail__img"]}>
                    <img src={product.img} alt="address" />
                </div>
                <div className={style["detail__description"]}>
                    <h1 className="prop">Detail of: <span className="span">{product.articul}</span></h1>
                    <p className="prop">Mark: <span className="span">{product.mark}</span></p>
                    <p className="prop">Model: <span className="span">{product.model}</span></p>
                    <p className="prop">Description: <span className="span">{product.description}</span></p>
                </div>
                {userId && (
                    <div className={style["detail__button"]}>
                        {owner && (
                            <>
                                <Link to={`/product/edit/${product._id}`} className={`btn ${style["edit"]}`}>Edit</Link>
                                <Link to={`/product/delete/${product._id}`} className={`btn ${style["delete"]}`}>Delete</Link>
                            </>
                        )}
                        {!owner && (
                            <Link to={`/cart/${product._id}`} className={`btn ${style["buy"]}`}>Buy Product</Link>
                        )}
                    </div >
                )}
            </article >
        </section >
    );
}