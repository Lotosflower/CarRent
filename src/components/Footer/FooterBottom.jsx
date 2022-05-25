import styles from "./Footer.module.css";

import Heart from "./Heart";

export const FooterBottom = () => {
  return (
    <section className={styles.footer__bottom}>
      <div className={styles.footer__container}>
        <div className={styles.footer__bottom__context}>
          <p>
            Copyright@2022 All rights reserved | This template is made with love
            by Korytko Yuri
          </p>
          <Heart />
        </div>
      </div>
    </section>
  );
};
