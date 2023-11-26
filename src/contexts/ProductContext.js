import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../hooks/useService";
import { productServiceFactory } from "../services/product";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const productService = useService(productServiceFactory);
    const [error, setError] = useState([]);

    useEffect(() => {
        productService.getProducts()
            .then(req => {
                setProduct(req);
            });
    }, []);

    const getProduct = (id) => {
        try {
            return product.find(prod => prod._id === id);
        } catch (err) {
            setError(err.message);
        }
    }

    const onSubmitCreateProduct = async (data) => {
        try {
            const prod = await productService.createProduct(data);

            setProduct(p => [...p, prod]);
            navigate('/product/catalog');
        } catch (err) {
            setError(err.message);
        }
    }

    const onSubmitEditProduct = async (data) => {
        try {
            const prod = await productService.editProduct(data._id, data);
            
            setProduct(p => p.map(x => x._id === data._id ? prod : x));
            navigate('/product/catalog');
        } catch(err) {
            setError(err.message);
        }
    }

    const onSubmitDeleteProduct = async (id) => {
        try {
            await productService.deleteProduct(id);
            
            setProduct(p => p.filter(prod => prod._id !== id));
            navigate('/product/catalog');
        } catch(err) {
            setError(err.message);
        }
    }

    const contextValue = {
        product,
        error,
        getProduct,
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