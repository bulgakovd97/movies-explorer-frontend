import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, onSavedSearch, searchTerm, setSearchTerm, checked, setChecked }) {
    const location = useLocation();

    const handleCheckboxChange = (evt) => {
        setChecked(!checked);

        handleSearch(evt);
    };

    const handleInputChange = (evt) => {
        setSearchTerm(evt.target.value);
    };

    const handleSearch = (evt) => {
        evt.preventDefault();

        if (location.pathname === '/movies') {
            onSearch();
        } else if (location.pathname === '/saved-movies') {
            onSavedSearch();
        } else {
            return;
        }
    };

    useEffect(() => {
        setSearchTerm('');
        setChecked(false);
    }, [location.pathname]);


    return (
        <section className='search'>
            <form className='search-form' name='search-form' onSubmit={handleSearch}>
                <fieldset className='search-form__fieldset'>
                    <input
                        className='search-form__input'
                        type='text'
                        name='movies'
                        value={searchTerm}
                        placeholder='Фильм'
                        maxLength='30'
                        onChange={handleInputChange}
                    />
                    <button className='search-form__button' type='submit' />
                </fieldset>
                <div className='search-form__short-wrapper'>
                    <label className='search-form__short-label'>
                        Короткометражки
                        <input className='search-form__short-input' type='checkbox' value='short' checked={checked} onChange={handleCheckboxChange} />
                        <span className='search-form__fake-input'></span>
                    </label>
                </div>
            </form>
            <p className='text'>checked: {checked ? 'true' : 'false'}</p>
        </section>
    )
}

export default SearchForm;