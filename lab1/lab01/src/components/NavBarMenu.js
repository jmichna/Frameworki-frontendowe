import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap komponentów
import { Link } from 'react-router-dom'; // Import komponentu Link z react-router-dom

const NavBarMenu = ({ items }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">My Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {items.map((item) => (
            <Nav.Link as={Link} to={item.url} key={item.id}>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenu;