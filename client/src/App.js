import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Viewcart from "./Viewcart";  
import Admin from "./Admin";
import Footer from "./Footer";
import Edituser from "./Edituser";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/edituser/:id" element={<Edituser/>}/>

        <Route 
          path="/home" 
          element={
            <>
              <Navbar/>
              <Home/>
              <Footer/>
            </>
          }
        />
        <Route path="/about" element={
          <>
            <Navbar/>
            <About/>
            <Footer/>
          </>
        }/>
        <Route path="/products" element={
          <>
            <Navbar/>
            <Products/>
            <Footer/>
          </>
        }/>
        <Route path="/viewcart" element={
          <>
            <Navbar/>
            <Viewcart/>
            <Footer/>
          </>
        }/>


      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
