function SearchForm() {
    return (
        <section className='search'>
            <form className='search-form' name='search-form'>
                <fieldset className='search-form__fieldset'>
                    <input
                        className='search-form__input'
                        type='text'
                        name='movies'
                        placeholder='Фильм'
                        required
                        minLength='2'
                        maxLength='30'
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