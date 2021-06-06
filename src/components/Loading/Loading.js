import Preloader from '../Preloader/Preloader';
import './Loading.css';

function Loading() {

  return (
    <section className="loading">
      <Preloader isVisible={true}/>
    </section>
  )
}

export default Loading;