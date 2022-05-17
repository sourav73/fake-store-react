import React from 'react';
import styles from './Homepage.module.scss';

export default function HomePage() {
  return (
    <main>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/cloth2.jpeg" className={`d-block w-100 ${styles.sliderImage}`} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Latest Fashion Wears</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/jewelery 2.jpg" className={`d-block w-100 ${styles.sliderImage}`} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Your Desired Jewelery</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/electronics.jpg" className={`d-block w-100 ${styles.sliderImage}`} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Your Needed Electronics</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  )
}
