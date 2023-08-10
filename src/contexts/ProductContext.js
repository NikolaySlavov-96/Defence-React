import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../hooks/useService";
import { productServiceFactory } from "../services/product";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const productService = useService(productServiceFactory);

    useEffect(() => {
        productService.getProducts()
            .then(req => {
                setProduct(req);
            });
    }, []);

    const onSubmitCreateProduct = async (data) => {
        const prod = await productService.createProduct(data);

        setProduct(p => [...p, prod]);
        navigate('/product/catalog');
    }

    const onSubmitEditProduct = async (data) => {
        const prod = await productService.editProduct(data._id, data);

        setProduct(p => p.map(x => x._id === data._id ? prod : x));
        navigate('/product/catalog');
    }

    const onSubmitDeleteProduct = async (id) => {
        await productService.deleteProduct(id);

        setProduct(p => p.filter(prod => prod._id !== id));
        navigate('/product/catalog');
    }

    const contextValue = {
        product,
        onSubmitCreateProduct,
        onSubmitEditProduct,
        onSubmitDeleteProduct,
    }

    return (
        < ProductContext.Provider value={contextValue} >
            {children}
        </ ProductContext.Provider >
    )
}


export const useProductContext = () => {
    const context = useContext(ProductContext);
    return context;
}