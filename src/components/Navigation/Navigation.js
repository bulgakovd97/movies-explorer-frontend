import React, { useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

function Navigation({ isLoggedIn }) {
    const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false);
    
    const handleHamburgerOpen = () => {
        setIsHamburgerMenuClicked(true);
    };

    const handleHamburgerClose = () => {
        setIsHamburgerMenuClicked(false);
    };

    return (
        <Switch>
            {/* <Route exact path='/'>
                <div className='navigation'>
                    <Link className='navigation__register' to='/signup'>
                        Регистрация
                    </Link>
                    <Link className='navigation__login' to='/signin'>
                        <div className='navigation__login-background'>
                            Войти
                        </div>
                    </Link>
                </div>    
            </Route> */}

            {/* <Route>
                <button className='navigation-auth-burger' type='button' onClick={handleHamburgerOpen} />
                <div className={`navigation-auth__popup ${isHamburgerMenuClicked && 'navigation-auth__popup_opened'}`}>
                    <div className='navigation-auth-burger__container'>
                        <button className='navigation-auth__close-button' type='button' onClick={handleHamburgerClose} />
                        <div className='navigation-auth__movies'>
                            <NavLink className='navigation-auth__main-page' activeClassName='navigation__main-page-movies_selected' to='/'>
                                Главная
                            </NavLink>
                            <NavLink className='navigation-auth__all-movies' activeClassName='navigation__all-movies_selected' to='/movies'>
                                Фильмы
                            </NavLink>
                            <NavLink className='navigation-auth__saved-movies' activeClassName='navigation__saved-movies_selected' to='/saved-movies'>
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                        <div className='navigation-auth__account-container'>  
                            <Link className='navigation-auth__account' to='/profile'>
                                Аккаунт
                            </Link>
                            <Link className='navigation-auth__account-icon' to='/profile'>
                            </Link>
                    </div>
                    </div>
                </div>

                <div className='navigation-auth'>
                    <div className='navigation__movies'>
                        <NavLink className='navigation__all-movies' activeClassName='navigation__all-movies_selected' to='/movies'>
                            Фильмы
                        </NavLink>
                        <NavLink className='navigation__saved-movies' activeClassName='navigation__saved-movies_selected' to='/saved-movies'>
                            Сохранённые фильмы
                        </NavLink>
                    </div>
                    <div className='navigation__account-container'>  
                        <Link className='navigation__account' to='/profile'>
                            Аккаунт
                        </Link>
                        <Link className='navigation__account-icon' to='/profile'>
                        </Link>
                    </div>
                </div>
            </Route> */}

            <>
                { isLoggedIn ? (
                    <>
                        <button className='navigation-auth-burger' type='button' onClick={handleHamburgerOpen} />
                        <div className={`navigation-auth__popup ${isHamburgerMenuClicked && 'navigation-auth__popup_opened'}`}>
                            <div className='navigation-auth-burger__container'>
                                <button className='navigation-auth__close-button' type='button' onClick={handleHamburgerClose} />
                                <div className='navigation-auth__movies'>
                                    <NavLink className='navigation-auth__main-page' activeClassName='navigation__main-page-movies_selected' to='/'>
                                        Главная
                                    </NavLink>
                                    <NavLink className='navigation-auth__all-movies' activeClassName='navigation__all-movies_selected' to='/movies'>
                                        Фильмы
                                    </NavLink>
                                    <NavLink className='navigation-auth__saved-movies' activeClassName='navigation__saved-movies_selected' to='/saved-movies'>
                                        Сохранённые фильмы
                                    </NavLink>
                                </div>
                                <div className='navigation-auth__account-container'>  
                                    <Link className='navigation-auth__account' to='/profile'>
                                        Аккаунт
                                    </Link>
                                    <Link className='navigation-auth__account-icon' to='/profile'>
                                    </Link>
                            </div>
                            </div>
                        </div>
        
                        <div className='navigation-auth'>
                            <div className='navigation__movies'>
                                <NavLink className='navigation__all-movies' activeClassName='navigation__all-movies_selected' to='/movies'>
                                    Фильмы
                                </NavLink>
                                <NavLink className='navigation__saved-movies' activeClassName='navigation__saved-movies_selected' to='/saved-movies'>
                                    Сохранённые фильмы
                                </NavLink>
                            </div>
                            <div className='navigation__account-container'>  
                                <Link className='navigation__account' to='/profile'>
                                    Аккаунт
                                </Link>
                                <Link className='navigation__account-icon' to='/profile'>
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='navigation'>
                        <Link className='navigation__register' to='/signup'>
                            Регистрация
                        </Link>
                        <Link className='navigation__login' to='/signin'>
                            <div className='navigation__login-background'>
                                Войти
                            </div>
                        </Link>
                    </div> 
                )}
            </>

        </Switch>
    )
}

export default Navigation;