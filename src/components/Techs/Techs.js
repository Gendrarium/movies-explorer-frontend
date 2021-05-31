import './Techs.css';

function Techs() {

  return (
    <section className="techs">
      <div className="techs__full-container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__container">
          <h2 className="techs__heading">7&nbsp;технологий</h2>
          <p className="techs__text">На&nbsp;курсе&nbsp;веб-разработки&nbsp;мы&nbsp;освоили&nbsp;технологии, которые&nbsp;применили в дипломном&nbsp;проекте.</p>
        </div>
        <ul className="techs__list">
          <li className="techs__item"><p className="techs__item-text">HTML</p></li>
          <li className="techs__item"><p className="techs__item-text">CSS</p></li>
          <li className="techs__item"><p className="techs__item-text">JS</p></li>
          <li className="techs__item"><p className="techs__item-text">React</p></li>
          <li className="techs__item"><p className="techs__item-text">Git</p></li>
          <li className="techs__item"><p className="techs__item-text">Express.js</p></li>
          <li className="techs__item"><p className="techs__item-text">mongoDB</p></li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;