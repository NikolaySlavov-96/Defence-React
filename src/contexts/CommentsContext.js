import { createContext, useContext, useState } from "react";
import { useService } from "../hooks/useService";
import { commentarServiceFactory } from "../services/commentars";


const CommentContext = createContext();

export const CommentProvide = ({ children }) => {
    const [comment, setComment] = useState([]);
    const [error, setError] = useState([]);
    const commentService = useService(commentarServiceFactory);

    const onSubmitCreate = async (idProduct, value) => {
        try {
            const data = await commentService.createCommentar(idProduct, value);
            setComment(data);
        } catch (err) {
            setError(err.message);
        }
    }

    const contextValue = {
        comment,
        setComment,
        error,
        onSubmitCreate,
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

