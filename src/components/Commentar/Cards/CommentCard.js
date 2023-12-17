import { useEffect, useState } from 'react';
import style from './Comment.module.css';
import { useForm } from '../../../hooks/useForm';
import { useCommentContext } from '../../../contexts/CommentsContext';

export const CommentCard = ({ name, commentar, lastUpdate, createAt, ownerId, _id, userId, productId, deleteProd },) => {
    const { onSubmitEdit, error, getSelectComment, setCommentId } = useCommentContext();
    const [editComment, setEditComment] = useState(false);

    const editCommenWithId = (commentId, condtion) => {
        setEditComment(condtion)
        setCommentId(commentId);
    }

    const { values, changeHandler, onSubmit, changeValue, errors } = useForm({
        name: '',
        commentar: '',
    }, onSubmitEdit, {
        name: ['required', '5'],
        commentar: ['required', '10'],
    });

    useEffect(() => {
        if (editComment === true) {
            changeValue(getSelectComment())
        }
    }, [_id, editComment]);

    const owner = ownerId === userId;
    return (
        <>
            {!editComment ? (
                <article className={`${style["comment__list"]} shadow`}>
                    <div className={style["comment__top"]}>
                        <div className={style['comment__info']}>
                            <p className="prop">Username: <span className="span">{name}</span></p>
                            <div className={style['info__date']}>
                                <p className="prop">Last Update: <span className="span">{lastUpdate}</span></p>
                                <p className="prop">Create: <span className="span">{createAt}</span></p>
                                {owner && <div className={style['comment__owner']}>
                                    <p onClick={() => editCommenWithId(_id, true)} >E</p>
                                    <p onClick={() => deleteProd(true, _id)} >D</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style["comment__area"]}>
                        <p className="prop">Commentars:</p>
                        <div>
                            <p><span className="span">{commentar}</span></p>
                        </div>
                    </div>
                </article>
            ) : (
                <section className={`${style["comment__list"]} shadow`}>
                    {!!error.length && (<div className='error_serv'>
                        {error}
                    </div>
                    )}
                    <h3 className={style["comment__title"]}>Edit your Commentar</h3>
                    <form onSubmit={onSubmit}>
                        <div className={style["comment__top"]}>
                            <div className={style['comment__info']}>
                                <div>
                                    <p className="prop">Username:
                                        <input type="text" name="name" id="name" value={values.name} onChange={changeHandler} onBlur={changeHandler} placeholder='Your Name' />
                                    </p>
                                    {errors.name && (<p className='error'>{errors.name}</p>)}
                                </div>
                                {owner && <div className={style['comment__owner']}>
                                    <p onClick={() => editCommenWithId('', false)} >Exit</p>
                                </div>
                                }
                            </div>
                        </div>
                        <div className={style['comment__area']}>
                            <p className="prop">Commentars:</p>
                            <div className={style['store__area']}>
                                <textarea type="text" name="commentar" id="commentar" value={values.commentar} onChange={changeHandler} onBlur={changeHandler} placeholder='Your commentar ...' ></textarea>
                                {errors.commentar && (<p className='error'>{errors.commentar}</p>)}
                            </div>
                        </div>

                        <button className={`btn ${style["btn-edit"]}`}>Edit</button >
                    </form >
                </section >
            )}
        </>
    );
}