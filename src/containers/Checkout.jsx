import React from 'react'
import '../styles/components/Checkout.css'

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout__content">
        <h3>Order List</h3>
        <div className="Checkout__item">
          <div className="Checkout__element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type='button'>Delete</button>
        </div>
      </div>
      <div className="Checkout__sidebar">
        <h3>Total price: $10</h3>
        <button type='button'>Continue with the order</button>
      </div>
    </div>
  )
}

export default Checkout