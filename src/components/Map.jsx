/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function Map({ data }) {

  const mapStyles = {
    height: '50vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyAURnOaOYddeIl841bzX7lkZS7BlDNqu7s'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map