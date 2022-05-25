import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/socials/facebook.png";
import Dribble from "../../assets/images/socials/dribbble.png";
import Google from "../../assets/images/socials/google_plus.png";
import Instagram from "../../assets/images/socials/instagram.png";
import Linkedin from "../../assets/images/socials/linkedin.png";
import Pinterest from "../../assets/images/socials/pinterest.png";
import Tumblr from "../../assets/images/socials/tumblr.png";
import Whatsapp from "../../assets/images/socials/whatsapp.png";
import Youtube from "../../assets/images/socials/youtube.png";

export const FooterSocial = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__about}>
            <p>О нас</p>
            <p>
              Мы относительно маленькая компания на рынке проката авто, но у нас
              очень гордые нравы и большие амбиции, желание добиться небывалых
              высот в этой сфере деятельности. <br />{" "}
              <span>
                Так же следите за нашими новостями и обновлениями в социальных
                сетях.
              </span>
            </p>

            <div className={styles.footer__social__link}>
              <Link to="/about">Быстрая ссылка</Link>
            </div>
          </div>
          <div className={styles.footer__social__main}>
            <div className={styles.footer__social}>
              {/* <div className = {styles.footer__social__link} >
                                <Link to = "/about">Быстрая ссылка</Link>
                            </div> */}
              <div className={styles.footer__social__facebook}>
                <p>Facebook</p>
                <img src={Facebook} alt="" />
              </div>
              <div className={styles.footer__social__dribbble}>
                <p>Dribbble</p>
                <img src={Dribble} alt="" />
              </div>
              <div className={styles.footer__social__google}>
                <p>Google_plus</p>
                <img src={Google} alt="" />
              </div>
            </div>
            <div className={styles.footer__social}>
              {/* <div className = {styles.footer__social__link} >
                                <Link to = "/about">Быстрая ссылка</Link>
                            </div> */}
              <div className={styles.footer__social__facebook}>
                <p>Instagram</p>
                <img src={Instagram} alt="" />
              </div>
              <div className={styles.footer__social__dribbble}>
                <p>Linkedin</p>
                <img src={Linkedin} alt="" />
              </div>
              <div className={styles.footer__social__google}>
                <p>Pinterests</p>
                <img src={Pinterest} alt="" />
              </div>
            </div>
            <div className={styles.footer__social}>
              {/* <div className = {styles.footer__social__link} >
                                <Link to = "/about">Быстрая ссылка</Link>
                            </div> */}
              <div className={styles.footer__social__facebook}>
                <p>Tumblr</p>
                <img src={Tumblr} alt="" />
              </div>
              <div className={styles.footer__social__dribbble}>
                <p>Whatsapp</p>
                <img src={Whatsapp} alt="" />
              </div>
              <div className={styles.footer__social__google}>
                <p>Youtube</p>
                <img src={Youtube} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}
      </div>
    </section>
  );
};
