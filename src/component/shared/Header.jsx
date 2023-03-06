import React from 'react';
import { List, Search } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <Navbar bg="white" expand="lg" className='d-flex align-items-center px-3 shadow-sm fixed-top'>
      <div style={{width:"20%"}} className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center justify-content-lg-start'>
        <Nav.Link>
          <img style={{ maxHeight: "26px", marginRight: "6px" }} src={logo} alt="logo" />
        </Nav.Link>
        <Navbar.Brand style={{ fontSize: "26px", color: "#012970", fontWeight: "500" }} href="#home">NiceAdmin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <List color="#012970" size={32} />
      </div>
      <div style={{width:"80%"}} className="d-flex justify-content-between align-items-center ms-auto">
        <div>
        <input style={{width:"300px", margin:"0 20px"}} type="text" placeholder="Search" className="p-1"/>
        <Search style={{marginLeft:"-50px"}}/> 
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;