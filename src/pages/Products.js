import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts, setProducts } from "../redux/actions/productActions";
import Card from "../components/card/Card";

export default function Products() {
  const { category } = useParams();
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  const { data, isPending, error } = useFetch(url);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(removeProducts());
    dispatch(setProducts(data));
  }, [data, dispatch]);

  return (
    <div className="products">
      <img src="./images/loading/32x32.gif" alt="loading icon" />
      {!isPending && (
        <p className="text-center fw-bold mt-4 text-capitalize">
          {category ? category : "All Products"}
        </p>
      )}
      {isPending && (
        <p className="text-center my-4">
          Fetching products from server{" "}
          <img src="./images/loading/32x32.gif" alt="loading icon" />
        </p>
      )}
      {error && <p>{error}</p>}

      <div className="container-xl">
        <div className="row">
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
    </div>
  );
}
