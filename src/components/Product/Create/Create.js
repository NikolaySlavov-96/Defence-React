import style from './Create.module.css';

export const Create = () => {
    return (
        <section className={style["create__section"]}>
            <h1>Create product for salle</h1>
            <div className={`${style["form__container"]} shadow`}>
                <form>
                    <div>
                        <label for="articul">Product type:</label>
                        <input type="text" name="articul" id="productName" placeholder="type articul" />
                        {/* <ng-container *ngIf="articul.touched"> */}
                        {/* <p className="error" *ngIf="articul.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" *ngIf="articul.errors?.['minlength']">Minimal length is 5 characters</p> */}
                        {/* </ng-container> */}
                    </div >

                    <div>
                        <label for="img">Img:</label>
                        <input type="text" name="img" id="img" placeholder="http://imgaddres" />
                        {/* <ng-container *ngIf="img.touched"> */}
                        {/* <p className="error" *ngIf="img.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="img.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" placeholder="Apple" />
                        {/* <ng-container *ngIf="mark.touched"> */}
                        {/* <p className="error" *ngIf="mark.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="mark.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="model">Model:</label>
                        <input type="text" name="model" id="model"
                            placeholder="MackBook Air" />
                        {/* <ng-container *ngIf="model.touched"> */}
                        {/* <p className="error" *ngIf="model.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="model.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="release">Release:</label>
                        <input type="text" name="release" id="release" placeholder="Today" />
                        {/* <ng-container *ngIf="release.touched"> */}
                        {/* <p className="error" *ngIf="release.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="release.errors?.['minlength']" > Minilam Length is 3 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="description">Description:</label>
                        <input type="text" name="description" id="description" placeholder="Perfect quality product" />
                        {/* <ng-container *ngIf="description.touched"> */}
                        {/* <p className="error" *ngIf="description.errors?.['required']">Fields is Required!</p> */}
                        {/* <p className="error" * ngIf="description.errors?.['minlength']" > Minilam Length is 10 characters</p > */}
                        {/* </ng - container > */}
                    </div >

                    <button className="btn"> Create new product</button >
                </form >
            </div >
        </section >
    );
}