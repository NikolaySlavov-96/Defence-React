import { requesterFactory } from './requester';

export const productServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getProducts = async () => request.get('/source/products');

    const getProduct = async (id) => request.get('/source/product/' + id);

    const createProduct = async (data) => request.post('/source/product', data);

    const editProduct = async (id, data) => request.put('/source/product/' + id, data);

    const deleteProduct = async (id) => request.remove('/source/product/' + id);

    return {
        getProducts,
        getProduct,
        createProduct,
        editProduct,
        deleteProduct,
    }
}