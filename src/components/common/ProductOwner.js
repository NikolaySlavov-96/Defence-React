import { Navigate, Outlet, useParams } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductContext";


export const ProductOwner = ({ children }) => {
    const { id } = useParams();
    const { userId } = useAuthContext();
    const { getProduct } = useProductContext();

    const currentProduct = getProduct(id);

    if (currentProduct && currentProduct.owner._id !== userId) { return <Navigate to={`/product/detail/${id}`} replace /> }

    return children ? children : <Outlet />

}