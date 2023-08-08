import { Link, useParams } from 'react-router-dom';

import style from './Delete.module.css';
import { useEffect, useState } from 'react';
import { useService } from '../../../hooks/useService';
import { productServiceFactory } from '../../../services/product';
import { useProductContext } from '../../../contexts/ProductContext';

export const Delete = () => {
    const { onSubmitDeleteProduct } = useProductContext();
    const productService = useService(productServiceFactory);
    const [prod, setProd] = useState({});
    const { id } = useParams();

    useEffect(() => {
        productService.getProduct(id)
            .then(req => {
                setProd(req[0]);
            })
    }, [id]);

    return (
        <section className={style["delete__section"]}>
            <div className={`shadow ${style["delete__container"]}`}>
                <h1 className={style["delete__title"]}>Delete page</h1>
                <p className={style["remove__text"]}>Are you shure you want to delete this product? <span>{prod.articul}</span></p>
                <div className={style["prod__info"]}>
                    <p className="prop">Product Type: <span className="span">{prod.articul}</span></p>
                    <p className="prop">Mark: <span className="span">{prod.mark}</span></p>
                    <p className="prop">Model: <span className="span">{prod.model}</span></p>
                </div>
                <div className={style["delete_btn"]}>
                    <button className="btn" onClick={() => onSubmitDeleteProduct(prod._id)}>Delete</button>
                    <Link className="btn" to="/product/catalog">Cancel</Link>
                </div>
            </div>
        </section >
    );
}