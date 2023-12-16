import { createContext, useContext, useEffect, useState } from "react";
import { useService } from "../hooks/useService";
import { commentarServiceFactory } from "../services/commentars";


const CommentContext = createContext();

export const CommentProvide = ({ children }) => {
    const [comment, setComment] = useState([]);
    const [error, setError] = useState([]);
    const [prodId, setProdId] = useState('');
    const CommentarService = useService(commentarServiceFactory);

    useEffect(() => {
        if (prodId !== '') {
            CommentarService.getCommentars(prodId)
                .then(req => {
                    console.log(req);
                    setComment(req);
                });
        }
    }, [prodId]);

    const onSubmitCreate = async (value) => {
        try {
            const data = await CommentarService.createCommentar(prodId, value);
            setComment(c => [...c, data]);
        } catch (err) {
            setError(err.message);
        }
    }

    const contextValue = {
        comment,
        setProdId,
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

