import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo} alt="logo" />
            <p>TAPTAPSHOP</p>
        </div>
        <ul className="nav_menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: 'none'}} to='/' >Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none'}}  to='/mens' >Men</Link> {menu==="men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none'}}  to='/womens' >Wome</Link> {menu==="women"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}}  to='/kids' >kids</Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className='nav_login_cart'>
            <Link to='login' ><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav_cart_count'>0</div>
        </div>
    </div>
  )
}
