import { useParams } from 'react-router-dom';
import style from './ShowComment.module.css';
import { useEffect, useState } from 'react';
import { commentarServiceFactory } from '../../../services/commentars';
import { useService } from '../../../hooks/useService';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';
import { CommentCard } from '../Cards/CommentCard';
import { CreateComment } from '../CreateComments/CreateComment';
import { useCommentContext } from '../../../contexts/CommentsContext';

export const ShowAll = () => {

    const { id } = useParams();
    const { userId } = useAuthContext()
    const { getProduct } = useProductContext();
    const { comment, setComment } = useCommentContext()
    const [ownerProd, setOwnerProd] = useState([]);
    const CommentarService = useService(commentarServiceFactory);

    useEffect(() => {
        CommentarService.getCommentars(id).then(req => {
            setComment(req);
            setOwnerProd(getProduct(id).owner._id)
        })
    }, [id]);

    const owner = userId && ownerProd === userId;

    return (
        <section className={style["comment__section"]}>
            <div>
                {comment && comment.map(e => <CommentCard key={e._id} {...e} />)}
                {!comment.length && (<h2>There are no Comments added First.</h2>)}
            </div>
            {userId &&
                <div>
                    {!owner && <CreateComment />}
                </div>
            }
        </section >
    );
}