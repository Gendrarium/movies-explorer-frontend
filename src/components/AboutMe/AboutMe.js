import meImg from '../../images/about-me-me.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className="about-me">
      <div className="about-me__full-container">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__text-container">
            <h2 className="about-me__title">Нарек</h2>
            <h3 className="about-me__subtitle">Фронтенд-разработчик, 20 лет</h3>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="about-me__link" href="https://github.com/Gendrarium" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img src={meImg} className="about-me__image" alt="Нарек"/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;