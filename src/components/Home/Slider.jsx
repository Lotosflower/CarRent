import { useRef, useState } from "react";
import { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Slider = () => {
  const [units, setUnit] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/media")
      .then((res) => res.json())
      .then((json) => setUnit(json));
  }, []);

  let offset = 0; // смещение от левого края
  let sliderLine = useRef();

  const clickPrev = () => {
    const item = [...sliderLine.current.children];
    const itemFirst = item[0];
    // const itemFirstWidth = itemFirst.offsetWidth;
    offset = offset + 350;
    if (offset > 7700) {
      offset = 0;
    }
    itemFirst.style.marginLeft = -offset + `px`;
  };

  const clickNext = () => {
    const item = [...sliderLine.current.children];
    const itemFirst = item[0];
    // const itemFirstWidth = itemFirst.offsetWidth;
    offset = offset - 350;
    if (offset < 0) {
      offset = 7700;
    }
    itemFirst.style.marginLeft = -offset + `px`;
  };

  // setInterval(clickPrev, 5000);

  return (
    <section className={styles.slider}>
      <div className={styles.slider__container}>
        <div className={styles.slider__buttons__context}>
          <div className={styles.slider__context}>
            <h2>Мы предлагаем</h2>
            <p>
              Здесь представлены 24 модели наших авто, которые Вы можете
              просмотртеть и арендовать. <br /> Для заказа авто перейдите
              <Link to="/cars"> по ссылке</Link> или оставте
              <Link to="/contacts"> заявку</Link> и мы Вам обязательно
              перезвоним
            </p>
          </div>
          <div className={styles.slider__buttons}>
            <button
              className={styles.slider__button__prev}
              onClick={() => clickNext()}
            >
              Пред...
            </button>
            <p>/</p>
            <button
              className={styles.slider__button__next}
              onClick={() => clickPrev()}
            >
              След...
            </button>
          </div>
        </div>
        <div className={styles.slider__box}>
          <ul ref={sliderLine} className={styles.slider__line}>
            {units.map((unit, id) => (
              <li className={styles.slider__line__item} key={id}>
                <img src={unit.img} alt="cars" />
                <h3>{unit.title}</h3>
                <img
                  className={styles.slider__line__picture}
                  src={unit.rating}
                  alt="stars"
                />

                <p>{unit.price}BYN/сутки</p>
                <p>{unit.transmission} КПП</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
