import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ handleClosePopup }) {

  return (
    <div className="header__phone-popup">
      <button className="header__phone-close-button" type="button" onClick={handleClosePopup}/>
      <nav className="menu">
        <NavLink exact to="/" className="menu__link menu__link-phone" activeClassName="menu__link_active" onClick={handleClosePopup}>Главная</NavLink>
        <NavLink exact to="/movies" className="menu__link" activeClassName="menu__link_active" onClick={handleClosePopup}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className="menu__link" activeClassName="menu__link_active" onClick={handleClosePopup}>Сохранённые фильмы</NavLink>
        <NavLink to="/profile" className="menu__account-container" onClick={handleClosePopup}><p className="menu__account">Аккаунт</p></NavLink>
      </nav>
    </div>
  )
}

export default Navigation