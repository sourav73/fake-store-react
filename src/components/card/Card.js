import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

export default function Card({ id, title, image, price }) {
  return (
    <div className={`${styles.card} card h-100 text-center p-3`}>
      <img src={image} className={`${styles.cardImage} card-img-top w-100 p-4`} alt={title} />
      <h5 className={styles.cardHeading}><Link to={`/product/${id}`}>{title}</Link></h5>
      <p className={`${styles.price} mt-auto`}>{price} $</p>
      <Link to={`/product/${id}`} className="cbtn-outline">View Details</Link>
    </div>
  )
}
