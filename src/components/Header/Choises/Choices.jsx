import style from './Choices.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';

const Choices = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);   
  const { holiday, holidays, loading } = useSelector(state => state.holidays);     
  const dispatch = useDispatch();

  const toggleChoises = () => {
    if(loading !== 'success') return;
    setIsOpenChoises(!isOpenChoises);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);
  
  return (<div className={style.wrapper}>
    <button className={style.button} onClick={toggleChoises}>
      {loading !== 'success' ? 
        'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}
    </button>
    {isOpenChoises && (
      <ul className={style.list}>
        {Object.entries(holidays).map((item) => (
          <li 
            className={style.item} 
            key={item[0]}
            onClick={() => {
              dispatch(setHoliday(item[0]));
              dispatch(fetchText(item[0]));
              toggleChoises();
            }}
          >{item[1]}
          </li>
        ))}
      </ul>)
    }
  </div>)
};

export default Choices;