/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { Link } from 'react-router-dom'
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
          <button type='button'><i className='fas fa-trash-alt' /></button>
        </div>
      </div>
      <div className="Checkout__sidebar">
        <h3>Total price: $10</h3>
        <Link to='checkout/information'>
          <button type='button'>Continue with the order</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout