import { ProductCard } from "../Cards/ProductCard";

import style from './Catalog.module.css';

export const Catalog = () => {

    const { product } = { product: [{ articul: '22', mark: '22', model: '22', createAt: 22, owner: '2', _id: '22', img: '222' }] }

    return (
        <section className={style["catalog__section"]}>
            <h1 className={style["section__title"]}>Catalog with products</h1>
            {product && product.map(e => <ProductCard key={e._id} {...e} />)}
            {!product.length && (<h2>There are no items added yet.</h2>)}
        </section >
    );
}