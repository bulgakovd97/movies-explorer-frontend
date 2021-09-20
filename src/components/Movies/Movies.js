import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
    const [isMoviesLoading, setIsMovieLoading] = useState(false);

    return (
        <section className='movies'>
            <Header />

            <SearchForm />

            {isMoviesLoading ? <Preloader /> : <MoviesCardList />}

            <Footer />
        </section>
    )
}

export default Movies;