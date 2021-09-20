import React, { useState } from "react";

function MoviesCard({ movie, children }) {
    const [isLikeClicked, setIsLikeClicked] = useState(false);
    
    const handleLikeClick = () => {
        setIsLikeClicked(!isLikeClicked);
    }
    
    return (
        <li className='card'>
             <img
                className='card__image'
                alt={movie.title}
                src={movie.image}
            />
            <div className='card__caption-field'>
                <h2 className='card__title'>
                    {movie.title}
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
                    {movie.duration}
                </p>
            </div>
        </li>
    )
}

export default MoviesCard;