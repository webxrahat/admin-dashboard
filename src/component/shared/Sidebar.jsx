import { useState } from "react";
import { Nav } from "react-bootstrap";
import { BarChart, BoxArrowInRight, CardList, ChevronDown, Circle, DashCircle, Envelope, FileEarmark, Gem, Grid, JournalText, LayoutTextWindowReverse, MenuButtonWide, Person, QuestionCircle } from 'react-bootstrap-icons';
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, handleCollapse , collapse }) => {
  const [collapse2 , setCollapse2] = useState(false)
  const [collapse3 , setCollapse3] = useState(false)
  const [collapse4 , setCollapse4] = useState(false)
  const [collapse5 , setCollapse5] = useState(false)
  const [active, setActive] = useState(false)
  // const a = active ? "active" : "";
  // const router = useMatches()
  // console.log("router", router);
  const sidebarClass = sidebarOpen ? "sidebar-open" : "sidebar";
  const collapseClass = collapse ? "menuUp" : "menuDown";
  const upDownClass = collapse ? "up" : "down";
  const collapseClass2 = collapse2 ? "menuUp" : "menuDown";
  const upDownClass2 = collapse2 ? "up" : "down";
  const collapseClass3 = collapse3 ? "menuUp" : "menuDown";
  const upDownClass3 = collapse3 ? "up" : "down";
  const collapseClass4 = collapse4 ? "menuUp" : "menuDown";
  const upDownClass4 = collapse4 ? "up" : "down";
  const collapseClass5 = collapse5 ? "menuUp" : "menuDown";
  const upDownClass5 = collapse5 ? "up" : "down";
  const location = useLocation()
  
  return (
    <aside className={`shadow-lg sidebar-open mt-4 pe-4 ps-3 ${sidebarClass}`}>
      <Nav className="flex-column  mt-3 align-items-start">

        <div className={`d-flex align-items-center justify-content-start me-5 mt-3 i ${location.pathname === '/dashboard' && 'active'}`}>
          <div className="mb-1">
            <Grid />
          </div>
          <div>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </div>
        </div>

        <li className="nav-item">
          <div onClick={handleCollapse} className={`d-flex align-items-center justify-content-between i ${active ? "active": ""}`}>
            <div onClick={()=> setActive(!active)} className="d-flex justify-content-center align-items-center">
              <MenuButtonWide />
              <Nav.Link className="mt-1">Components</Nav.Link>
            </div>
            <div className="ms">
              <ChevronDown className={`${upDownClass}`}/>
            </div>
          </div>
          <ul className={`nav-content collapse show ${collapseClass}`}>
            <li>
              <Nav.Link as={Link} to="/alert" className={`ms-4 ${location.pathname === '/alert' && 'sub'}`}>
                <Circle className={`me-2 ${location.pathname === '/alert' && 'primary rounded'}`} size={6} />
                <span>Alerts</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/accordion" className={`ms-4 ${location.pathname === '/accordion' && 'sub'}`}>
                <Circle className={`me-2 ${location.pathname === '/accordion' && 'primary rounded'}`} size={6} />
                <span>Accordion</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/badges" className={`ms-4 ${location.pathname === '/badges' && 'sub'}`}>
                <Circle className={`me-2 ${location.pathname === '/badges' && 'primary rounded'}`} size={6} />
                <span>Badges</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/breadcrumbs" className={`ms-4 ${location.pathname === '/breadcrumbs' && 'sub'}`}>
                <Circle className={`me-2 ${location.pathname === '/breadcrumbs' && 'primary rounded'}`} size={6} />
                <span>Breadcrumbs</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/buttons" className={`ms-4 ${location.pathname === '/buttons' && 'sub'}`}>
                <Circle className={`me-2 ${location.pathname === '/buttons' && 'primary rounded'}`} size={6} />
                <span>Buttons</span>
              </Nav.Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div onClick={()=> setCollapse2(!collapse2)} className={`d-flex align-items-center justify-content-between i`}>
            <div className="d-flex justify-content-center align-items-center">
              <JournalText />
              <Nav.Link className="mt-1">Forms</Nav.Link>
            </div>
            <div className="ms">
              <ChevronDown className={`${upDownClass2}`}/>
            </div>
          </div>
          <ul className={`nav-content collapse show ${collapseClass2}`}>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Form Elements</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Form Layouts</span>
              </Nav.Link>
            </li>
          </ul>
        </li>
        <li className="nav-tem">
          <div onClick={()=> setCollapse3(!collapse3)} className={`d-flex align-items-center justify-content-between i`}>
            <div className="d-flex justify-content-center align-items-center">
              <LayoutTextWindowReverse />
              <Nav.Link className="mt-1">Tables</Nav.Link>
            </div>
            <div>
              <ChevronDown className={`${upDownClass3}`}/>
            </div>
          </div>
          <ul className={`nav-content collapse show ${collapseClass3}`}>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>General Tables</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Data Tables</span>
              </Nav.Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div onClick={()=> setCollapse4(!collapse4)} className={`d-flex align-items-center justify-content-between i`}>
            <div className="d-flex justify-content-center align-items-center">
              <BarChart />
              <Nav.Link className="mt-1">Charts</Nav.Link>
            </div>
            <div>
              <ChevronDown className={`${upDownClass4}`}/>
            </div>
          </div>
          <ul className={`nav-content collapse show ${collapseClass4}`}>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Chart.js</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>ApexCharts</span>
              </Nav.Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div onClick={()=> setCollapse5(!collapse5)} className={`d-flex align-items-center justify-content-between i`}>
            <div className="d-flex justify-content-center align-items-center">
              <Gem />
              <Nav.Link className="mt-1">Icons</Nav.Link>
            </div>
            <div>
              <ChevronDown className={`${upDownClass5}`}/>
            </div>
          </div>
          <ul className={`nav-content collapse show ${collapseClass5}`}>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Bootstrap Icons</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link className="ms-4">
                <Circle className="me-2" size={6} />
                <span>Remix Icons</span>
              </Nav.Link>
            </li>
          </ul>
        </li>
        <p style={{ fontSize: "13px" }} className="mt-3 text-muted ms-4 ps-1"><small>PAGES</small></p>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/profile' && 'active'}`}>
          <div>
            <Person />
          </div>
          <div>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/faq' && 'active'}`}>
          <div>
            <QuestionCircle />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/faq">F.A.Q</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/contact' && 'active'}`}>
          <div>
            <Envelope />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/contact">Contact</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/register' && 'active'}`}>
          <div>
            <CardList />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/register">Register</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/login' && 'active'}`}>
          <div>
            <BoxArrowInRight />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/login">Login</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/error' && 'active'}`}>
          <div>
            <DashCircle />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/error">Error 404</Nav.Link>
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-start i ${location.pathname === '/blank' && 'active'}`}>
          <div>
            <FileEarmark />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/blank">Blank</Nav.Link>
          </div>
        </div>
      </Nav>
    </aside>
  );
};

export default Sidebar;