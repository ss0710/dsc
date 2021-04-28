import React from 'react';
import './nav.css';
import * as ReactBootStrap from 'react-bootstrap';
import DSC from '../../assets/Dsc.png';
import {Link} from 'react-router-dom';

function Nav() {

  const style={
    overflow: 'hidden'
  }

  return (
    <React.Fragment>
    <div className="fixing">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bar">
  <ReactBootStrap.Navbar.Brand href="#home" className="brand"><div style={style} ><img src={DSC} alt="Dsc logo" className="photoStyle"/></div></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    </ReactBootStrap.Nav>
    <div className="in-center">
    <ReactBootStrap.Nav>
    <p className="textHover"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></p>
    <p className="textHover"><Link to="/Achievements" style={{ textDecoration: 'none' }}>Achievements</Link></p>
    <p className="textHover"><Link to="/Event" style={{ textDecoration: 'none' }}>Events</Link></p>
    
      <p className="textHover"><Link to="/Team" style={{ textDecoration: 'none' }}>Team</Link></p>
      
    </ReactBootStrap.Nav>
    </div>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </div>
    </React.Fragment>
  );
}

export default Nav;
