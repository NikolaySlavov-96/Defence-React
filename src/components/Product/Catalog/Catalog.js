import { useProductContext } from "../../../contexts/ProductContext";
import { ProductCard } from "../Cards/ProductCard";

import style from './Catalog.module.css';

export const Catalog = () => {

    const { product } = useProductContext([]);

    return (
        <section className={style["catalog__section"]}>
            <h1 className={style["section__title"]}>Catalog with products</h1>
            {product && product.map(e => <ProductCard key={e._id} {...e} />)}
            {!product.length && (<h2>There are no items added yet.</h2>)}
        </section >
    );
}