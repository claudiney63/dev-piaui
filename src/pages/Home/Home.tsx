import NavBarComponent from "../../components/NavBarComponent";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sobre from "../Sobre/Sobre";
import Portifolio from "../Portifolio/Portifolio";

function Home() {
  return (
    <>
      <NavBarComponent></NavBarComponent>

      {/* Inicio */}
      <Container
        fluid
        id="content"
        style={{ marginTop: "20px" }}
        className="p-4"
      >
        <Row
          id="inicio"
          className="align-items-center justify-content-center"
          style={{ height: "90vh", marginBottom: "5%" }}
        >
          <Col lg={6}>
            <div className="text-center">
              <h2>Bem-vindo ao Dev Piauí</h2>
              <p>A sua empresa de desenvolvimento web, simples e direta.</p>
              <Button variant="dark">Fale conosco</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-center mt-4">
              <img
                src="https://www.efront.com/efront-c-assets/cache-1640080016000/images/media-bin/web/global/banner/limited-partners.webp"
                alt="Imagem"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </Col>
        </Row>

        <Sobre></Sobre>

        <Portifolio></Portifolio>
      </Container>
    </>
  );
}

export default Home;
