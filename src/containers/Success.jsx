import React, { useContext } from 'react'
import '../styles/components/Success.css'
import useGoogleAddress from '../hooks/useGoogleAddress'
import AppContext from '../context/appContext'
import Map from '../components/Map'

function Payment() {

  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAddress(buyer[0].address)


  return (
    <div className="Success">
      <div className="Success__content">
        <h2>{`${buyer[0].name}, Thanks for buy!`}</h2>
        <span>Your order reach in 1 week</span>
        <div className="Success__map">
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export default Payment