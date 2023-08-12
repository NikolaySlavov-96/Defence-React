import { Link } from 'react-router-dom';
import style from './Login.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';

export const Login = () => {

    const { onSubmitLogin } = useAuthContext();

    const { values, changeHandler, onSubmit, errors } = useForm({
        username: '',
        password: '',
    }, onSubmitLogin, {
        username: ['required'],
        password: ['required'],
    });
    return (
        <section className={style["login__section"]}>
            <h1 className={style["login__title"]}>Login Page</h1>
            <div className={`shadow ${style["form__container"]}`}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={values.username} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.username && (<p className='error'>{errors.username}</p>)}
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={values.password} onChange={changeHandler} onBlur={changeHandler} />
                        {errors.password && (<p className='error'>{errors.password}</p>)}
                    </div>

                    <button className={`btn ${style["btn-login"]}`}> Login in</button >
                    <p className={style["login__account"]}>Don't have a account <Link to="/auth/register">Sign In</Link></p>
                </form >
            </div >
        </section >
    );
}