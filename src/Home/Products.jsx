import React, { useEffect, useState } from 'react'

const Products = (props) => {

    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [filteredData , setfilteredData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const category = props.props;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try{
                const response = await fetch(`http://localhost:5000/api/product/?category=${category}` , {
                    method: 'GET'
                });

                if(!response.ok){
                    console.log("not able to get");
                    throw new Error(`unable to fetch data ${response.status}`);
                }

                const json = await response.json();
                console.log(json);

                if (!Array.isArray(json)) {
                    throw new Error('Expected an array in the products property of the API response.');
                }

                setProducts(json);
            }
            catch(error){
                console.log(error);
                setError("unable to fetch data");
            }
            finally{
                setLoading(false);
            }
        };
            fetchProducts();
        
    },[]);


    const storedToken = localStorage.getItem('token');
    const id = localStorage.getItem('ID')

    const Add = async (e, productId) => {
      try {
        const response = await fetch("http://localhost:5000/api/orders/", {
          method: 'POST',
          headers: {
            'Token': `Bearer ${storedToken}`,
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            userID: `${id}`,
            products: [
              {
                productID: productId,
                quantity: 1
              }
            ],
            amount: 590,
            address: "usa"
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        console.log("Order created successfully!");
      } catch (error) {
        console.error('Error creating order:', error);
        // Handle the error as needed
      }
    }

    

    // console.log(storedToken);

    return (
        <>
          <div className='title' >Our Featured Products</div>
      
      <div className="products">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filteredData && filteredData.length > 0 || !searchQuery ? (
            <div className="div-1">
              
              {products.map((i) => (
                <ProductCard
                key={i.id}
                imgSrc={i.img}
                title={i.title}
                price={i.price}
                id={i.id}
                handler={Add}
              />
              ))}
           </div>
           
          ) : (
            <p>No products available.</p>
          )}
          </div>
        </>
      );
}

const ProductCard = ({ title, id, price, handler, imgSrc }) => (
  <div className="productCard">
  <img src={imgSrc} alt={title} />
  <p>{title}</p>
  <h4>${price}</h4>
  <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
    Buy
  </button>
</div>
);

export default Products