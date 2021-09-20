import Logo from '../Logo/Logo';
import ProfileForm from '../ProfileForm/ProfileForm';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className='login'>
            <div className='login__container'>
                <Logo />

                <h2 className='login__greeting'>
                    Рады видеть!
                </h2>

                <ProfileForm formName='login'>
                    <label className='profile-form__label profile-form__label_type_email' for='email-input'>
                        E-mail
                    </label>
                    <input
                        className='profile-form__input profile-form__input_type_email'
                        id='email-input'
                        type='email'
                        name='email'
                        placeholder='Введите Email'
                        required
                        minLength='2'
                        maxLength='30'
                    />
                    <span className='profile-form__error profile-form__error_visible'>
                        Что-то пошло не так...
                    </span>
                    <label className='profile-form__label profile-form__label_type_password' for='password-input'>
                        Пароль
                    </label> 
                    <input
                        className='profile-form__input profile-form__input_type_password'
                        id='password-input'
                        type='password'
                        name='password'
                        placeholder='Введите пароль'
                        required
                        minLength='6'
                        maxLength='20'
                    />
                    <span className='profile-form__error profile-form__error_visible'>
                        Что-то пошло не так...
                    </span>
                    <button className='profile-form__button profile-form__button_type_signin' type='submit'>
                        Войти
                    </button>
                    <div className='profile-form__caption'>
                        <p className='profile-form__caption-text'>
                            Ещё не зарегистрированы?
                        </p>
                        <Link className='profile-form__caption-link' to='/signup'>
                            Регистрация
                        </Link>
                    </div>
                </ProfileForm>
            </div>
        </section>
    )
}

export default Login;