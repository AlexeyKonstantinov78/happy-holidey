import { useSelector } from 'react-redux';
import style from './Felicitation.module.css';

const Felicitation = () => {
  const {text, loading} = useSelector(state => state.text);
  
  console.log(text);
  return (
  <p className={style.felicitation}>
    {loading === 'loading' ? 'Загрузка...' : 
      text === '' ? 'Выберите повод для поздравления!' : text}    
  </p>
)};

export default Felicitation;