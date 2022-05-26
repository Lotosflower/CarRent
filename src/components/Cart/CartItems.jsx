import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../Store";

export const CartItems = () => {
  const { cart, setCart } = useContext(Context);

  const handleDelete = (idDelete) => {
    const newDel = cart.filter(({ id }) => id !== idDelete);
    setCart(newDel);
  };

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__container}>
        <div className={styles.cart__top}>
          <p>
            Этот раздел поможет вам просмотреть выбранные авто, обдумать и
            принять решение
          </p>
        </div>
        {cart.map((item) => {
          return (
            <div className={styles.cart__content} key={item.id}>
              <ul className={styles.cart__items}>
                <li className={styles.cart__item}>
                  <div className={styles.cart__item__img}>
                    <img src={item.img} alt="car" />
                  </div>
                  <div className={styles.cart__description}>
                    <div className={styles.cart__description__title}>
                      {item.title}
                    </div>
                    <div className={styles.cart__description__price}>
                      {item.price} BYN/Сутки
                    </div>
                    <div className={styles.cart__description__fuel}>
                      Двигатель: {item.fuel}
                    </div>
                    <div className={styles.cart__description__transmission}>
                      КПП: {item.transmission}
                    </div>

                    <button
                      className={styles.cart__button}
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              </ul>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
