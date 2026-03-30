import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Foodies</h5>
            <p>
              Manage your products effectively and efficiently. This application offers a seamless experience to control and view inventory.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
            <p>
              <Link to="/products" className="text-white" style={{ textDecoration: 'none' }}>View Products</Link>
            </p>
            <p>
              <Link to="/viewcart" className="text-white" style={{ textDecoration: 'none' }}>View Cart</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
            <p>
              <Link to="/home" className="text-white" style={{ textDecoration: 'none' }}>Home</Link>
            </p>
            <p>
              <Link to="/about" className="text-white" style={{ textDecoration: 'none' }}>About</Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p>
              <i className="bi bi-house-door-fill mr-3"></i> Foodies, HQ, India
            </p>
            <p>
              <i className="bi bi-envelope-fill mr-3"></i> info@foodies.com
            </p>
            <p>
              <i className="bi bi-telephone-fill mr-3"></i> + 91 234 567 88
            </p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">
              © {new Date().getFullYear()} Copyright:
              <a href="#" style={{ textDecoration: 'none' }}>
                <strong className="text-warning"> Foodies</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="bi bi-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="bi bi-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="bi bi-google"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="bi bi-linkedin"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="bi bi-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
