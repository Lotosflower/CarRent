import styles from "./Cart.module.css";
import { CartItems } from "./CartItems";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.cart__img}>
        <div className={styles.cart__offer}>
          <h1>Корзина</h1>
          <p>
            Здесь Вы сможете просмотреть авто которые Вас заинтересовали и
            сделать свой выбор , позвонив нам или заполнив заявку на вкладке
            <Link to="/contacts"> контакты</Link>.
          </p>
        </div>
      </div>
      <CartItems />
    </section>
  );
};
