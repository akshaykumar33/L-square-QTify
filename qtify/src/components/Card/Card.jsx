import React from 'react';
import styles from './Card.module.css';


export default function CardComponent(props) {
  const name=props.song==='false'? ' Follows':" Likes";
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={props.image} alt={props.title} className={styles.albumImage} />
      </div>
      <div className={styles.actions}>
        <div className={styles.chip}>
          <span>{props.follows}{name}</span>
        </div>
      </div>
      <div className={styles.topic}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}
