import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import { MoviesContext } from '../../contexts/MoviesContext';
import { errorMessages } from '../../utils/errorMessage';


function Movies( { isLoggedIn, showError, setShowError, errorMessage, setErrorMessage }) {
    const [isMoviesLoading, setIsMoviesLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [noMoviesFound, setNoMoviesFound] = useState(false);
    const [noKeyword, setNoKeyword] = useState(false);

    const { NOT_FOUND,
            NO_KEYWORD,
            SERVER_ERROR } = errorMessages;

    const searchMovies = () => {
        setNoMoviesFound(false);
        setNoKeyword(false);

        return moviesApi
          .getBeatfilmMovies()
          .then(moviesData => {
            setIsMoviesLoading(false);

            setShowError(false);
            setErrorMessage('');

            const keyword = searchTerm.trim();

            if (moviesData) {
                const searchedMovies = moviesData.filter(movie => {
                    if (!keyword) {
                        return null;
                    } else if (movie.nameRU.toLowerCase().includes(keyword.toLowerCase())) {
                        return movie;
                    } else {
                        return null;
                    }
                })

                setMovies(searchedMovies);

                localStorage.setItem('movies', JSON.stringify(searchedMovies));
    
                if (searchedMovies.length === 0 && keyword !== '') {
                    setNoMoviesFound(true);

                    setShowError(true);
                    setErrorMessage(NOT_FOUND);
                } else if (!keyword) {
                    setNoKeyword(true);

                    setShowError(true);
                    setErrorMessage(NO_KEYWORD);
                }
            } else {
                return;
            }
          })
          .catch(err => {
            setShowError(true);
            setErrorMessage(SERVER_ERROR);
          });
    };


    return (
        <MoviesContext.Provider value={movies}>
            <section className='movies'>
                <Header isLoggedIn={isLoggedIn} />

                <SearchForm onSearch={searchMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {isMoviesLoading ? <Preloader /> : <MoviesCardList showError={showError} errorMessage={errorMessage} noMoviesFound={noMoviesFound} noKeyword={noKeyword} />}

                <Footer />
            </section>
        </MoviesContext.Provider>
    )
}

export default Movies;