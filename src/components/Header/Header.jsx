import styles from "./Header.module.css";
import { Nav } from "../Nav/Nav";
import BurgerMenu from "./Menu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <BurgerMenu />
    </header>
  );
};
