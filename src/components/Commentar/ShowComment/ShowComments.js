import { Link, useParams } from 'react-router-dom';
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
    const { comment, setProdId, onSubmitDelete, commentId, setCommentId } = useCommentContext()
    const [ownerProd, setOwnerProd] = useState([]);
    const [deleteComment, setDeleteComment] = useState(false);

    useEffect(() => {
        setProdId(id);
        setOwnerProd(getProduct(id).owner._id);
    }, [id]);

    const conditionDeleteComment = (condition, idComment) => {
        setDeleteComment(condition);
        setCommentId(idComment);
    }

    const deleteCommentWithId = async () => {
        await onSubmitDelete(commentId);
        setDeleteComment(false);
    }

    const owner = userId && ownerProd === userId;

    return (
        <section className={style["comment__section"]}>
            <div className={style['comment_container']}>
                {comment && comment.map(e => <CommentCard key={e._id} {...e} userId={userId} deleteProd={conditionDeleteComment} />)}
                {!comment.length && (userId ? (owner ?
                    <h2 className={style['comment__empty']}>No Comments.</h2> :
                    <h2 className={style['comment__empty']}>No Comments. You can add first!</h2>
                ) : <h2 className={style['comment__empty']}>No Comments. Before adding Commentar Please <Link to={'/auth/login'}>Log In</Link></h2>)}
                {deleteComment && <div className={style['container__settings']}>
                    <h1 className={style['manipulation']}>Are you sure want to delete the comment?</h1>
                    <div className={style['delete-comment']}>
                        <p onClick={() => conditionDeleteComment(false, '')} >Cancel</p>
                        <p onClick={deleteCommentWithId} >Yes</p>
                    </div>
                </div>
                }
            </div>
            {userId ?
                <div className={style['create-comment']}>
                    {!owner && <CreateComment />}
                </div> :
                <div>
                    <h2>Before adding Commentar Please <Link to={'/auth/login'}>Log In</Link></h2>
                </div>
            }
        </section >
    );
}