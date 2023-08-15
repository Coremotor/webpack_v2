import React from 'react';
import './counter.scss';
import styles from './counter.module.css'

export const Counter = () => {
  return (
    <div>
      Counter!!!
      <div className='red'>red</div>
      <div className={styles.green}>green</div>
    </div>
  );
};
