import { createContext, useContext, useEffect, useState } from "react";
import { useService } from "../hooks/useService";
import { commentarServiceFactory } from "../services/commentars";


const CommentContext = createContext();

export const CommentProvide = ({ children }) => {
    const [comment, setComment] = useState([]);
    const [error, setError] = useState([]);
    const [prodId, setProdId] = useState('');
    const [commentId, setCommentId] = useState('');
    const CommentarService = useService(commentarServiceFactory);

    useEffect(() => {
        if (prodId !== '') {
            CommentarService.getCommentars(prodId)
                .then(req => {
                    setComment(req);
                });
        }
    }, [prodId]);

    const getSelectComment = () => {
        return comment.find(com => com._id === commentId);
    }

    const onSubmitCreate = async (value) => {
        try {
            const data = await CommentarService.createCommentar(prodId, value);
            setComment(c => [...c, data]);
        } catch (err) {
            setError(err.message);
        }
    }

    const onSubmitEdit = async (value) => {
        try {
            const prod = await CommentarService.editCommentar(prodId, commentId, value);

            setComment(p => p.map(c => c._id === value._id ? prod : c));
        } catch (err) {
            setError(err.message);
        }
    }

    const onSubmitDelete = async (commentId) => {
        await CommentarService.deleteCommentar(prodId, commentId);
        setComment(c => c.filter(com => com._id !== commentId));
        return;
    }

    const contextValue = {
        comment,
        setProdId,
        setComment,
        commentId,
        setCommentId,
        getSelectComment,
        error,
        onSubmitCreate,
        onSubmitEdit,
        onSubmitDelete,
    }

    return (
        <CommentContext.Provider value={contextValue}>
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = () => {
    const context = useContext(CommentContext);
    return context;
}

