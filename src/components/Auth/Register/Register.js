import { Link } from 'react-router-dom';
import style from './Register.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';

export const Register = () => {
    const { onSubmitRegister } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        rePassword: '',
        year: '',
    }, onSubmitRegister);

    return (
        <section className={style["register__section"]}>
            <div className={`shadow ${style["form__container"]}`}>
                <form onSubmit={onSubmit}>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name='email' value={values.email} onChange={changeHandler} />
                        {/* <ng-container *ngIf="form.get('email')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('email')?.errors?.['required']">Required fields!</p> */}
                        {/* </ng-container> */}
                    </div>

                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name='username' value={values.username} onChange={changeHandler} />
                        {/* <ng-container *ngIf="form.get('username')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('username')?.errors?.['required']">Required fields!</p> */}
                        {/* <p className="error" *ngIf="form.get('username')?.errors?.['minlength']">Minimal length is 6 characters */}
                        {/* </p> */}
                        {/* </ng-container> */}
                    </div >

                    {/* <ng-container formGroupName="pass"> */}
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' value={values.password} onChange={changeHandler} />
                        {/* <ng-container *ngIf="form.get('pass')?.get('password')?.touched"> */}
                        {/* <p className="error" *ngIf="form.get('pass')?.get('password')?.errors?.['required']">Required */}
                        {/* fields!</p> */}
                        {/* <p className="error" *ngIf="form.get('pass')?.get('password')?.errors?.['minlength']">Minimal length */}
                        {/* is 5 characters</p> */}
                    </div >
                    {/* </ng-container> */}

                    <div className="repeatPassword">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <input type="password" id="rePassword" name='rePassword' value={values.rePassword} onChange={changeHandler} />

                        {/* <ng-container */}
                        {/* *ngIf="form.get('pass')?.errors?.['sameValueGroupValidator'] && form.get('pass')?.get('rePassword')?.touched"> */}
                        {/* <p className="error">Repeat Password don't match</p> */}
                        {/* </ng-container> */}
                        {/* </ng - container > */}
                    </div>

                    <div className="year">
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name='year' value={values.year} onChange={changeHandler} />
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