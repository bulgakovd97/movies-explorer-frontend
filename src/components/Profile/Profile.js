import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile() {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [isSaveClicked, setIsSaveClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked(true);
        setIsSaveClicked(false);
    }

    const handleSaveSubmit = (evt) => {
        evt.preventDefault();
        
        setIsSaveClicked(true);
        setIsEditClicked(false);
    }

    return (
        <section className='profile'>
            <Header />

            <div className='profile__container'>
                <h2 className='profile__greeting'>
                    Привет, Денис!
                </h2>
                <form 
                    className='profile__form'
                    name='edit-form'
                    onSubmit={handleSaveSubmit}
                >
                    <fieldset className='profile__form-set'>
                        <div className='profile__input-container'>
                            <label className='profile__label profile__label_type_name' for='name-input'>
                                Имя
                            </label>
                            <input 
                                className='profile__input profile__input_type_name'
                                id='name-input'
                                type='text'
                                name='name'
                                placeholder='Ваше имя'
                                required
                                minLength='2'
                                maxLength='30'
                                defaultValue='Денис'
                            />
                        </div>
                        <div className='profile__input-container'>
                            <label className='profile__label profile__label_type_email' for='email-input'>
                                E-mail
                            </label>
                            <input 
                                className='profile__input profile__input_type_email'
                                id='email-input'
                                type='email'
                                name='email'
                                placeholder='Ваш E-mail'
                                required
                                minLength='2'
                                maxLength='30'
                                defaultValue='bulgakovd@yandex.ru'
                            />
                        </div>
                        <span className='profile__error profile__error_visible'>
                            При обновлении профиля произошла ошибка.
                        </span>
                        <button
                            className={`profile__edit-button ${isEditClicked && 'profile__edit-button_hidden'}`}
                            type='button'
                            onClick={handleEditClick}
                        >
                            Редактировать
                        </button>
                        <Link
                            className={`profile__logout ${isEditClicked && 'profile__logout_hidden'}`}
                            to='/signin'
                        >
                            Выйти из аккаунта
                        </Link>
                        <button
                            className={`profile__save-button ${(!isEditClicked || isSaveClicked) && 'profile__save-button_hidden'}`}
                            type='submit'
                        >
                            Сохранить
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Profile;