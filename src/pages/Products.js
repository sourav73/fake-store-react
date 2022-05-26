import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts, setProducts } from "../redux/actions/productActions";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
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

  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // console.log(products && products.length);
  const currentProducts =
    products && products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="products">
      {/* <img src="./images/loading/32x32.gif" alt="loading icon" /> */}
      {!isPending && (
        <p className="text-center fw-bold mt-4 text-capitalize">
          {category ? category : "All Products"}
        </p>
      )}
      {isPending && (
        <p className="text-center my-4">
          Fetching products from server
          <img src="./images/loading/32x32.gif" alt="loading icon" />
        </p>
      )}
      {error && <p>{error}</p>}

      <div className="container-xl">
        <div className="row">
          {products &&
            currentProducts.map((product, index) => (
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
      <Pagination
        postsPerPage={productsPerPage}
        totalPosts={products && products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
