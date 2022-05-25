import styles from "./About.module.css";
import { Team } from "./Team";
import { Staff } from "./Staff";
import { History } from "./History";

export const About = () => {
  return (
    <>
      <div className={styles.about__img}>
        <div className={styles.about__offer}>
          <h1>О нас</h1>
          <p>
            В этом разделе Вы узнаете немного о нашем истории и нашем маленьком
            коллективе
          </p>
        </div>
      </div>

      <Team />
      <Staff />
      <History />
    </>
  );
};
