import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="navbar bg-zinc-800 text-white fixed z-20 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-800 text-white rounded-box w-52">
            <li><Link to="/">Home</Link></li>
          <li>
            <a>Services</a>
            <ul className="p-2 text-xl">
              <li><Link to="/roofing">Roofing</Link></li>
              <li><Link to="/roofing">Decks</Link></li>
              <li><Link to="/roofing">Kitchen</Link></li>
              <li><Link to="/roofing">Bathroom</Link></li>
              <li><Link to="/roofing">Basement</Link></li>
              <li><Link to="/roofing">Flooring</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost text-xl">Dahl Builders</Link>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 text-xl">
        <li><Link to="/">Home</Link></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2 bg-zinc-800 rounded-b-lg rounded-t-none">
              <li><Link to="/roofing">Roofing</Link></li>
              <li><Link to="/roofing">Decks</Link></li>
              <li><Link to="/roofing">Kitchen</Link></li>
              <li><Link to="/roofing">Bathroom</Link></li>
              <li><Link to="/roofing">Basement</Link></li>
              <li><Link to="/roofing">Flooring</Link></li>
            </ul>
          </details>
        </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-4 text-xl">
      <a href="tel:+1234567890">
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <a href="mailto:example@example.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </div>
  )
}
