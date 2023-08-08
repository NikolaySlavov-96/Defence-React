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

    const { values, changeHandler, onSubmit, changeValue } = useForm({
        articul: '',
        img: '',
        mark: '',
        model: '',
        release: '',
        description: '',
    }, onSubmitEditProduct);


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
                        <input type="text" name="articul" id="productName" value={values.articul} onChange={changeHandler} />
                        {/* <ng-container *ngIf="articul.touched"> */}
                        {/* <p className="error" *ngIf="articul.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" *ngIf="articul.errors?.['minlength']">Minimal length is 5 characters</p> */}
                        {/* </ng-container> */}
                    </div >

                    <div>
                        <label htmlFor="img">Img:</label>
                        <input type="text" name="img" id="img" value={values.img} onChange={changeHandler} />
                        {/* <ng-container *ngIf="img.touched"> */}
                        {/* <p className="error" *ngIf="img.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" * ngIf= "img.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" value={values.mark} onChange={changeHandler} />
                        {/* <ng-container *ngIf="mark.touched"> */}
                        {/* <p className="error" *ngIf="mark.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" * ngIf= "mark.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" name="model" id="model" value={values.model} onChange={changeHandler} />
                        {/* <ng-container *ngIf="model.touched"> */}
                        {/* <p className="error" *ngIf="model.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" * ngIf="model.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="release">Release:</label>
                        <input type="text" name="release" id="release" value={values.release} onChange={changeHandler} />
                        {/* <ng-container *ngIf="release.touched"> */}
                        {/* <p className="error" *ngIf="release.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" * ngIf="release.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" value={values.description} onChange={changeHandler} />
                        {/* <ng-container *ngIf="description.touched"> */}
                        {/* <p className="error" *ngIf="description.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" * ngIf="description.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >

                    <button className="btn">Edit Product</button >
                </form >
            </div >
        </section >
    );
}