import React from "react";
import styles from './EventItem.module.scss';
import { Link, useNavigate, useSubmit, useParams } from "react-router-dom";

const EventItem = ({ event }) => {
  
    // action함수를 트리거하는 2번째 방법
    const submit = useSubmit();

  const navigate = useNavigate();

  const {
    'event-id': id,
    title,
    desc: description,
    'img-url': image,
    'start-date': date
  } = event;


  const deleteHandler =  (e) => {

    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    //useSubmit을 통해서 값 전달받기
    submit(null, { method: 'DELETE'});

    // <Form method = 'DELETE'>
  };

  return (
    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button 
        onClick={deleteHandler}
        >
          Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
