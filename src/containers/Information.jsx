import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/appContext'
import '../styles/components/Information.css'

function Information() {
  const { state, addToBuyer } = useContext(AppContext)

  const form = useRef(null)

  const { cart } = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer)
  }

  return (
    <div className="Information">
      <div className="Information__content">
        <div className="Infotmation__head">
          <h2>Contact information:</h2>
        </div>
        <div className="Information__form">
          <form ref={form}>
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
            <Link to='/checkout'>
              Back
            </Link>
          </div>
          <div className="Information__next">
            <button type='button' onClick={handleSubmit}>Pay</button>
          </div>
        </div>
      </div>
      <div className="Information__sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div className="Information__item" key={item.title}>
            <div className="Information__element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information