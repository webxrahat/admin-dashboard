import { Nav } from "react-bootstrap";
import { BarChart, BoxArrowInRight, CardList, DashCircle, Envelope, FileEarmark, Gem, Grid, JournalText, LayoutTextWindowReverse, MenuButtonWide, Person, QuestionCircle } from 'react-bootstrap-icons';

const Sidebar = () => {


  return (
    <div className='shadow-lg col-2 mt-5 px-5'>
      <Nav className="flex-column my-3 align-items-start scrollmenu">
        <div className="d-flex align-items-center justify-content-center mt-3 i">
          <div className="mb-1 active">
            <Grid />
          </div>
          <div>
            <Nav.Link active href="#home">Dashboard</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <MenuButtonWide />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Components</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <JournalText />
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Forms</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <LayoutTextWindowReverse/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Tables</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-2">
            <BarChart/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Charts</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-2">
            <Gem/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Icons</Nav.Link>
          </div>
        </div>
        <p style={{fontSize:"13px"}} className="mt-3 text-muted"><small>PAGES</small></p>
        <div className="d-flex align-items-center justify-content-center i">
          <div>
            <Person/>
          </div>
          <div>
            <Nav.Link href="#home">Profile</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <QuestionCircle/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">F.A.Q</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <Envelope/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Contact</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <CardList/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Register</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-2">
            <BoxArrowInRight/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Login</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-2">
            <DashCircle/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Error 404</Nav.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center i">
          <div className="mt-1">
            <FileEarmark/>
          </div>
          <div>
            <Nav.Link className="mt-2" href="#home">Blank</Nav.Link>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;