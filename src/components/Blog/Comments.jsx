import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { useState } from "react";
import styles from "./Blog.module.css";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Добавить комментарий
      </Button>
    </Form.Item>
  </>
);

export const Comments = () => {
  // const dataLocalComment = JSON.parse()

  const [dataComments, setDataComments] = useState({
    comments: [
      {
        author: "Rosario Dawson",
        avatar:
          "http://journal-files7.foto.ua/uploads/2015/01/%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D0%B0-Rosario-Dawson-%D0%B2-Grazia-France.-%D0%A4%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-David-Roemer.jpg",
        content: (
          <p>
            Очень советую. Сама пользовалась, осталась очень довольна.
            Приветливый персонал, качественные авто, все супер!
          </p>
        ),
        datetime: moment().fromNow(),
      },

      // {...dataLocalComment}
    ],
    submitting: false,
    value: "",
  });

  const handleSubmit = () => {
    if (!dataComments.value) {
      return;
    }

    setDataComments({
      ...dataComments,
      submitting: true,
    });

    setTimeout(() => {
      setDataComments({
        submitting: false,
        value: "",
        comments: [
          ...dataComments.comments,
          {
            author: "Rosario Dawson",
            avatar:
              "http://journal-files7.foto.ua/uploads/2015/01/%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D0%B0-Rosario-Dawson-%D0%B2-Grazia-France.-%D0%A4%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-David-Roemer.jpg",
            content: <p>{dataComments.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
      localStorage.setItem(`data`, JSON.stringify(setDataComments.comments));
    }, 1000);
  };

  const handleChange = (e) => {
    setDataComments({
      ...dataComments,
      value: e.target.value,
    });
  };

  const { comments, submitting, value } = dataComments;

  return (
    <div className={styles.blog__container}>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
            className={styles.avatar}
            src="http://journal-files7.foto.ua/uploads/2015/01/%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D0%B0-Rosario-Dawson-%D0%B2-Grazia-France.-%D0%A4%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-David-Roemer.jpg"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>
  );
};
