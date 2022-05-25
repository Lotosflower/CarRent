import { Carousel } from "antd";
import styles from "./Home.module.css";
import Picture from "../../assets/images/logan.jpg";
import Picture2 from "../../assets/images/logan2.jpg";
import Picture3 from "../../assets/images/logan3.jpg";
import Picture4 from "../../assets/images/logan4.jpg";

const _Carousel = () => {
  // const contentStyle = {
  //     height: '200px',
  //     color: 'orange',
  //     lineHeight: '200px',
  //     textAlign: 'center',
  //     background: '#364d79',
  //     borderRadius: '40px 10px',
  //     border: 'solid 5px olive'
  // };

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__offer}>
          <p>
            Акция!{" "}
            <span>
              Это лучшее предложение, что может быть на рынке проката авто!
            </span>
          </p>
        </div>
        <Carousel autoplay effect="fade">
          <div>
            <p className={styles.carousel__title}>Горячее предложение!!!</p>
          </div>

          <div>
            <h2 className={styles.carousel__title}>
              Аренда Рено Логан от 3-х суток! Скидка 15 %
            </h2>
          </div>
          <div className={styles.carousel__title}>
            <div className={styles.carousel__img}>
              <img src={Picture} alt="car" />
              <img src={Picture2} alt="car" />
              <img src={Picture3} alt="car" />
              <img src={Picture4} alt="car" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default _Carousel;
