import { Nav } from "react-bootstrap";
import { BarChart, BoxArrowInRight, CardList, DashCircle, Envelope, FileEarmark, Gem, Grid, JournalText, LayoutTextWindowReverse, MenuButtonWide, Person, QuestionCircle } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  // const router = useMatches()
  // console.log("router", router);
  const sidebarClass = sidebarOpen ? "sidebar-open" : "sidebar";
  return (
    <aside className={`shadow-lg sidebar-open mt-5 pe-4 ps-3 ${sidebarClass}`}>
      <Nav className="flex-column  mt-3 align-items-start">
        <div className="d-flex align-items-center justify-content-start me-5 mt-3 i G">
          <div className="mb-1">
            <Grid />
          </div>
          <div>
            <Nav.Link className="G" as={Link} to="/profile">Dashboard</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <MenuButtonWide />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Components</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <JournalText />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Forms</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <LayoutTextWindowReverse />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Tables</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-2">
            <BarChart />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Charts</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-2">
            <Gem />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Icons</Nav.Link>
          </div>
        </div>
        <p style={{ fontSize: "13px" }} className="mt-3 text-muted ms-4 ps-1"><small>PAGES</small></p>
        <div className="d-flex align-items-center justify-content-start i">
          <div>
            <Person />
          </div>
          <div>
            <Nav.Link href="#home">Profile</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <QuestionCircle />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">F.A.Q</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <Envelope />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Contact</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <CardList />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Register</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-2">
            <BoxArrowInRight />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Login</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-2">
            <DashCircle />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Error 404</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start i">
          <div className="mt-1">
            <FileEarmark />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Blank</Nav.Link>
          </div>
        </div>
      </Nav>
    </aside>
  );
};

export default Sidebar;