import { Modal, Space, Select } from "antd";
import styles from "./Contacts.module.css";
import { Form, DatePicker, Button, Input } from "antd";
const { RangePicker } = DatePicker;

function success(values) {
  console.log(values);
  Modal.success({
    content: (
      <div className={styles.form__modal}>
        <p>Ваша заявка принята. Ожидайте, мы Вам перезвоним</p>
        <p>Имя: {values.name}</p>
        <p>Фамилия: {values.secondname}</p>
        <p>Ваш телефон: {values.phone}</p>
      </div>
    ),
  });
}

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 11,
    },
  },
};

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Пожалуйста, укажите желаемую дату и время заказа!",
    },
  ],
};

export const FormOrder = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    form.resetFields();
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,

      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    success(values);
    console.log("Received values of form: ", values);
  };

  const [form] = Form.useForm();

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
    <section className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__block}>
          <div className={styles.form__content}>
            <h1>Для заказа авто заполните заявку</h1>
            <Form
              name="time_related_controls"
              {...formItemLayout}
              onFinish={onFinish}
              form={form}
            >
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
                name="range-time-picker"
                label="Укажите желаемую дату"
                {...rangeConfig}
              >
                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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
                  <Button type="primary" htmlType="submit">
                    Отправить
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
          <div className={styles.location__title}>
            <h1>Контактная информация</h1>
            <h2>Наш адрес:</h2>
            <p>Минская обл. г. Борисов, ул. Дзержинского 90</p>
            <h2>Наши телефоны</h2>
            <p>+375448841025</p>
            <p>+375448844700</p>
            <h2>Наш email</h2>
            <p>info@carrent.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
