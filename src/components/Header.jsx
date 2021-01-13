import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../context/appContext'
import '../styles/components/Header.css'

function Header() {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <div className="Header">
      <Link to='/'>
        <h1 className="Header__title">PlatziConf Merch</h1>
      </Link>
      <div className="Header__checkout">
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket' />
        </Link>
        {cart.length > 0 && <div className='Header__alert'>{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;