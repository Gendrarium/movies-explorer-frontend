import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isColorBlack, isHeaderExsists, loggedIn }) {

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  function handleOpenPopup() {
    setIsOpenPopup(true);
  }

  function handleClosePopup() {
    setIsOpenPopup(false);
  }

  return (
    <>
    { isHeaderExsists && (
    <header className={`header ${ isColorBlack ? 'header_bg_black' : ''}`}>
      <div className="header__wrapper">
        <Link className="header__logo-link" to="/"><img className="header__logo" alt="Логотип" src={logo}/></Link>
        <div className="header__link-container">
          {loggedIn ?
          <div className={`header__nav-container ${isOpenPopup ? '' : 'header__nav-container_close'}`}><Navigation handleClosePopup={handleClosePopup}/></div>
          :
          (<>
            <Link className="header__link header__link_signup" to="/signup">Регистрация</Link>
            <Link className="header__link header__link_signin" to="/signin">Войти</Link>
          </>)}
        </div>
        {loggedIn && <button className={`header__phone-button ${isOpenPopup ? 'header__phone-button_hidden' : ''}`}type="button" onClick={handleOpenPopup}/>}
      </div>
    </header>
    )}
    </>
  );
}

export default Header;