import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Store";
import { CarOutlined } from "@ant-design/icons";

export const Nav = () => {
  const { cart } = useContext(Context);
  const getCartCount = () => {
    let amount = 0;

    if (cart.length === 0) {
      return amount;
    } else {
      amount = cart.reduce((total, item) => total + item.count, 0);

      return amount;
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div>
          <Link to="/">CarRent</Link>
        </div>

        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/services">Сервис</Link>
          </li>
          <li>
            <Link to="/cars">Авто</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/cart">
              <CarOutlined
                style={{
                  color: "black",
                  marginRight: "10px",
                }}
              />
              {getCartCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
