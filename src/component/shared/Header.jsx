import React from 'react';
import { Bell, ChatLeftText, CheckCircle, Circle, ExclamationCircle, InfoCircle, List, Search } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import profileImg from '../../assets/profile-img.jpg'

function Header({ handleViewSidebar }) {
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
        <List onClick={handleViewSidebar} style={{ cursor: "pointer" }} color="#012970" size={32} />
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
                <Nav.Link href="#home">
                  <Bell size={22} />
                  <p className='badge badge-number bg-primary text-white'>
                    <small style={{ fontSize: "12px", padding: "0px 5px" }}>4</small>
                  </p>
                  <ul style={{ position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(-24.8px, 35.2px, 0px)" }} className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications show'>
                    <li className='dropdown-header d-flex align-items-center'>
                      You have 4 new notifications
                      <Nav.Link><span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span></Nav.Link>
                    </li>
                    <li><hr className='dropdown-divider' /></li>
                    <li className='notification-item'>
                      <ExclamationCircle className='text-warning notifications-i' size={28} />
                      <div>
                        <h4>lorem ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                      </div>
                    </li>
                    <li><hr className='dropdown-divider' /></li>
                    <li className='notification-item'>
                      <Circle className='text-danger notifications-i' size={26} />
                      <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                      </div>
                    </li>
                    <li><hr className='dropdown-divider' /></li>
                    <li className='notification-item'>
                      <CheckCircle className='text-success notifications-i' size={28} />
                      <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                      </div>
                    </li>
                    <li><hr className='dropdown-divider' /></li>
                    <li className='notification-item'>
                      <InfoCircle className='text-primary notifications-i' size={28} />
                      <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </li>
                    <li><hr className='dropdown-divider' /></li>
                    <li className='dropdown-footer'>
                      <Nav.Link>Show all notifications</Nav.Link>
                    </li>
                  </ul>
                </Nav.Link>
              </div>
              <div className='position-relative me-3'>
                <Nav.Link href="#home"> <ChatLeftText size={22} /><p className='position-absolute bg-success text-white badge-number badge p-1'><small style={{ fontSize: "12px", padding: "0px 1px" }}>3</small></p></Nav.Link>
              </div>
              <li class="nav-item dropdown pe-3">
                <Nav.Link className="nav-link nav-profile d-flex align-items-center pe-0 show" href="#" data-bs-toggle="dropdown" aria-expanded="true">
                  <img style={{width:"40px"}} src={profileImg} alt="Profile" class="rounded-circle" />
                  <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                </Nav.Link>
               <ul style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate3d(-16px, 38.4px, 0px)"}} className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show'>

               </ul>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;