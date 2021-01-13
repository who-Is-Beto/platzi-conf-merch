import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

function Header() {
  return (
    <div className="Header">
      <Link to='/'>
        <h1 className="Header__title">PlatziConf Merch</h1>
      </Link>
      <div className="Header__checkout">
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket' />
        </Link>
      </div>
    </div>
  );
}

export default Header;