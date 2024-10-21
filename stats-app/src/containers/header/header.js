import { Navbar, Form, FormControl, Nav, Dropdown } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3 nav-wrap">
      {/* Left-aligned search bar */}
      <Form inline className="flex-grow-1">
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: '300px' }} // Optional, can adjust width
        />
      </Form>

      {/* Right-aligned notifications and user profile */}
      <Nav className="ml-auto">
        <Nav.Link href="#"><FaBell /></Nav.Link>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
