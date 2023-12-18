import { requesterFactory } from './requester';

export const profileServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getProfile = async () => request.get(`/user/profile`);

    const getProduct = async () => request.get(`/user/products`);

    const getComment = async () => request.get(`/user/comments`);

    const editProfile = async (data) => request.put(`/user/profile`, data);

    const deleteProfile = async () => request.remove(`/user/profile`);

    return {
        getProfile,
        getProduct,
        getComment,
        editProfile,
        deleteProfile,
    }
}