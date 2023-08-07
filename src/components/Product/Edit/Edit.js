import style from './Edit.module.css';

export const Edit = () => {
    return (
        <section class={style["edit__section"]}>
            <h1>Edit product for salle</h1>
            <div class={`${style["form__container"]} shadow`}>
                <form>
                    <div>
                        <label for="articul">Product Type:</label>
                        <input type="text" name="articul" id="productName" />
                        {/* <ng-container *ngIf="articul.touched"> */}
                        {/* <p class="error" *ngIf="articul.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" *ngIf="articul.errors?.['minlength']">Minimal length is 5 characters</p> */}
                        {/* </ng-container> */}
                    </div >

                    <div>
                        <label for="img">Img:</label>
                        <input type="text" name="img" id="img" />
                        {/* <ng-container *ngIf="img.touched"> */}
                        {/* <p class="error" *ngIf="img.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" * ngIf= "img.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="mark">Mark:</label>
                        <input type="text" name="mark" id="makr" />
                        {/* <ng-container *ngIf="mark.touched"> */}
                        {/* <p class="error" *ngIf="mark.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" * ngIf= "mark.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="model">Model:</label>
                        <input type="text" name="model" id="model" />
                        {/* <ng-container *ngIf="model.touched"> */}
                        {/* <p class="error" *ngIf="model.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" * ngIf="model.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="release">Release:</label>
                        <input type="text" name="release" id="release" />
                        {/* <ng-container *ngIf="release.touched"> */}
                        {/* <p class="error" *ngIf="release.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" * ngIf="release.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >
                    <div>
                        <label for="description">Description:</label>
                        <input type="text" name="description" id="description" />
                        {/* <ng-container *ngIf="description.touched"> */}
                        {/* <p class="error" *ngIf="description.errors?.['required']">Required fields!</p> */}
                        {/* <p class="error" * ngIf="description.errors?.['minlength']" > Minimal length is 5 characters</p > */}
                        {/* </ng - container > */}
                    </div >

                    <button class="btn"> Edit Product</button >
                </form >
            </div >
        </section >
    );
}