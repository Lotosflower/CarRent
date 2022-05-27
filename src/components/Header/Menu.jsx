import {
  SettingOutlined,
  HomeOutlined,
  ToolOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  WechatOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Меню ", "sub4", <SettingOutlined />, [
    getItem(
      <Link to="/">
        Главная <HomeOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/services">
        Сервис <ToolOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/cars">
        Авто <CarOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/about">
        О нас <UserOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/blog">
        Блог <WechatOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/contacts">
        Контакты <ContactsOutlined className={styles.menu__home} />
      </Link>
    ),
    getItem(
      <Link to="/cart">
        Корзина <ShoppingCartOutlined className={styles.menu__home} />
      </Link>
    ),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const _Menu = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      className={styles.menu}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        position: "fixed",
        top: 70,
        left: 0,
        bottom: 800,
        height: 55,
        width: 275,
        zIndex: 150,
        fontSize: 24,

        // backgroundColor: "goldenrod",
      }}
      items={items}
    />
  );
};

export default _Menu;
