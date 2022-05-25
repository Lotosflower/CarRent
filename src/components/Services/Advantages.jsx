import styles from "./Services.module.css";
import Advantage1 from "../../assets/images/advantage_1.png";
import Advantage2 from "../../assets/images/advantage_2.png";
import Advantage3 from "../../assets/images/advantage_3.png";
import Advantage4 from "../../assets/images/advantage_4.png";
import Advantage5 from "../../assets/images/advantage_5.png";
import Advantage6 from "../../assets/images/advantage_6.png";




export const Advantages = () => {
    return(
    <section className = {styles.advantage__background}>

        <div className = {styles.advantage__container}>
        
            <div className = {styles.advantage__columns}>

                <div className = {styles.advantage__column}>
                    <img src = {Advantage1} alt = "car" />
                    <h1>Преимущество № 1</h1>
                    <p>Наша фирма предоставляет современные авто с центральным замком и заправленым кондиционерром!</p>
                </div>
                <div className = {styles.advantage__column}>
                    <img src = {Advantage2} alt = "key" />
                    <h1>Преимущество № 2</h1>
                    <p>Быстрое и качественное оформление документов без лишних вопросов!</p>
                </div>
                <div className = {styles.advantage__column}>
                    <img src = {Advantage3} alt = "key" />
                    <h1>Преимущество № 3</h1>
                    <p>Ключевое качество нашей фирмы, это надежность, качество и уверенность в наших работниках и нашич авто!</p>
                </div>
                <div className = {styles.advantage__column}>
                    <img src = {Advantage4} alt = "car" />
                    <h1>Преимущество № 4</h1>
                    <p>Все автомобили находятся под охранной системой, поетому за сохранность авто можете не волноватся!</p>
                </div>
                <div className = {styles.advantage__column}>
                    <img src = {Advantage5} alt = "subject" />
                    <h1>Преимущество № 5</h1>
                    <p>В комплект авто входит полный набор сопутствующих пренадлежностей для непредвиденных обстоятельств!</p>
                </div>
                <div className = {styles.advantage__column}>
                    <img src = {Advantage6} alt = "man" />
                    <h1>Преимущество № 6</h1>
                    <p>Наша компания аботает 24/7. И в любой момент готовы предоставить Вам надежный и качественный авто!</p>
                </div>
            </div> 
        
        </div>
    </section>    
    )
}