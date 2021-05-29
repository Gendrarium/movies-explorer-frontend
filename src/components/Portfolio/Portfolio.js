import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__full-container">
        <h2 className="portfolio__title">Портфолио</h2>
        <a className="portfolio__link" href="https://github.com/Gendrarium/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
        <a className="portfolio__link" href="https://github.com/Gendrarium/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        <a className="portfolio__link" href="https://github.com/Gendrarium/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
      </div>
    </section>
  );
}

export default Portfolio;