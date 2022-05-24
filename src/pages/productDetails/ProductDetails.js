import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/productActions";
import styles from "./ProductDetails.module.scss";

export default function ProductDetails() {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [color, setColor] = useState("blue");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isPending, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const product = useSelector((state) => state.product);
  const { title, description, image, price, category } = product;
  const nonVariantCategories = ["jewelery", "electronics"];

  useEffect(() => {
    dispatch(removeSelectedProduct());
    dispatch(selectedProduct(data));
  }, [data, dispatch]);
  return (
    <div className="product mt-4 container">
      <img src="./images/loading/16x16.gif" alt="loading icon" />
      {isPending && (
        <p className="text-center">
          Fetching details{" "}
          <img src="./images/loading/32x32.gif" alt="loading icon" />
        </p>
      )}
      {error && <p>{error}</p>}
      {product && (
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className={styles.productGallery}>
              <img
                src={image}
                alt={title}
                className="d-block m-auto m-md-0 ms-md-auto mb-5"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="product-info">
              <h1 className={styles.title}>{title}</h1>
              <small className={`${styles.category} mb-3`}>{category}</small>
              <h5 className="mb-2">{price}$</h5>
              <form action="">
                {nonVariantCategories.includes(category) ? (
                  ""
                ) : (
                  <div className="variant">
                    <div className="d-flex mb-3">
                      <div className="size me-3">
                        <label htmlFor="size" className="ms-1">
                          Size
                        </label>
                        <select
                          className="form-select"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          <option value="small">SM</option>
                          <option value="medium">MD</option>
                          <option value="large">LG</option>
                          <option value="extra large">XL</option>
                        </select>
                      </div>
                      <div className="color">
                        <label htmlFor="color" className="ms-1">
                          Color
                        </label>
                        <select
                          className="form-select"
                          name="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                        >
                          <option value="blue">Blue</option>
                          <option value="red">Red</option>
                          <option value="black">Black</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mb-3">
                  <div className={`${styles.quantity} input-group mb-3`}>
                    <button
                      type="button"
                      onClick={() =>
                        setCartQuantity(
                          cartQuantity > 1 ? cartQuantity - 1 : cartQuantity
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      readOnly
                      value={cartQuantity}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setCartQuantity(
                          cartQuantity < 10 ? cartQuantity + 1 : cartQuantity
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <button className="cbtn" type="submit">
                    Add to Cart
                  </button>
                </div>
              </form>
              <nav className={styles.infoTab}>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-reviews"
                    type="button"
                    role="tab"
                    aria-controls="nav-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </div>
              </nav>
              <div className="tab-content py-3 px-2" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-description"
                  role="tabpanel"
                  aria-labelledby="nav-description-tab"
                >
                  <p>{description}</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-reviews"
                  role="tabpanel"
                  aria-labelledby="nav-reviews-tab"
                >
                  <p>No Reviews yet</p>
                  <h5>Write a review</h5>
                  <form className={styles.review}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Subject"
                      />
                      <label for="floatingInput">Subject</label>
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a review here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">Review</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
