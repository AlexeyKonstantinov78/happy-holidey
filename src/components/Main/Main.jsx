import Container from '../Container/Container';
import style from './Main.module.css';
import img from '../../img/card-bg.jpg';


const Main = () => (
  <main className={style.main}>
    <Container>
      <div className={style.card}>
          <div className={style.wrapper}>
            <div className={style.image}>
              <img className={style.img} src={img} alt="card-bg" />              
              <p className={style.felicitation}>
                Поздравляю с днем рожденья!
                Пусть будет жизнь полна веселья,
                Не будет грусти и хлопот,
                А только счастье круглый год!

                Желаю творческих успехов,
                Прекрасных дней, улыбок, смеха.
                Любви, душевного тепла,
                Как сказка, чтобы жизнь была!
              </p>
            </div>
          </div>
      </div>
    </Container>
  </main>
);

export default Main;