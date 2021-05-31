import Helmet from 'react-helmet';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

function SavedMovies({ setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists }) {

  React.useEffect(() => {
    setIsHeaderColorBlack(true);
    setIsHeaderExsists(true);
    setIsFooterExsists(true);
  }, [setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
      <Helmet>
        <title>Сохранённые фильмы</title>
      </Helmet>
      <SearchForm/>
      <Preloader/>
      <MoviesCardList/>
    </>
  );
}

export default SavedMovies;