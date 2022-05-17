import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { removeProducts, setProducts } from '../redux/actions/productActions';

export default function Products() {
  const { category } = useParams();
  const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
  const { data, isPending, error } = useFetch(url);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(removeProducts());
    dispatch(setProducts(data));
  }, [data, dispatch])


  return (
    <div>
      {!isPending && <p className='text-center fw-bold mt-4 text-capitalize'>{category ? category : 'All Products'}</p>}
      <div>
        {isPending && <img src="./images/loading/32x32.gif" alt="loading icon" className="d-block mb-4 m-auto" />}
        {/* {category && isPending && <img src="./images/loading/32x32.gif" alt="loading icon" className="d-block mb-4 m-auto" />} */}
        {error && <p>{error}</p>}

        {products &&
          <div>
            {products.map(product => (
              <div key={product.id} className="card">
                <p>{product.title}</p>
              </div>
            ))}
          </div>}
      </div>
    </div>
  )
}
