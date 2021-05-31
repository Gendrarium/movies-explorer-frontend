import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import React from 'react';
import Helmet from 'react-helmet';
import './Main.css';

function Main({ setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists }) {

  React.useEffect(() => {
    setIsHeaderColorBlack(false);
    setIsHeaderExsists(true);
    setIsFooterExsists(true);
  }, [setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
    <Helmet>
      <title>Главная страница</title>
    </Helmet>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </>
  );
}

export default Main;