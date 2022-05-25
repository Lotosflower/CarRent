import { Articles } from "./Articles";
import { Comments } from "./Comments";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <>
      <div className={styles.blog__img}>
        <div className={styles.blog__offer}>
          <h1>Наш блог</h1>
          <p>
            В этом разделе Вы сможете ознакомится с интересными статьями и
            поделится впечатлениями на тему каждой из них.
          </p>
        </div>
      </div>
      <Articles />
      <Comments />
    </>
  );
};
