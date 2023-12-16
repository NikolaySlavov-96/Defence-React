import { useForm } from '../../../hooks/useForm';
import style from './CreateComment.module.css';
import { useCommentContext } from '../../../contexts/CommentsContext';


export const CreateComment = () => {
    const { onSubmitCreate, error } = useCommentContext();

    const { values, changeHandler, onSubmit, errors } = useForm({
        name: '',
        commentar: '',
    }, onSubmitCreate, {
        name: ['required'],
        commentar: ['required'],
    });

    return (
        <section className={style["comment__section"]}>
            {!!error.length && (<div className='error_serv'>
                {error}
            </div>
            )}
            <h3 className={style["comment__title"]}>Write your Commentar</h3>
            <div className={`shadow ${style["form__container"]}`}>
                <form onSubmit={onSubmit}>
                    <div className={style['comment__name']}>
                        <input type="text" name="name" id="name" value={values.name} onChange={changeHandler} onBlur={changeHandler} placeholder='Your Name' />
                        {errors.name && (<p className='error'>{errors.name}</p>)}
                    </div>

                    <div className={style['comment__commentar']}>
                        <textarea type="text" name="commentar" id="commentar" value={values.commentar} onChange={changeHandler} onBlur={changeHandler} placeholder='Your commentar ...' ></textarea>
                        {errors.commentar && (<p className='error'>{errors.commentar}</p>)}
                    </div>

                    <button className={`btn ${style["btn-publick"]}`}>Publick</button >
                </form >
            </div >
        </section >
    );
}