import React, { useEffect, useState } from 'react';
import "./order.css"

const Orders = () => {
  const [products, setProducts] = useState([]);
  const storedToken = localStorage.getItem('token');
  const id = localStorage.getItem('ID');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/orders/find/${id}`, {
        method: 'GET',
        headers: {
          'Token': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Unable to fetch data ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      if (!Array.isArray(json)) {
        throw new Error('Expected an array in the products property of the API response.');
      }

      setProducts(json);
    } catch (error) {
      console.log(error);
      setError("No Orders yet...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="order-count">Total Orders: {products.length}</div>
      <div>Products</div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : Array.isArray(products) && products.length > 0 ? (
        <div>
          {products.map(order => (
            <div key={order._id} className="order-container">
              <div className="order-header">
                <div className="order-id">
                  Order ID: {order._id}
                </div>
                <img src={order.img} alt={`Product ${order._id}`} className="product-img" />
              </div>
              <div className="product-details">
                <div>Products:</div>
                <div>
                  {order.products.map(product => (
                    <div key={product._id} className="product-info">
                      Product ID: {product._id} - Quantity: {product.quantity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Orders;
