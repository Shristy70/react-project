import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="display">
              Display
            </Nav.Link>
            <Nav.Link as={Link} to="insert">
              Insert
            </Nav.Link>
            <Nav.Link as={Link} to="update">
              Update
            </Nav.Link>
            <Nav.Link as={Link} to="search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="maindiv">
        <Outlet />
      </div>
      <div className="footer"></div>
    </>
  );
};
export default Layout;
