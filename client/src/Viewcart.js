import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Viewcart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center" style={{minHeight: '60vh'}}>
        <h2>Your Cart is Empty 🛒</h2>
        <p className="mt-3">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/home" className="btn btn-primary mt-3">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{minHeight: '60vh'}}>
      <h2 className="mb-4">Your Shopping Cart</h2>
      
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div className="card mb-3 shadow-sm" key={item.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <img src={item.img} className="img-fluid rounded-start" alt={item.name} style={{ height: '120px', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">₹{item.price}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="mx-3">{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-success">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total Amount</strong>
                <strong>₹{totalPrice}</strong>
              </div>
              <button className="btn btn-success w-100 mb-2">Proceed to Checkout</button>
              <button className="btn btn-outline-danger w-100" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewcart;