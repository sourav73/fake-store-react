import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} d-flex align-items-center justify-content-center`}>
      <p className='mb-0'>Copyright 2022 &copy; All Rights Reserved</p>
    </footer>
  )
}
