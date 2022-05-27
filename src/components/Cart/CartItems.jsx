import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../Store";
import { Modal } from "antd";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useState } from "react";

function success(values) {
  console.log(values);
  Modal.success({
    content: (
      <div className={styles.form__modal}>
        <p>Ваша заявка успешно принята!</p>
        <p>
          Она будет обработана и наш менеджер перезвонит Вам в течении 15 минут!
        </p>
        <p>Приятного Вам путешествия</p>
      </div>
    ),
  });
}

const { Option } = Select;

export const CartItems = () => {
  const { cart, setCart } = useContext(Context);

  const handleDelete = (idDelete) => {
    const newDel = cart.filter(({ id }) => id !== idDelete);
    setCart(newDel);
  };

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart]);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="44">44</Option>
        <Option value="33">33</Option>
        <Option value="29">29</Option>
        <Option value="25">25</Option>
      </Select>
    </Form.Item>
  );

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
                    <div className={styles.cart__buttons}>
                      <button
                        className={styles.cart__button__delete}
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Удалить
                      </button>
                      <button
                        className={styles.cart__button__order}
                        onClick={showDrawer}
                      >
                        Заказать
                      </button>
                    </div>

                    <Drawer
                      title="Аренда авто"
                      width={300}
                      onClose={onClose}
                      visible={visible}
                      bodyStyle={{
                        paddingBottom: 80,
                      }}
                      extra={
                        <Space>
                          <Button onClick={onClose}>Закрыть</Button>
                          <Button onClick={onClose} type="primary">
                            Подтвердить
                          </Button>
                        </Space>
                      }
                    >
                      <Form layout="vertical" hideRequiredMark>
                        <Form.Item
                          label="Имя"
                          name="name"
                          validateFirst
                          rules={[
                            {
                              required: true,
                              message: "Пожалуйста, введите Ваше имя!",
                            },
                            {
                              whitespace: true,
                              message: "Поле не может быть пустым!",
                            },
                            {
                              required: true,
                              min: 2,
                              max: 25,
                              message: "От 2 до 25 символов!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input placeholder="Иван" />
                        </Form.Item>

                        <Form.Item
                          label="Фамилия"
                          name="secondname"
                          validateFirst
                          rules={[
                            {
                              required: true,
                              message: "Пожалуйста, введите Вашу фамилию!",
                            },
                            {
                              whitespace: true,
                              message: "Поле не может быть пустым!",
                            },
                            {
                              required: true,
                              min: 2,
                              max: 25,
                              message: "От 2 до 25 символов!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input placeholder="Гончаренко" />
                        </Form.Item>

                        <Form.Item
                          name="phone"
                          label="Ваш телефон"
                          validateFirst
                          rules={[
                            {
                              required: true,
                              message: "Пожалуйста, введите Ваш телефон!",
                            },
                            {
                              whitespace: true,
                              message: "Поле не может быть пустым!",
                            },
                            {
                              required: true,
                              min: 7,
                              max: 7,
                              message: "Введите 7 символов!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input
                            placeholder="5411178"
                            addonBefore={prefixSelector}
                            style={{
                              width: "100%",
                            }}
                          />
                        </Form.Item>
                        <Form.Item
                          name="dateTime"
                          label="DateTime"
                          rules={[
                            {
                              required: true,
                              message: "Please choose the dateTime",
                            },
                          ]}
                        >
                          <DatePicker.RangePicker
                            style={{
                              width: "100%",
                            }}
                            getPopupContainer={(trigger) =>
                              trigger.parentElement
                            }
                          />
                        </Form.Item>

                        <Form.Item
                          wrapperCol={{
                            xs: {
                              span: 24,
                              offset: 0,
                            },
                            sm: {
                              span: 16,
                              offset: 8,
                            },
                          }}
                        >
                          <Space wrap>
                            <Button
                              type="primary"
                              htmlType="submit"
                              onClick={success}
                            >
                              Отправить заявку
                            </Button>
                          </Space>
                        </Form.Item>
                        <Row gutter={16}>
                          <Col span={24}>
                            <Form.Item
                              name="description"
                              label="Укажите Ваши пожелания"
                              rules={[]}
                            >
                              <Input.TextArea rows={4} />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Drawer>
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
