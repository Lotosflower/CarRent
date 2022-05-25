import styles from "./About.module.css";
import Person1 from "../../assets/images/person_1.jpg";
import Person2 from "../../assets/images/person_2.jpg";
import Person3 from "../../assets/images/person_3.jpg";
import Person4 from "../../assets/images/person_4.jpg";
import Person5 from "../../assets/images/person_5.jpg";
import Person6 from "../../assets/images/person_6.jpg";




export const Staff = () => {
    return(
    <section className = {styles.about__background}>

        <div className = {styles.about__container}>
        
            <div className = {styles.staff__columns}>

                <div className = {styles.staff__column}>
                    <img src = {Person1} alt = "man" />
                        <h3>Основатель компании</h3>
                        <p>Дмитриев Анатолий</p>
                        <p>Лучший руководитель, который создал крепкий коллектив нашей компании</p>
                </div>
                <div className = {styles.staff__column}>
                    <img src = {Person2} alt = "man" />
                        <h3>Директор по финансовым вопросам</h3>
                        <p>Дмитриева Ольга</p>
                        <p>Этот человек точно знает куда и на какие нужды уходит каждая копейка</p>
                </div>
                <div className = {styles.staff__column}>
                    <img src = {Person3} alt = "man" />
                        <h3>Юрист</h3>
                        <p>Симоненко  Ирина</p>
                        <p>Порядочность, честность - вот то что получаете Вы, обращаясь к Ирине Леонидовне.</p>
                </div>
                <div className = {styles.staff__column}>
                    <img src = {Person4} alt = "man" />
                        <h3>Инженер-механик</h3>
                        <p>Антонов Евгений</p>
                        <p>Мы полностью уверены в отличном техническом состоянии каждого нашего авто</p>
                </div>
                <div className = {styles.staff__column}>
                    <img src = {Person5} alt = "man" />
                        <h3>Менеджер по аренде авто</h3>
                        <p>Устинова Марина</p>
                        <p>Енергичный, грамотный, опытный менеджер, подберет авто даже самому требовательному клиенту</p>
                </div>
                <div className = {styles.staff__column}>
                    <img src = {Person6} alt = "man" />
                        <h3>Менеджер по аренде авто</h3>
                        <p>Меньшова Екатерина</p>
                        <p>Екатерина, оперативно поможет подобрать авто на выгодных для Вас условиях и быстро оформит все необходимые документы.</p>
                </div>
            
            </div> 
        
        </div>
    </section>    
    )
}