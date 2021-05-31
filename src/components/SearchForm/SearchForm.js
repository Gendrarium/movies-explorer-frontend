import React from 'react';
import './SearchForm.css';

function SearchForm() {
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
        <label className={`search__label search__label_input_text ${isInputFocus && 'search__label_input_focus'}`}>
          <input className="search__input" type="text" placeholder="Фильм" onFocus={handleFocusInput} onBlur={handleBlurInput} required/>
          <button className="search__button" type="button"/>
        </label>
        <label className="search__label search__label_input_checkbox">
          <input className="search__checkbox" type="checkbox"/>
          <div className="search__checkbox-replace"/>
          <p className="search__checkbox-text">Короткометражки</p>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;