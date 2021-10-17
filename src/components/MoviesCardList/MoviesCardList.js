import { useState, useContext, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route, Switch } from 'react-router';
import { MoviesContext } from '../../contexts/MoviesContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';


function MoviesCardList({ showError, errorMessage, noMoviesFound, noKeyword }) {
    const movies = useContext(MoviesContext);
    const savedMovies = useContext(SavedMoviesContext);

    const [amountOfItemsToShow, setAmountOfItemsToShow] = useState(0);

    const showInitialAmountOfMovie = () => {
        if (window.innerWidth >= 1015) {
            setAmountOfItemsToShow(12);
        } else if (window.innerWidth < 1015 && window.innerWidth >= 590 ) {
            setAmountOfItemsToShow(8);
        } else if (window.innerWidth <= 589) {
            setAmountOfItemsToShow(5);
        } else {
            return;
        }
    };

    const handleMoreClick = () => {
        if (window.innerWidth >= 1015) {
            setAmountOfItemsToShow(amountOfItemsToShow + 3);
        } else {
            setAmountOfItemsToShow(amountOfItemsToShow + 2);
        }
    };

    useEffect(() => {
        showInitialAmountOfMovie();
        window.addEventListener('resize', () => {
            setTimeout(showInitialAmountOfMovie, 2000);
        });


        return () => {
            window.removeEventListener('resize', showInitialAmountOfMovie);
        };
    }, []);


    return (
        <section className='movies-cards'>
            {movies ? (
                <>
                    {(!noMoviesFound && !noKeyword) && (
                        <>
                            <ul className='elements'>
                                <Switch>
                                    <Route path='/movies'>
                                        {movies.map((movie) => (
                                            <MoviesCard
                                                movie={movie}
                                                key={movie.id}
                                            />
                                        )).slice(0, amountOfItemsToShow)}
                                    </Route>
                                    {/* <Route path='/saved-movies'>
                                        {savedMovies.map((movie) => (
                                            <MoviesCard
                                                movie={movie}
                                                key={movie.id}
                                            />
                                        )).slice(0, amountOfItemsToShow)}
                                    </Route> */}
                                </Switch>
                            </ul>

                            {movies.length !== 0 && (
                                <button className={`elements__more-button ${(amountOfItemsToShow < 3 || amountOfItemsToShow >= movies.length) && 'elements__more-button_invisible'}`} type='button' onClick={handleMoreClick}>
                                    Ещё
                                </button>
                            )}
                        </>
                    )}

                    {(noMoviesFound || noKeyword) && (
                        <span className={`movies-cards__error ${showError && 'movies-cards__error_visible'}`}>
                            {errorMessage}
                        </span>
                    )}

                </>
            ) : (
                <span className={`movies-cards__error ${showError && 'movies-cards__error_visible'}`}>
                    {errorMessage}
                </span>
            )}

                        
                            {/* <ul className='elements'>
                                <Switch>
                                    <Route path='/movies'>
                                        {movies && (
                                            movies.map((movie) => (
                                                <MoviesCard
                                                    movie={movie}
                                                    key={movie.id}
                                                />
                                            )).slice(0, amountOfItemsToShow)
                                        )}
                                    </Route>
                                    <Route path='/saved-movies'>
                                        {savedMovies && (
                                            savedMovies.map((movie) => (
                                                <MoviesCard
                                                    movie={movie}
                                                    key={movie.id}
                                                />
                                            )).slice(0, amountOfItemsToShow)
                                        )}
                                    </Route>
                                </Switch>
                            </ul> */}

                            {/* {movies.length !== 0 && (
                                <button className={`elements__more-button ${(amountOfItemsToShow < 3 || amountOfItemsToShow >= movies.length) && 'elements__more-button_invisible'}`} type='button' onClick={handleMoreClick}>
                                    Ещё
                                </button>
                            )} */}

        </section>
    )
}

export default MoviesCardList;