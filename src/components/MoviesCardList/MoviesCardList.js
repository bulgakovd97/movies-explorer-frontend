import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../utils/movies';
import savedMovies from '../../utils/savedMovies';
import { Route, Switch } from 'react-router';

function MoviesCardList() {
    return (
        <section className='movies-cards'>
            <ul className='elements'>
                <Switch>
                    <Route path='/movies'>
                        {movies.map((movie) => (
                            <MoviesCard
                                movie={movie}
                            />
                        ))}
                    </Route>
                    <Route path='/saved-movies'>
                        {savedMovies.map((movie) => (
                            <MoviesCard
                                movie={movie}
                            />
                        ))}
                    </Route>
                </Switch>
            </ul>
            <Switch>
                <Route path='/movies'>
                    <button className='elements__more-button' type='button'>
                        Ещё
                    </button>
                </Route>
                <Route path='/saved-movies'>
                    <button className='elements__more-button elements__more-button_invisible' type='button'>
                        Ещё
                    </button>
                </Route>
            </Switch>
        </section>
    )
}

export default MoviesCardList;