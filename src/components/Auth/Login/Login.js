import { Link } from 'react-router-dom';
import style from './Login.module.css';

export const Login = () => {
    return (
        <section className={style["login__section"]}>
            <h1 className={style["login__title"]}>Login Page</h1>
            <div className={`shadow ${style["form__container"]}`}>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" />
                        {/* <ng-container *ngIf="username.touched"> */}
                        {/* <p className="error" *ngIf="username?.errors?.['required']">Required fields!</p> */}
                        {/* </ng-container> */}
                    </div>

                    <div className="password">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                        {/* <ng-container *ngIf="password.touched"> */}
                        {/* <p className="error" *ngIf="password?.errors?.['required']">Required fields!</p> */}
                        {/* </ng-container> */}
                    </div>

                    <button className={`btn ${style["btn-login"]}`}> Login in</button >
                    <p className={style["login__account"]}>Don't have a account <Link to="/auth/register">Sign In</Link></p>
                </form >
            </div >
        </section >
    );
}