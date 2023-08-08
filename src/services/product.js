import { requesterFactory } from './requester';

export const productServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getProducts = async () => {
        return request.get('/source/products');
    }

    const getProduct = async (id) => {
        return request.get('' + id);
    }

    return {
        getProducts,
        getProduct,
    }
}