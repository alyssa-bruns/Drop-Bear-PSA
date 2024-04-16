import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/home" className="navbar-item">
          <img
            className="image"
            src="../images/logo1.png"
            alt="Drop Bear Logo"
          />
        </a>

        <button
          onClick={() => {
            setisActive(!isActive)
          }}
          className={`navbar-burger burger  ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <div className="navbar-item is-size-4">
            <Link to="/home" className="navbar-item">
              Home
            </Link>
            <Link to="/home/education" className="navbar-item">
              Education
            </Link>
            <Link to="/home/safety" className="navbar-item">
              Tourist Safety
            </Link>
            <Link to="/home/donate" className="navbar-item">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
