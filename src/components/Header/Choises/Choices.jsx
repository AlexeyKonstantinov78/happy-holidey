import style from './Choices.module.css';
import React from 'react';

const holiday = {
  newyear: `Новый год`,
  birthdayWomen: `День рождения  Ж`,
  birthdayMen: `День рождения  М`, 
  womenday: `8 марта`,
  knowledgeday: `День знаний`,
}

const Choices = () => (
  <div className={style.wrapper}>
    <button className={style.button}>Выбрать праздник</button>
    <ul className={style.list}>
      {Object.entries(holiday).map((item) => (
        <li className={style.item} key={item[0]}>{item[1]}</li>
      ))}
    </ul> 
  </div>  
);

export default Choices;