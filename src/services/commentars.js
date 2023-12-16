import { requesterFactory } from './requester';

export const commentarServiceFactory = (token) => {
    const request = requesterFactory(token);

    const getCommentars = async (id) => request.get(`/source/product/${id}/comments`);

    const getComment = async (id, idComment) => request.get(`/source/product/${id}/comment/${idComment}`);

    const createCommentar = async (idProduct, data) => request.post(`/source/product/${idProduct}/comment`, data);

    const editCommentar = async (id, idComment, data) => request.put(`/source/product/${id}/comment/${idComment}`, data);

    const deleteCommentar = async (id, idComment) => request.remove(`/source/product/${id}/comment/${idComment}`);

    return {
        getCommentars,
        getComment,
        createCommentar,
        editCommentar,
        deleteCommentar,
    }
}