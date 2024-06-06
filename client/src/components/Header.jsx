import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="navbar bg-gray-800 text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 text-white rounded-box w-52">
            <li><Link to="/">Home</Link></li>
          <li>
            <a>Services</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl"><Link to="/">Dahl Builders</Link></a>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/">Home</Link></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2 bg-gray-800 rounded-b-lg rounded-t-none">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-4">
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
