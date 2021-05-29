import promoImage from '../../images/promo-image.svg';
import './Promo.css';

function Promo() {

  return (
    <section className="promo">
      <div className="promo__full-container">
        <div className="promo__wrapper">
          <div>
            <h1 className="promo__title">Учебный&nbsp;проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__subtitile">Листайте&nbsp;ниже,&nbsp;чтобы&nbsp;узнать&nbsp;больше про&nbsp;этот проект&nbsp;и&nbsp;его&nbsp;создателя.</p>
          </div>
          <img className="promo__img" alt="web" src={promoImage}/>
        </div>
        <button className="promo__button">Узнать больше</button>
      </div>
    </section>
  );
}

export default Promo;