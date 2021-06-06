import React from 'react';
import './SearchForm.css';

function SearchForm({ handleSetShortFilm, values, handleChange, handleSubmit }) {
  const [isInputFocus, setIsInputFocus] = React.useState(false);

  function handleFocusInput() {
    setIsInputFocus(true);
  }

  function handleBlurInput() {
    setIsInputFocus(false);
  }

  return (
    <section className="search">
      <div className="search__full-container">
        <form onSubmit={handleSubmit}>
          <label className={`search__label search__label_input_text ${isInputFocus && 'search__label_input_focus'}`}>
            <input className="search__input" type="text" name="search" placeholder="Фильм" onFocus={handleFocusInput}  value={values.search || ''} onChange={handleChange} onBlur={handleBlurInput} required/>
            <button className="search__button" type="submit"/>
          </label>
        </form>
        <label className="search__label search__label_input_checkbox">
          <input className="search__checkbox" type="checkbox" onClick={handleSetShortFilm}/>
          <div className="search__checkbox-replace"/>
          <p className="search__checkbox-text">Короткометражки</p>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;