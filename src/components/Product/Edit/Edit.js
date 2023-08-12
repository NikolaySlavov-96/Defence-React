import { useParams } from 'react-router-dom';
import { useProductContext } from '../../../contexts/ProductContext';
import style from './Edit.module.css';
import { useService } from '../../../hooks/useService';
import { productServiceFactory } from '../../../services/product';
import { useForm } from '../../../hooks/useForm';
import { useEffect } from 'react';

export const Edit = () => {
    const { onSubmitEditProduct } = useProductContext();
    const { id } = useParams();
    const productService = useService(productServiceFactory);

    const { values, changeHandler, onSubmit, changeValue, errors } = useForm({
        articul: '',
        img: '',
        mark: '',
        model: '',
        release: '',
        description: '',
    }, onSubmitEditProduct, {
        articul: ['required', '5'],
        img: ['required', '5'],
        mark: ['required', '5'],
        model: ['required', '5'],
        release: ['required', '5'],
        description: ['required', '5'],
    });


    useEffect(() => {
        productService.getProduct(id)
            .then(req => {
                changeValue(req[0]);
            })
    }, [id]);

    return (
        <section className={style["edit__section"]}>
            <h1>Edit product for salle</h1>
            <div className={`${style["form__container"]} shadow`}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="articul">Product Type:</label>
                        <input type="text" name="articul" id="productName" value={values.articul} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.articul && (<p className='error'>{errors.articul}</p>)}
                    </div >

                    <div>
                        <label htmlFor="img">Img:</label>
                        <input type="text" name="img" id="img" value={values.img} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.img && (<p className='error'>{errors.img}</p>)}
                    </div >
                    <div>
                        <label htmlFor="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" value={values.mark} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.mark && (<p className='error'>{errors.mark}</p>)}
                    </div >
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" name="model" id="model" value={values.model} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.model && (<p className='error'>{errors.model}</p>)}
                    </div >
                    <div>
                        <label htmlFor="release">Release:</label>
                        <input type="text" name="release" id="release" value={values.release} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.release && (<p className='error'>{errors.release}</p>)}
                    </div >
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" value={values.description} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.description && (<p className='error'>{errors.description}</p>)}
                    </div >

                    <button className="btn">Edit Product</button >
                </form >
            </div >
        </section >
    );
}