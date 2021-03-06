import React, { Component } from 'react'
import logo from '../img/logo.png'

class Navbar extends Component {
  render() {
    return (
      <nav className="main-nav">
        <img src={logo} alt="My Portfolio" id="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
