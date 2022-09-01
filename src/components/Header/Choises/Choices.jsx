import style from './Choices.module.css';
import { useState, useContext } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';

const Choices = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);   
  const {holidays, holiday, changeHoliday} = useContext(holidaysContext);    
 
  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };
  
  return (<div className={style.wrapper}>
    <button className={style.button} onClick={toggleChoises}>
      {holidays[holiday] || 'Выбрать праздник'}
    </button>
    {isOpenChoises && (
      <ul className={style.list}>
        {Object.entries(holidays).map((item) => (
          <li 
            className={style.item} 
            key={item[0]}
            onClick={() => {
              changeHoliday(item[0]);
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