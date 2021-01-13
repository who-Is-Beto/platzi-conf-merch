import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Payment.css'

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment__content">
        <h3>Order Summary</h3>
        <div className="Payment__Button">
          <Link to='/checkout/success'>
            Pay with paypal
          </Link>
        </div>
      </div>
      SideBar
    </div>
  )
}

export default Payment