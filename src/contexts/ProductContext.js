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

    const contextValue = {
        product,
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