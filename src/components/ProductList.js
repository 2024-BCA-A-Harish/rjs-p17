
import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <div className="products-section">
      <h2>Available Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>

            <p>
              Price: ₹{product.price.toLocaleString("en-IN")}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "ADD",
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
