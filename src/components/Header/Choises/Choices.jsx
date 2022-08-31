import style from './Choices.module.css';
import React, { useState } from 'react';

const holidays = {
  newyear: `Новый год`,
  birthdayWomen: `День рождения  Ж`,
  birthdayMen: `День рождения  М`, 
  womenday: `8 марта`,
  knowledgeday: `День знаний`,
}

const Choices = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false); 
  const [holday, setHoliday] = useState('Выбрать праздник');
  
  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  const changeHoliday = title => {
    setHoliday(title);
    toggleChoises();
  }

  return (<div className={style.wrapper}>
    <button className={style.button} onClick={toggleChoises}>{holday}</button>
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