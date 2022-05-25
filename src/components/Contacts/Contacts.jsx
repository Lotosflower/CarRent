import { FormOrder } from "./FormOrder";
import styles from "./Contacts.module.css";
import { Location } from "./Location";

export const Contacts = () => {
  return (
    <>
      <div className={styles.contacts__img}>
        <div className={styles.contacts__offer}>
          <h1>Наши контакты</h1>
          <p>
            В этом разделе Вы узнаете о всех возможных способах связи с нами
            используя телефон, карту и e-mail .
          </p>
        </div>
      </div>
      <FormOrder />
      <Location />
    </>
  );
};
