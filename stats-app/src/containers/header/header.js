import { Navbar, Form, FormControl, Nav, Dropdown } from 'react-bootstrap';
import { FaBell , FaUser } from 'react-icons/fa';
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3 nav-wrap">
      
      <Form inline className="flex-grow-1">
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: '300px' }} 
        />
      </Form>

     
      <Nav className="ml-auto nav-wrap" >
        <Nav.Link href="#"><FaBell /></Nav.Link>
        <Dropdown alignRight >
        <Dropdown.Toggle variant="success" id="dropdown-user-icon">
        <FaUser />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{position:'-webkit-sticky'}}>
            <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
