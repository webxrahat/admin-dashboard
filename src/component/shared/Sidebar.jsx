import { Nav } from "react-bootstrap";
import { BarChart, BoxArrowInRight, CardList, DashCircle, Envelope, FileEarmark, Gem, Grid, JournalText, LayoutTextWindowReverse, MenuButtonWide, Person, QuestionCircle } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  // const router = useMatches()
  // console.log("router", router);
  const sidebarClass = sidebarOpen ? "sidebar-open" : "sidebar";
  return (
    <aside className={`shadow-lg sidebar-open mt-4 pe-4 ps-3 ${sidebarClass}`}>
      <Nav className="flex-column  mt-3 align-items-start">
        <div className="d-flex align-items-center justify-content-start me-5 mt-3 i G">
          <div className="mb-1">
            <Grid />
          </div>
          <div>
            <Nav.Link className="G" as={Link} to="/dashboard">Dashboard</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <MenuButtonWide />
          </div>
          <div>
            <Nav.Link className="mt-1" href="#home">Components</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <JournalText />
          </div>
          <div>
            <Nav.Link className="mt-1" href="#home">Forms</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <LayoutTextWindowReverse />
          </div>
          <div>
            <Nav.Link className="mt-1" href="#home">Tables</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div >
            <BarChart />
          </div>
          <div>
            <Nav.Link className="mt-1" href="#home">Charts</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <Gem />
          </div>
          <div>
            <Nav.Link className="mt-1" href="#home">Icons</Nav.Link>
          </div>
        </div>
        <p style={{ fontSize: "13px" }} className="mt-3 text-muted ms-4 ps-1"><small>PAGES</small></p>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <Person />
          </div>
          <div>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <QuestionCircle />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/faq">F.A.Q</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <Envelope />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/contact">Contact</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <CardList />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/register">Register</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <BoxArrowInRight />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/login">Login</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <DashCircle />
          </div>
          <div>
            <Nav.Link className="mt-1" as={Link} to="/error">Error 404</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
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