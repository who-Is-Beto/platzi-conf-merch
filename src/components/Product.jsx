import React from 'react';

function Product({ product }) {
  return (
    <div className="Products__item">
      <img src={product.image} alt={product.title} />
      <div className="Product__item-info">
        <h2>
          {product.title}
          <span>
            $
            {' '}
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
}

export default Product;