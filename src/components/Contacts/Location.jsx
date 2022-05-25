import styles from "./Contacts.module.css";

export const Location = () => {
  return (
    <section className={styles.location}>
      <div className={styles.location__container}>
        <div className={styles.location__context}>
          <div className={styles.location__naming}>
            <p>
              Вы можете связатся с нами по телефону, оставить заявку или просто
              найдите нас по карте ниже
            </p>
          </div>
          {/* <div className={styles.location__subnaming}>
            <p>
              На этой страничке Вы найдете необходимую информацию касательного
              нашего расположения, а так же всю контактную информацию
            </p>
          </div> */}
        </div>
      </div>
      <div className={styles.location__info}>
        <div className={styles.location__position}>
          <iframe
            // className={styles.location__map}
            title="our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2331.2258164336986!2d28.497902015841824!3d54.2468892801776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46daf9ee33c31385%3A0xec005c25db0ca4c1!2z0JTQt9C10YDQttC40L3RgdC60L7Qs9C-LCA5MA!5e0!3m2!1sru!2sby!4v1652101180931!5m2!1sru!2sby"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
