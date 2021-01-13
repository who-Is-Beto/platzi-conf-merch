/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/appContext'
import '../styles/components/Checkout.css'

function Checkout() {

  const { state, RemoveToCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = (product, i) => () => {
    RemoveToCart(product, i);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <div className="Checkout">
      <div className="Checkout__content">
        {cart.length > 0 ? <h3>Order List</h3> : <h3>Order List empty...</h3>}
        {cart.map((item, i) => (
          <div className="Checkout__item">
            <div className="Checkout__element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}><i className='fas fa-trash-alt' /></button>
          </div>
        ))}
      </div>
      {
        cart.length > 0 && (
          <div className="Checkout__sidebar">
            <h3>{`Total price: $ ${handleSumTotal()}`}</h3>
            <Link to='checkout/information'>
              <button type='button'>Continue with the order</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Checkout