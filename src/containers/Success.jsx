import React from 'react'
import '../styles/components/Success.css'

function Payment() {
  return (
    <div className="Success">
      <div className="Success__content">
        <h2>Beto, Thanks for buy!</h2>
        <span>Your order reach in 1 week</span>
        <div className="Success__map">
          Google Maps
        </div>
      </div>
    </div>
  )
}

export default Payment