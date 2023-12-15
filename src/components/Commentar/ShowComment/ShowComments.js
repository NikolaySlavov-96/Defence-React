import { useParams } from 'react-router-dom';
import style from './ShowComment.module.css';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useProductContext } from '../../../contexts/ProductContext';
import { CommentCard } from '../Cards/CommentCard';
import { CreateComment } from '../CreateComments/CreateComment';
import { useCommentContext } from '../../../contexts/CommentsContext';

export const ShowAll = () => {

    const { id } = useParams();
    const { userId } = useAuthContext()
    const { getProduct } = useProductContext();
    const { comment, setProdId } = useCommentContext()
    const [ownerProd, setOwnerProd] = useState([]);

    useEffect(() => {
        setProdId(id);
        setOwnerProd(getProduct(id).owner._id);
    }, [id]);

    const owner = userId && ownerProd === userId;

    return (
        <section className={style["comment__section"]}>
            <div>
                {comment && comment.map(e => <CommentCard key={e._id} {...e} />)}
                {!comment.length && (<h2>No Comments. You can add first! First.</h2>)}
            </div>
            {userId &&
                <div>
                    {!owner && <CreateComment />}
                </div>
            }
        </section >
    );
}