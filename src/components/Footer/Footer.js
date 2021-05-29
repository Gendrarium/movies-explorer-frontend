import './Footer.css';

function Footer({ isFooterExsists }) {

  return (
    <>
      {isFooterExsists && (
        <footer className="footer">
          <div className="footer__full-container">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
              <p className="footer__year">&copy; 2021</p>
              <nav className="footer__nav">
                <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com/Gendrarium" target="_blank" rel="noreferrer">Github</a>
              </nav>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;