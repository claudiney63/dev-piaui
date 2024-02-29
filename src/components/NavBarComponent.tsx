import { Navbar, Container, Nav } from "react-bootstrap";

const NavBarComponentStyle = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
};

function NavBarComponent() {
  return (
    <>
      <Navbar style={NavBarComponentStyle} expand="lg">
        <Container>
          <Navbar.Brand href="#home">DEV PIAUÍ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#sobre">Inicio</Nav.Link>
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Nav.Link href="#portfolio">Portfólio</Nav.Link>
              <Nav.Link href="#membros">Membros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
