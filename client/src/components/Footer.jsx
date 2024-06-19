import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer p-10 bg-zinc-800 text-white mt-12">
  <aside>
   <img className='w-32' src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Construction-Company-Contractor-Handyman-Logo-Design-PNG-Transparent.png" alt="" srcset="" />
    <p>Copyright © 2024 - All right reserved by Dahl Builders</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Hours</h6> 
    <p className='font-bold'>Monday-Friday</p>
    <p>10:00am - 5:00pm</p>
    <p className='font-bold'>Saturday</p>
    <p>10:00am - 2:00pm</p>
    <p className='font-bold'>Sunday</p>
    <p>Closed</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Link to="/roofing">Roofing</Link>
    <Link to="/roofing">Decks</Link>
    <Link to="/roofing">Kitchen</Link>
    <Link to="/roofing">Bathroom</Link>
    <Link to="/roofing">Basement</Link>
    <Link to="/roofing">Flooring</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a href="tel:+1234567890">
        <FontAwesomeIcon icon={faPhone} /> 123-456-7890
      </a>
      <a href="mailto:example@example.com">
        <FontAwesomeIcon icon={faEnvelope} /> example@example.com
      </a>
  </nav>
</footer>
  )
}

export default Footer