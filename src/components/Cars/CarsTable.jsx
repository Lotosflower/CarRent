import { Table, Typography, Image } from "antd";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Store";

const _Table = () => {
  const { addToCart, cart, setCart } = useContext(Context);

  const [data, setData] = useState([]);

  const dataSource = data.map((item) => ({ ...item, key: item.id }));

  const clickBtn = (idFilter) => {
    const newData = data.find(({ id }) => id === idFilter);
    addToCart(newData, cart, setCart);
  };

  const columns = [
    {
      title: "Марка Авто",
      dataIndex: "title",
      key: "info",
      align: "center",
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
      fixed: "left",
      width: 120,
    },
    {
      title: "Цена, BYN",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: 110,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Кол-во дверей",
      dataIndex: "doors",
      key: "doors",
      align: "center",
      width: 110,
    },
    {
      title: "Вид топлива",
      dataIndex: "fuel",
      key: "fuel",
      align: "center",
      width: 110,
      filters: [
        {
          text: `Бензин`,
          value: `Бензин`,
        },
        {
          text: `Дизель`,
          value: `Дизель`,
        },
      ],
      onFilter: (value, item) => item.fuel.includes(value),
    },
    {
      title: "КПП",
      dataIndex: "transmission",
      key: "transmission",
      align: "center",
      width: 140,
      filters: [
        {
          text: `МКПП`,
          value: `Механическая`,
        },
        {
          text: `АКПП`,
          value: `Автоматическая`,
        },
      ],
      onFilter: (value, item) => item.transmission.includes(value),
    },
    {
      title: "Минимальный возраст",
      dataIndex: "minimum",
      key: "minimum",
      align: "center",
      width: 130,
    },
    {
      title: "Фото авто",
      dataIndex: "img",
      key: "img",
      align: "center",
      width: 280,
      render: (img) => <Image src={img} alt="auto" width={300} />,
    },
    {
      title: "Арендовать",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (id) => (
        <button
          id={id}
          onClick={() => {
            clickBtn(id);
          }}
        >
          Арендовать
        </button>
      ),
      width: 150,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3001/media")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Table
      scroll={{ x: 1200, y: 700 }}
      bordered="true"
      dataSource={dataSource}
      columns={columns}
      pagination={{
        defaultPageSize: "5",
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 15, 20],
        position: ["bottomCenter"],
      }}
    />
  );
};
export default _Table;
