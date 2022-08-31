import style from './Card.module.css';
import Img from './Img/Img';
import imgCardBg from '../../img/card-bg.jpg';
import Felicitation from './Felicitation/Felicitation';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <Img img={imgCardBg}/>
        <Felicitation />
      </div>
    </div>
  </div>
);

export default Card;