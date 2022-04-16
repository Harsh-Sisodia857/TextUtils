import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'black'}}>
<div className="container-fluid">
 <Link className="navbar-brand" to="/">{props.title}</Link>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
       <Link className="nav-Link active" aria-current="page" to="/" style={
        { color: "rgba(0,0,0,.9)",
         textDecoration: "none",
         padding: "10px"}}>Home</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-Link" to="/about" style={
        { color: "rgba(0,0,0,.9)",
         textDecoration: "none",
         padding: "10px"}}>About Us</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-Link" to="/contact" style={
        { color: "rgba(0,0,0,.9)",
         textDecoration: "none",
         padding: "10px"}}>Contact Us</Link>
     </li>
   </ul>
     <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.handlemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
     </div>     
 </div>
</div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
};