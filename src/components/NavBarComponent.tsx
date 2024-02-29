import { Navbar, Container, Nav } from "react-bootstrap";

const NavBarComponentStyle = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
};

function scrollToSection(id: any) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

function NavBarComponent() {
  return (
    <>
      <Navbar style={NavBarComponentStyle} expand="lg">
        <Container>
          <Navbar.Brand href="/">DEV PIAUÍ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => scrollToSection("inicio")}
                href="#inicio"
              >
                Inicio
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("sobre")} href="#sobre">
                Sobre
              </Nav.Link>
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
