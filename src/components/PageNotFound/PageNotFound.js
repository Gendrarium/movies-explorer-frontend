import Helmet from 'react-helmet';
import React from "react";
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound({ setIsHeaderExsists, setIsFooterExsists}) {

  React.useEffect(()=> {
    setIsHeaderExsists(false);
    setIsFooterExsists(false);
  }, [setIsHeaderExsists, setIsFooterExsists])

  return (
    <>
    <Helmet>
      <title>Страница не найдена</title>
    </Helmet>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link className="not-found__button" to='/movies'>Назад</Link>
      </section>
    </>
  );
}

export default PageNotFound;