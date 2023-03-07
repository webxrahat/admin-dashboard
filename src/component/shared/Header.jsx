import React from 'react';
import { Bell, ChatLeftText, List, Search } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import profileImg from '../../assets/profile-img.jpg'

function Header() {
  return (
    <Navbar bg="white" expand="lg" className='d-flex align-items-center px-3 shadow-sm fixed-top'>
      <div style={{ width: "20%" }} className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center justify-content-lg-start'>
          <Nav.Link>
            <img style={{ maxHeight: "26px", marginRight: "6px" }} src={logo} alt="logo" />
          </Nav.Link>
          <Navbar.Brand style={{ fontSize: "26px", color: "#012970", fontWeight: "500" }} href="#home">NiceAdmin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <List color="#012970" size={32} />
      </div>
      <div style={{ width: "80%" }} className="d-flex justify-content-between align-items-center ms-auto">
        <div>
          <input type="text" placeholder="Search" className="p-1 search-input" />
          <Search style={{ marginLeft: "-15%" }} />
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div className='position-relative me-2'>
                <Nav.Link href="#home"> <Bell size={22} /><p className='position-absolute top-0 end-0 me-1 bg-primary text-white rounded'><small style={{fontSize:"12px", padding:"0px 5px"}}>4</small></p></Nav.Link>
              </div>
              <div className='position-relative me-3'>
                <Nav.Link href="#home"> <ChatLeftText size={22} /><p className='position-absolute top-0 end-0 me-1 bg-success text-white px-1 py-0 rounded'><small style={{fontSize:"12px", padding:"0px 1px"}}>3</small></p></Nav.Link>
              </div>
              <img style={{ width: "40px", marginRight: "5px" }} className='rounded-circle' src={profileImg} alt="..." />
              <NavDropdown style={{ fontSize: "14px" }} title="K. Anderson" id="basic-nav-dropdown">
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