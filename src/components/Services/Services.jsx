import { Advantages } from "./Advantages"
import style from "./Services.module.css"
import { Todo } from "./Todo"


export const Services = () => {
    return(
        <section className = {style.services}>
            <div className = {style.service}>
                <div className = {style.service__offer}>
                        <h1>Оцените наш сервис</h1>
                        <p>Наши преимущества заключаются в том, что их огромное количество и они действительно работают!</p>
                </div>
            </div>
                <Advantages/>
                <Todo/>
        </section>
    )
}
