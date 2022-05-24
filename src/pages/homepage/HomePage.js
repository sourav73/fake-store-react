import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import styles from "./Homepage.module.scss";
import useFetch from "../../components/useFetch";
import Card from "../../components/card/Card";

export default function HomePage() {
  const { data, isPending, error } = useFetch(
    "https://fakestoreapi.com/products?limit=8"
  );
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title, description, image } = products;
  const dispatch = useDispatch();
  const categories = [
    {
      title: "men's wear",
      iconClass: "fa-solid fa-person",
      to: "/products/category/men's clothing",
    },
    {
      title: "women's wear",
      iconClass: "fa-solid fa-person-dress",
      to: "/products/category/women's clothing",
    },
    {
      title: "jewelery",
      iconClass: "fa-solid fa-gem",
      to: "/products/category/jewelery",
    },
    {
      title: "electronics",
      iconClass: "fa-solid fa-microchip",
      to: "/products/category/electronics",
    },
  ];
  useEffect(() => {
    dispatch(setProducts(data));
  }, [data, dispatch]);
  return (
    <main>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/cloth2.jpeg"
              className={`d-block w-100 ${styles.sliderImage}`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Latest Fashion Wears</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/jewelery 2.jpg"
              className={`d-block w-100 ${styles.sliderImage}`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Your Desired Jewelery</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/electronics.jpg"
              className={`d-block w-100 ${styles.sliderImage}`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Your Needed Electronics</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="category text-center mt-5">
        <h5>Categories</h5>
        <p>Get your desired product from different categories</p>
        <div className="container">
          <div className="categories row justify-content-center">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-3">
                <Link
                  to={category.to}
                  className={`${styles.category} text-capitalize`}
                >
                  <i className={`${category.iconClass} d-block`}></i>
                  <span className="d-block">{category.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="products mt-5">
        <h5 className="text-center mb-4">Featured Products</h5>
        <div className="container-xl">
          <div className="row">
            {isPending && (
              <p className="text-center">
                Fetching Products{" "}
                <img src="./images/loading/32x32.gif" alt="loading icon" />
              </p>
            )}
            {error && <p>{error}</p>}
            {products &&
              products.map((product, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                >
                  <Card
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
