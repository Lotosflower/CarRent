import styles from "./Services.module.css";
import { Steps, Button, message } from 'antd';
import { useState } from "react";


const { Step } = Steps;

const steps = [
  {
    title: 'Шаг 1',
    content: 'Позвоните нам по телефону (+375447854408)'
  },
  {
    title: 'Шаг 2',
    content: 'Задайте все вопросы которые Вас интересуют'
  },
  {
    title: 'Шаг 3',
    content: 'Выберите авто. А так же не забудьте взять с собой паспорт, залог - 100 рублей и арендную стоимость автомобиля!',
  },
  {
    title: 'Шаг 4',
    content: 'Оформите заявку с нашим менеджером по телефону и наслаждайтесь поездкой!)'
  }
];

export const Todo = () => {
    
    const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    return(
      <div className = {styles.todo__container}>
            <div className = {styles.todo}>
                  <h1>Как это работает</h1>
                  <Steps current={current}>
                      {steps.map(item => (
                      <Step key={item.title} title={item.title} />
                      ))}
                  </Steps>
                  <div className = {styles.todo__content}> {steps[current].content}</div>
                  <div className = {styles.todo__action}>
                      {current < steps.length - 1 && (
                      <Button type="primary" onClick={() => next()}>
                          Следующий шаг
                      </Button>
                      )}
                      {current === steps.length - 1 && (
                      <Button type="primary" onClick={() => message.success('Ни пере, ни жезла!')}>
                          Выполнено
                      </Button>
                      )}
                      {current > 0 && (
                      <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                          Предидущий шаг
                      </Button>
                      )}
                  </div>
            </div>
      </div>   
    )
}
