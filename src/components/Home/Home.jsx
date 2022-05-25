import styles from "./Home.module.css";
import Carousel from "./Carousel";
// import { FormOrder } from "./FormOrder";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__image}></div>
      <div>
        <Slider />
        <Carousel />
      </div>
    </div>
  );
};
