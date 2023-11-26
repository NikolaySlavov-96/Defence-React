import { useProductContext } from '../../../contexts/ProductContext';
import { useForm } from '../../../hooks/useForm';
import style from './Create.module.css';

export const Create = () => {

    const { onSubmitCreateProduct, error } = useProductContext();

    const { values, changeHandler, onSubmit, errors } = useForm({
        articul: '',
        img: '',
        mark: '',
        model: '',
        release: '',
        description: '',
    }, onSubmitCreateProduct, {
        articul: ['required', '5'],
        img: ['required', '5'],
        mark: ['required', '5'],
        model: ['required', '5'],
        release: ['required', '5'],
        description: ['required', '5'],
    });

    return (
        <section className={style["create__section"]}>
            <h1>Create product for salle</h1>
            {!!error.length && (<div className='error_serv'>
                {error}
            </div>
            )}
            <div className={`${style["form__container"]} shadow`}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="articul">Product type:</label>
                        <input type="text" name="articul" id="productName" placeholder="type articul" value={values.articul} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.articul && (<p className='error'>{errors.articul}</p>)}
                    </div >

                    <div>
                        <label htmlFor="img">Img:</label>
                        <input type="text" name="img" id="img" placeholder="http://imgaddres" value={values.img} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.img && (<p className='error'>{errors.img}</p>)}
                    </div >
                    <div>
                        <label htmlFor="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" placeholder="Apple" value={values.mark} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.mark && (<p className='error'>{errors.mark}</p>)}
                    </div >
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" name="model" id="model" placeholder="MackBook Air" value={values.model} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.model && (<p className='error'>{errors.model}</p>)}
                    </div >
                    <div>
                        <label htmlFor="release">Release:</label>
                        <input type="text" name="release" id="release" placeholder="Today" value={values.release} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.release && (<p className='error'>{errors.release}</p>)}
                    </div >
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" placeholder="Perfect quality product" value={values.description} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.description && (<p className='error'>{errors.description}</p>)}
                    </div >

                    <button className="btn">Create new product</button >
                </form >
            </div >
        </section >
    );
}