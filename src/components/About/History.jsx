import styles from "./About.module.css";
import Logo from "../../assets/images/logo.jpg";

export const History = () => {
  return (
    <section className={styles.history}>
      <div className={styles.about__container}>
        <div className={styles.history__action}>
          <div className={styles.history__right}>
            <p className={styles.history__right__title}>Наша история</p>
            <p>
              Наша история начиналась с небольшого автопарка люксовых авто и
              тогда мы назывались "ROYALCARS", немного позже мы расширили наш
              автопарк, приобрели автомобили разных ценовых категорий. "CarRent"
              - так мы сейчас называемся. Теперь у наших клиентов есть
              возможность арендовать автомобили в разном ценовом диапазоне.
            </p>
          </div>

          <div className={styles.history__left}>
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
