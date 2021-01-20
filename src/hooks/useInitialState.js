import { useState } from 'react'
import initialState from '../initialState'


const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const RemoveToCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((item, indexCurrent) => indexCurrent !== indexToRemove),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  return {
    addToCart,
    RemoveToCart,
    state,
    addToBuyer,
  }
}

export default useInitialState