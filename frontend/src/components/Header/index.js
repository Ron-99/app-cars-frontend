import React from 'react';
import car from '../../assets/car.svg';
import { Link } from 'react-router-dom';

import { logout, isAuthenticated } from "../../services/auth";

import './styles.css';

const Header = () => (
    <header id="main-header">
      <nav>
      {
        isAuthenticated()
        ? 
          <ul class="menu">
            <li><Link to="/home" className="link">Home</Link></li>
            <li><Link to="/create" className="link">Criar Veículo</Link></li>
            <li><Link to="/" className="sair" onClick={logout}>Sair</Link></li>
          </ul>
        : ""
      }
      </nav>
      
      <div className="logo">
        <h1>Stock</h1>
        <Link to={'/home'}><img src={car} alt="logo"></img></Link>
        <h1>Car</h1>
      </div>
    </header>
)

export default Header;