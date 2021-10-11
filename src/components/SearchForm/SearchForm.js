function SearchForm({ onSearch, searchTerm, setSearchTerm }) {
    const handleInputChange = (evt) => {
        setSearchTerm(evt.target.value);
    };

    const handleSearch = (evt) => {
        evt.preventDefault();

        onSearch();

        setSearchTerm('');
    };

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
                        <input className='search-form__short-input' type='checkbox' value='short' />
                        <span className='search-form__fake-input'></span>
                    </label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;