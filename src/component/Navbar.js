import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar({mode, onhandleMode}) {
  return (
      <div>
          <nav className={`navbar navbar-expand-lg bg-${mode === "light" ? "light" : "dark"}`} style={{
              color: mode === "dark" ? "white" : "black" }}>
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/" style={{
              color: mode === "dark" ? "white" : "black" }}>TextUtils</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                          <li className="nav-item" >
                              <Link className="nav-link active" aria-current="page" to="/" style={{
                                  color: mode === "dark" ? "white" : "black"
                              }}>Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/about" style={{
                                  color: mode === "dark" ? "white" : "black"
                              }}>About</Link>
                          </li>
                      </ul>
                  </div>
                  <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" onClick={onhandleMode} role="switch" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {mode === "light" ? "dark" : "light"} mode</label>
                  </div>
              </div>
          </nav>
      </div>
  )
}
