import style from './Card.module.css';
import Img from './Img/Img';
import Felicitation from './Felicitation/Felicitation';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTextId } from '../../store/textSlice';
import { fetchImgId } from '../../store/imgSlice';

const Card = () => {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImgId(idImg));
    }
  });

  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <Img />
          <Felicitation />
        </div>
      </div>
    </div>
  );
}

export default Card;