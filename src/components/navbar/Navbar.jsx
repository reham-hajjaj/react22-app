import React from 'react'
import { Link } from 'react-router';
import "./navbar.css";
export default function Navbar() {
  return (
<nav>
    <Link to='/'>Home</Link>
   <Link to='login'>Login</Link>
   <Link to='register'>Register</Link> 
   <Link to='products'>Products</Link>
  </nav>
  )
  
  
}

