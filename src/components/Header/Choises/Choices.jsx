import style from './Choices.module.css';
import { useState, useContext } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';

const holidays = {
  newyear: `Новый год`,
  birthdayWomen: `День рождения  Ж`,
  birthdayMen: `День рождения  М`, 
  womenday: `8 марта`,
  knowledgeday: `День знаний`,
};

const Choices = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);   
  const {holiday, setHoliday} = useContext(holidaysContext);
  
  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  const changeHoliday = title => {
    setHoliday(title);
    toggleChoises();
  };

  return (<div className={style.wrapper}>
    <button className={style.button} onClick={toggleChoises}>{holiday}</button>
    {isOpenChoises && (
      <ul className={style.list}>
        {Object.entries(holidays).map((item) => (
          <li 
            className={style.item} 
            key={item[0]}
            onClick={() => {
              changeHoliday(item[1])              
            }}
          >{item[1]}
          </li>
        ))}
      </ul>)
    }
  </div>)
};

export default Choices;