import React from "react";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/home">
          Foodies
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewcart">
                View Cart 🛒 {totalItems > 0 && <span className="badge bg-danger ms-1">{totalItems}</span>}
              </Link>
            </li>

          </ul>
        </div>

        <div className="d-flex">
          <Link to={'/'}class="btn btn-danger">Log Out
              </Link>
       
        </div>

      </div>
    </nav>
  );
};

export default Navbar;