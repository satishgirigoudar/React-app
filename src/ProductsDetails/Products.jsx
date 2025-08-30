import React, { useState } from "react";
import { products } from "../Products.json";
import Cart from "./Cart";

const Products = () => {
  // Initialize product quantity
  const initializeProductQty = products.map(product => ({
    ...product,
    qty: 0,
  }));

  const [productsdata, setProductData] = useState(initializeProductQty);
  const [cartItem, setcartItem] = useState([]);

  // Decrement product qty in product list
  const decrementQty = (productId, delta) => {
    setProductData(prev =>
      prev.map(product =>
        product.id === productId
          ? { ...product, qty: Math.max(1, product.qty - delta) }
          : product
      )
    );
  };

  // Increment product qty in product list
  const IncrementQty = (productId, delta) => {
    setProductData(prev =>
      prev.map(product =>
        product.id === productId
          ? { ...product, qty: product.qty + delta }
          : product
      )
    );
  };

  // Add to cart or update qty if already in cart
  const addToCart = (product) => {
    setcartItem(prevCart => {
      const isProductInCart = prevCart.find(item => item.id === product.id);
  
      if (isProductInCart) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: product.qty }
            : item
        );
      } else {
        return [...prevCart, { ...product }];
      }
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Product List Section (Left) */}
      <div style={{ width: "60%", overflowY: "auto", padding: "1rem" }}>
        <div className="container">
          <div className="row">
            {productsdata.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card m-3 p-2" style={{ width: "100%" }}>
                  <img
                    src={product.images}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {product.title}
                    </h5>
                    <h4 className="card-title text-center">
                      ₹{product.price}
                    </h4>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <i
                        onClick={() => decrementQty(product.id, 1)}
                        className="bi bi-dash-circle ml-3 p-2"
                        style={{ cursor: "pointer" }}
                      ></i>
                      <span className="px-3">{product.qty}</span>
                      <i
                        onClick={() => IncrementQty(product.id, 1)}
                        className="bi bi-plus-circle ml-3 p-2"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-danger btn-sm mb-2"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Section (Right Sticky Panel) */}
      <div
        // style={{
        //   width: "40%",
        //   position: "sticky",
        //   top: 0,
        //   height: "100vh",
        //   overflowY: "auto",
        //   padding: "1rem",
        //   borderLeft: "1px solid #ccc",
        //   backgroundColor: "#f8f9fa",
        // }}
        style={{width: "40%"}}
        className="position-sticky top-0 h-100 overflow-auto p-3 border-start bg-light"
      >
        <Cart cartItem={cartItem} />
      </div>
    </div>
  );
};

export default Products;
