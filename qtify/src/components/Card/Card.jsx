import React from 'react';
import Album from '../../assets/images/testalbum.png';
import styles from './Card.module.css';


export default function CardComponent(props) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={Album} alt="album" className={styles.albumImage} />
      </div>
      <div className={styles.actions}>
        <div className={styles.chip}>
          <span>100 follows</span>
        </div>
      </div>
      <div className={styles.topic}>
        <span>New Bollywood</span>
      </div>
    </div>
  );
}
