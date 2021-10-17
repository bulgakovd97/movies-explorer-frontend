import React, { useState } from 'react';
import { MOVIES_URL } from '../../utils/options';
import mainApi from '../../utils/MainApi';
import { useLocation } from 'react-router';


function MoviesCard({ movie }) {
    const [isLiked, setIsLiked] = useState(false);

    const location = useLocation();

    const getTimeFromMins = (mins) => {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;

        const newDuration = hours + 'ч ' + minutes + 'м';
        return newDuration;
    }
    
    // const saveMovie = (movie) => {
    //     return mainApi
    //         .saveMovie({ 
    //             country: movie.country,
    //             director: movie.director,
    //             duration: movie.duration,
    //             year: movie.year,
    //             description: movie.description,
    //             image: MOVIES_URL + movie.image,
    //             trailerLink: movie.trailerLink,
    //             thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
    //             id: movie.id,
    //             nameRU: movie.nameRU,
    //             nameEN: movie.nameEN,
    //         })
    //         .then(movie => console.log(movie.image))
    //         .catch(err => console.log(movie.image));
    // };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        // saveMovie(movie);
        console.log(movie)
    }
    
    return (
        <li className='card'>
            <a className='card__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img
                    className='card__image'
                    alt={movie.nameRU}
                    src={location.pathname === '/movies' ? MOVIES_URL + movie.image.url : movie.image.url}
                />
            </a>
            <div className='card__caption-field'>
                <h2 className='card__title'>
                    {movie.nameRU}
                </h2>
                <div className='card__like'>
                    <button
                        className={location.pathname === '/movies' ? `card__like-button ${isLiked && 'card__like-button_active'}` : 'card__delete-button'}
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