import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './AuthPage.css';

function AuthPage({ title, isRegister, buttonTitle }) {

  return (
    <section className="auth-page">
      <div className="auth-page__full-container">
        <Link className="auth-page__logo-link" to="/"><img className="auth-page__logo" src={logo} alt="Логотип"/></Link>
        <h1 className="auth-page__title">{title}</h1>
        <form className="auth-page__form">
          <div className="auth-page__input-container">
            {isRegister &&
            (<>
              <h2 className="auth-page__input-title">Имя</h2>
              <input className="auth-page__input"  type="text" required/>
              <span className="auth-page__input-error"></span>
            </>)}
            <h2 className="auth-page__input-title">E-mail</h2>
            <input className="auth-page__input" type="text" required/>
            <span className="auth-page__input-error"></span>
            <h2 className="auth-page__input-title">Пароль</h2>
            <input className="auth-page__input auth-page__input_error" type="password" required minLength="8"/>
            <span className="auth-page__input-error">Что-то пошло не так...</span>
          </div>
          <button className="auth-page__button">{buttonTitle}</button>
        </form>
        {isRegister ?
        <p className="auth-page__link-text">Уже зарегистрированы?<Link className="auth-page__link" to="/signin">Войти</Link></p> :
        <p className="auth-page__link-text">Ещё не зарегистрированы?<Link className="auth-page__link" to="/signup">Регистрация</Link></p>
        }
      </div>
    </section>
  );
}

export default AuthPage;