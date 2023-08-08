import { useProductContext } from '../../../contexts/ProductContext';
import { useForm } from '../../../hooks/useForm';
import style from './Create.module.css';

export const Create = () => {

    const { onSubmitCreateProduct } = useProductContext();

    const { values, changeHandler, onSubmit, changeValue } = useForm({
        articul: '',
        img: '',
        mark: '',
        model: '',
        release: '',
        description: '',
    }, onSubmitCreateProduct);

    return (
        <section className={style["create__section"]}>
            <h1>Create product for salle</h1>
            <div className={`${style["form__container"]} shadow`}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="articul">Product type:</label>
                        <input type="text" name="articul" id="productName" placeholder="type articul" value={values.articul} onChange={changeHandler} />
                        {/* <ng-container *ngIf="articul.touched"> */}
                        {/* <p className="error" *ngIf="articul.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" *ngIf="articul.errors?.['minlength']">Minimal length is 5 characters</p> */}
                        {/* </ng-container> */}
                    </div >

                    <div>
                        <label htmlFor="img">Img:</label>
                        <input type="text" name="img" id="img" placeholder="http://imgaddres" value={values.img} onChange={changeHandler} />
                        {/* <ng-container *ngIf="img.touched"> */}
                        {/* <p className="error" *ngIf="img.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="img.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" placeholder="Apple" value={values.mark} onChange={changeHandler} />
                        {/* <ng-container *ngIf="mark.touched"> */}
                        {/* <p className="error" *ngIf="mark.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="mark.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" name="model" id="model" placeholder="MackBook Air" value={values.model} onChange={changeHandler} />
                        {/* <ng-container *ngIf="model.touched"> */}
                        {/* <p className="error" *ngIf="model.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="model.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="release">Release:</label>
                        <input type="text" name="release" id="release" placeholder="Today" value={values.release} onChange={changeHandler} />
                        {/* <ng-container *ngIf="release.touched"> */}
                        {/* <p className="error" *ngIf="release.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="release.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" placeholder="Perfect quality product" value={values.description} onChange={changeHandler} />
                        {/* <ng-container *ngIf="description.touched"> */}
                        {/* <p className="error" *ngIf="description.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="description.errors?.['minlength']" > Minilam Length is 10 characters</p > */}
                        {/* </ng - container > */}
                    </div >

                    <button className="btn">Create new product</button >
                </form >
            </div >
        </section >
    );
}