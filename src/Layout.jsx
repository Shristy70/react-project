import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <h1>this is layout page</h1>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Cybrom</Navbar.Brand>

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
            <Nav.Link as={Link} to="search">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="update">
              Update
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
