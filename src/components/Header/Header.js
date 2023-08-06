import { NavLink } from "react-router-dom";

import style from './Header.module.css';

export const Header = () => {

    const { isAuthenticated } = { isAuthenticated: true }

    return (
        <header>
            <nav className="shadow">
                <div className={style["header__logo"]}>
                    <NavLink to="/"><i className="fas fa-server"></i></NavLink>
                </div>
                <div className={style["header__menu"]}>
                    <ul>
                        <li><NavLink to="/product/catalog">Catalog</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    {isAuthenticated && (<ul>
                        <li><NavLink to="/auth/register">Register</NavLink></li>
                        <li><NavLink to="/auth/login">Login</NavLink></li>
                    </ul>)}
                    {!isAuthenticated && (<ul>
                        <li><NavLink to="/home"><i className="fas fa-home"></i>Home</NavLink></li>
                        <li><NavLink to="/product/create">Create</NavLink></li>
                        <li><NavLink to="/profil">user?.username's profile</NavLink></li>
                        <li><NavLink to="/auth/logout">Logout</NavLink></li>
                    </ul>)}
                </div>
            </nav >
        </header >
    );
}