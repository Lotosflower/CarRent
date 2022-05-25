import styles from "./About.module.css";
import Picture from "../../assets/images/about.jpg"

export const Team = () => {
    return(
        <section className = {styles.team}>

            <div className = {styles.about__container}>
                <div className = {styles.about__action}>

                    <div className = {styles.about__left}>
                        <p>CarRent</p>
                        <p>Наша компания "CarRent" предоставляет очень широкий спектр услуг и дополнительных сервисов. Обратившись к нам Вы точно останетесь довольны своей поездкой</p>
                        <p>Мы достаточно давно находимся в этой нишу сферы услуг и очень надежно в ней закрепились. И мы точно знаем чего хочет каждый клиент!</p>
                    </div>

                    <div className = {styles.about__right}>
                    <img src = {Picture} alt = "car" />
                    </div>

                </div>
            </div>
            
        </section>    
    )
}