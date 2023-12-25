import React, { useEffect, useState } from 'react';
import "./products.css"

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const storedToken = localStorage.getItem('token');
  const id = localStorage.getItem('ID');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/product/`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`Unable to fetch data ${response.status}`);
        }

        const json = await response.json();

        if (!Array.isArray(json)) {
          throw new Error('Expected an array in the products property of the API response.');
        }

        setProducts(json);
      } catch (error) {
        console.error(error);
        setError('Unable to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const Add = async (e, productId) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders/', {
        method: 'POST',
        headers: {
          'Token': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: `${id}`,
          products: [
            {
              productID: productId,
              quantity: 1,
            },
          ],
          amount: 590,
          address: 'usa',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle the error as needed
    }
  };

  return (
    <>
      <div className="products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="products">
            {products.flatMap((product, index) => [
              <ProductCard
                key={index}
                imgSrc={product.img}
                title={product.title}
                price={product.price}
                id={product.id}
                handler={Add}
              />,
              <ProductCard
                key={index + products.length} // Ensure unique keys
                imgSrc={product.img}
                title={product.title}
                price={product.price}
                id={product.id}
                handler={Add}
              />,
              <ProductCard
                key={index + products.length} // Ensure unique keys
                imgSrc={product.img}
                title={product.title}
                price={product.price}
                id={product.id}
                handler={Add}
              />,
              <ProductCard
                key={index + products.length} // Ensure unique keys
                imgSrc={product.img}
                title={product.title}
                price={product.price}
                id={product.id}
                handler={Add}
              />
            ])}
          </div>
        )}
      </div>
    </>
  );
};

const ProductCard = ({ title, id, price, handler, imgSrc }) => (
  <div className="product-Card">
    <img src={imgSrc} alt={title} />
    <p>{title}</p>
    <h4>${price}</h4>
    <button onClick={() => handler(id)}>Buy</button>
  </div>
);

export default ProductsPage;
