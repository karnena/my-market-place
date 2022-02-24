import React from 'react'
import { Link } from 'react-router-dom'
import './side.scss'

function Side() {
  return (
    
<main className="main">
  <aside className="sidebar">
    <nav className="nav">
      <ul>
      <li className="active"><Link to='/'>Dashboard</Link></li>
                    <li className="active"><Link to='/register'>Registration</Link></li>
                    <li className="active"><Link to='/bid'>Submit Bid</Link></li>
                    <li className="active"><Link to='/grid'>Search</Link></li>
                    
      </ul>
    </nav>
  </aside>

  {/* <section class="twitter">
    <div class="container">
      <a target="_blank" href="https://twitter.com/ReisnerShawn">
        <img class="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
      </a>
      <p>Follow me</p>
      <p>on Twitter!</p>
    </div>
  </section> */}
</main>
  )
}

export default Side