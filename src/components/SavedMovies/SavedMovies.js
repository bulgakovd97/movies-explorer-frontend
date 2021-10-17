import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import mainApi from '../../utils/MainApi';


function SavedMovies({ isLoggedIn, showError, setShowError, errorMessage, setErrorMessage, searchTerm, setSearchTerm, noMoviesFound, setNoMoviesFound, noKeyword, setNoKeyword, filterMovies, checked, setChecked, isLiked, onMovieLike }) {
    const [savedMovies, setSavedMovies] = useState([]);

    const searchSavedMovies = () => {
        console.log(savedMovies);
    };

    const getSavedMovies = () => {
        return mainApi
            .getMovies()
            .then(savedMoviesData => {
                console.log(savedMoviesData);
                setSavedMovies(savedMoviesData);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getSavedMovies();
    }, []);
    

    return (
        <SavedMoviesContext.Provider value={savedMovies}>
            <section className='saved-movies'>
                <Header isLoggedIn={isLoggedIn} />

                <SearchForm onSavedSearch={searchSavedMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} checked={checked} setChecked={setChecked} />

                <MoviesCardList showError={showError} errorMessage={errorMessage} noMoviesFound={noMoviesFound} noKeyword={noKeyword} isLiked={isLiked} onMovieLike={onMovieLike} />

                <Footer />
            </section>
        </SavedMoviesContext.Provider>
    )
}

export default SavedMovies;