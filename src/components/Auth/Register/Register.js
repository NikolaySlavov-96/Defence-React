import { Link } from 'react-router-dom';
import style from './Register.module.css';

export const Register = () => {
    return (
        <section className={style["register__section"]}>
            <div className={`shadow ${style["form__container"]}`}>
                <form>
                    <div className="email">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                        {/* <ng-container *ngIf="form.get('email')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('email')?.errors?.['required']">Required fields!</p> */}
                        {/* </ng-container> */}
                    </div>

                    <div className="username">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                        {/* <ng-container *ngIf="form.get('username')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('username')?.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" *ngIf="form.get('username')?.errors?.['minlength']">Minimal length is 6 characters */}
                        {/* </p> */}
                        {/* </ng-container> */}
                    </div >

                    {/* <ng-container formGroupName="pass"> */}
                    <div className="password">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                        {/* <ng-container *ngIf="form.get('pass')?.get('password')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('pass')?.get('password')?.errors?.['required']">Required */}
                        {/* fields!</p> */}
                        {/* <p className="error" *ngIf="form.get('pass')?.get('password')?.errors?.['minlength']">Minimal length */}
                        {/* is 5 characters</p> */}
                    </div >
                    {/* </ng-container> */}

                    <div className="repeatPassword">
                        <label for="rePassword">Repeat Password</label>
                        <input type="password" id="rePassword" />

                        {/* <ng-container */}
                        {/* *ngIf="form.get('pass')?.errors?.['sameValueGroupValidator'] && form.get('pass')?.get('rePassword')?.touched"> */}
                        {/* <p className="error">Repeat Password don't match</p> */}
                        {/* </ng-container> */}
                        {/* </ng - container > */}
                    </div>

                    <div className="year">
                        <label for="year">Year</label>
                        <input type="number" id="year" />
                        {/* <ng-container *ngIf="form.get('year')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('year')?.errors?.['required']">Required fields!</p> */}
                        {/* </ng-container> */}
                    </div >

                    <button className={`btn ${style["btn-register"]}`}> Register</button >
                    <p className={style["register__account"]}>Have a account <Link to="/auth/login">Sign Up</Link></p>
                </form >
            </div >
        </section >
    );
}