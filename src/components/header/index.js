import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="w-100 d-flex flex-row justify-content-between align-items-center">
        <img alt='logo' src="https://res.cloudinary.com/santoshk/image/upload/v1645526779/effigo/WhatsApp_Image_2022-02-22_at_4.14.36_PM_qhbibe.jpg" className="logo"/>
    <h4 className="nav-heading">My&nbsp;Marketplace</h4>
    <div className="dropdown mr-4">
        <button className=" d-button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar"/>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><Link className="dropdown-item" to='/login'>Logout</Link></li>
          <li><a className="dropdown-item" href="#">My Account</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar