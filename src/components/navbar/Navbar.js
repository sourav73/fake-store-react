import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  }

  const closeNav = () => {
    setIsOpen(false);
  }

  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.header}`}>
      <div className={`${styles.brandLogo} d-flex`}>
        <button className={`${styles.burger} me-3`} onClick={handleBurgerClick}><i className={`fa-solid ${isOpen ? 'fa-x' : 'fa-bars'}`}></i></button>
        <Link to='/'>Fake Store</Link>
      </div>
      <nav className={`${styles.mainNav} ${isOpen ? `${styles.show}` : ''}`}>
        <ul className='p-0 mb-0'>
          <li>
            <Link to="/products" onClick={closeNav}>All Products</Link>
          </li>
          <li>
            <Link to="/products/category/men's clothing" onClick={closeNav}>Men's Clothing</Link>
          </li>
          <li>
            <Link to="/products/category/women's clothing" onClick={closeNav}>Women's Clothing</Link>
          </li>
          <li>
            <Link to="/products/category/jewelery" onClick={closeNav}>Jewelery</Link>
          </li>
          <li>
            <Link to="/products/category/electronics" onClick={closeNav}>Electronics</Link>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center">
        <form className={styles.searchForm}>
          <input type="search" placeholder="Search product" />
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <button
          type="submit"
          className={styles.searchToggle}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <i className={`fa-solid ${isSearchOpen ? 'fa-x' : 'fa-magnifying-glass'}`}></i>
        </button>
        <Link className={`${styles.profile} ms-3`} title='Profile' to='/profile'><i className="fa-solid fa-user"></i></Link>
        <Link className={`${styles.cart} ms-3`} title='Shopping Cart' to='/cart'><i className="fa-solid fa-cart-shopping"></i><span>{'0'}</span></Link>
      </div>
      <form className={`${styles.mobileSearchForm} ${isSearchOpen ? `${styles.show}` : ''}`}>
        <input type="search" placeholder="Search product" />
        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </header>
  );
}
