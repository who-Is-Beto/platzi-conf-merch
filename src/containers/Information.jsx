import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Information.css'

function Information() {
  return (
    <div className="Information">
      <div className="Information__content">
        <div className="Infotmation__head">
          <h2>Contact information:</h2>
        </div>
        <div className="Information__form">
          <form action="">
            <input type="text" placeholder="Full name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="City" name="City" />
            <input type="text" placeholder="country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal Code" name="cp" />
            <input type="number" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information__buttons">
          <div className="Information__back">
            Back
          </div>
          <div className="Information__next">
            <Link to='/checkout/payment'>
              Pay
            </Link>
          </div>
        </div>
      </div>
      <div className="Information__sidebar">
        <h3>Order:</h3>
        <div className="Information__item">
          <div className="Information__element">
            <h4>Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information