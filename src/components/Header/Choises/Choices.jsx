import style from './Choices.module.css';
import { useState, useContext, useEffect } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';
import { URI_API } from '../../../const/const';

const Choices = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);   
  const {holiday, setHoliday} = useContext(holidaysContext);
  const [holidays, setHolidays] = useState({});
  
  useEffect(() => {
    fetch(URI_API)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => setHolidays(data))
      .catch(err => console.error(err));      
  }, [setHolidays]);

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