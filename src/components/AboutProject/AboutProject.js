import './AboutProject.css';

function AboutProject() {

  return (
    <section className="about-project" id="about-project">
      <div className="about-project__full-container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__container">
          <div className="about-project__inscription-container">
            <h3 className="about-project__heading">Дипломный&nbsp;проект&nbsp;включал&nbsp;5 этапов</h3>
            <p className="about-project__inscription">Составление&nbsp;плана,&nbsp;работу&nbsp;над&nbsp;бэкендом,&nbsp;вёрстку, добавление функциональности&nbsp;и&nbsp;финальные доработки.</p>
          </div>
          <div className="about-project__inscription-container">
            <h3 className="about-project__heading">На&nbsp;выполнение&nbsp;диплома&nbsp;ушло&nbsp;5 недель</h3>
            <p className="about-project__inscription">У&nbsp;каждого&nbsp;этапа&nbsp;был&nbsp;мягкий&nbsp;и&nbsp;жёсткий&nbsp;дедлайн, которые&nbsp;нужно&nbsp;было соблюдать,&nbsp;чтобы&nbsp;успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__progress">
          <div className="about-project__progress-backend">
            <p className="about-project__text about-project__text_color_black">1 неделя</p>
          </div>
          <div className="about-project__progress-frontend">
            <p className="about-project__text about-project__text_color_white">4 недели</p>
          </div>
          <p className="about-project__text about-project__text_color_gray">Back-end</p>
          <p className="about-project__text about-project__text_color_gray">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;