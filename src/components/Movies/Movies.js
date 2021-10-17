import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import { MoviesContext } from '../../contexts/MoviesContext';
import { ERROR_MESSAGES } from '../../utils/errorMessage';


function Movies({ isLoggedIn, showError, setShowError, errorMessage, setErrorMessage, searchTerm, setSearchTerm, noMoviesFound, setNoMoviesFound, noKeyword, setNoKeyword, filterMovies, checked, setChecked }) {
    const [isMoviesLoading, setIsMoviesLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    const { SERVER_ERROR } = ERROR_MESSAGES;

    const searchMovies = () => {
        setNoMoviesFound(false);
        setNoKeyword(false);

        return moviesApi
          .getBeatfilmMovies()
          .then(moviesData => {
            setIsMoviesLoading(false);

            setShowError(false);
            setErrorMessage('');

            const filteredMovies = filterMovies(moviesData);

            setMovies(filteredMovies);
          })
          .catch(err => {
            setShowError(true);
            setErrorMessage(SERVER_ERROR);
          });
    };

    const getSearchedMovies = () => {
      setMovies(JSON.parse(localStorage.getItem('searched-movies')));
    };

    useEffect(() => {
      if (localStorage.getItem('searched-movies') !== '') {
        setIsMoviesLoading(false);
        getSearchedMovies();
      } else {
        setIsMoviesLoading(true);
      }
      
    }, []);


    return (
        <MoviesContext.Provider value={movies}>
            <section className='movies'>
                <Header isLoggedIn={isLoggedIn} />

                <SearchForm onSearch={searchMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} checked={checked} setChecked={setChecked} />

                {isMoviesLoading ? <Preloader /> : <MoviesCardList showError={showError} errorMessage={errorMessage} noMoviesFound={noMoviesFound} noKeyword={noKeyword} />}

                <Footer />
            </section>
        </MoviesContext.Provider>
    )
}

export default Movies;