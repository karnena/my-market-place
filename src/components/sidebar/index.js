import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
function Sidebar() {
  return (
    <div className="sidebar">
                <ul>
                <li className="sidebar-drawer"><Link to='/login' className="sidebar-text">Login</Link></li>
                    <li className="sidebar-drawer"><Link to='/' className="sidebar-text">Dashboard</Link></li>
                    <li className="sidebar-drawer"><Link to='/register' className="sidebar-text">Registration</Link></li>
                    <li className="sidebar-drawer"><Link to='/bid' className="sidebar-text">Submit Bid</Link></li>
                    <li className="sidebar-drawer"><Link to='/grid' className="sidebar-text">Search</Link></li>
                    
                </ul>
            </div>
  )
}

export default Sidebar