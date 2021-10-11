import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn }) {
    return (
        <section className='saved-movies'>
            <Header isLoggedIn={isLoggedIn} />

            <SearchForm />

            <MoviesCardList />

            <Footer />
        </section>
    )
}

export default SavedMovies;