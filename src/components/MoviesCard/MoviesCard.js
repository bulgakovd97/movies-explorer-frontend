import React, { useState } from 'react';
import { moviesUrl } from '../../utils/options';

function MoviesCard({ movie }) {
    const [isLikeClicked, setIsLikeClicked] = useState(false);

    const getTimeFromMins = (mins) => {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;

        const newDuration = hours + 'ч ' + minutes + 'м';
        return newDuration;
    }
    
    const handleLikeClick = () => {
        setIsLikeClicked(!isLikeClicked);
    }
    
    return (
        <li className='card'>
            <a className='card__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img
                    className='card__image'
                    alt={movie.nameRU}
                    src={moviesUrl + movie.image.url}
                />
            </a>
            <div className='card__caption-field'>
                <h2 className='card__title'>
                    {movie.nameRU}
                </h2>
                <div className='card__like'>
                    <button
                        className={`card__like-button ${isLikeClicked && 'card__like-button_active'}`}
                        type='button'
                        aria-label='Лайк'
                        onClick={handleLikeClick}
                    ></button>
                </div>
                <p className='card__duration'>
                    {getTimeFromMins(movie.duration)}
                </p>
            </div>
        </li>
    )
}

export default MoviesCard;