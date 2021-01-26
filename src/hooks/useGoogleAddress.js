import { useEffect, useState } from 'react'
import axios from 'axios'

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({})
  console.log(address)
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAURnOaOYddeIl841bzX7lkZS7BlDNqu7s`
  useEffect(async () => {
    const response = await axios.get(API)
    setMap(response.data.results[0].geometry.location)
    /* await console.log(response.data.results[0].geometry.location); */
  }, [])
  return map
}

export default useGoogleAddress