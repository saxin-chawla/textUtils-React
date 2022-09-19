import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    

  return (
    <>
      <nav className ={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li> */}
            </ul>
            <div>
                <button type="button" onClick={props.bluish} className="btn btns btn-primary"></button>
                <button type="button" onClick={props.greyish} className="btn btns btn-secondary"></button>
                <button type="button" onClick={props.greenish} className="btn btns btn-success"></button>
                <button type="button" onClick={props.redish} className="btn btns btn-danger"></button>
                <button type="button" onClick={props.yellowish} className="btn btns btn-warning"></button>
                <button type="button" onClick={props.cyanish} className="btn btns btn-info"></button>
                {/* <button type="button" onClick={props.light} className="btn btns btn-light"></button>
                <button type="button" onClick={props.dark} className="btn btns btn-dark"></button> */}
            </div>
            <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
                <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {title : PropTypes.string.isRequired};
// Navbar.defaultValues = {title:"Set Title Here"}