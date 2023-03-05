import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <Navbar bg="white" expand="lg" className='d-flex align-items-center px-3 shadow-lg'>
      <div className='d-flex align-items-center'>
        <Nav.Link>
          <img style={{maxHeight:"26px", display:"flex", alignItems:"center", marginRight:"6px"}} src={logo} alt="logo" />
        </Nav.Link>
        <Navbar.Brand href="#home">NiceAdmin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
       <div className="d-flex justify-content-between align-items-center ms-auto w-50">
       <input type="text" placeholder="Search" className="d-flex" />
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