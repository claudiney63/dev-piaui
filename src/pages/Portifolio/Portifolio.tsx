import { Card, Button, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  image,
  name,
  description,
  githubLink,
  deployLink,
}: {
  image: string;
  name: string;
  description: string;
  githubLink: string;
  deployLink: string;
}) {
  return (
    <Card style={{ marginBottom: "20px", width: "44rem", marginTop: "1rem" }}>
      <Col style={{ height: "100%" }}>
        <Row className="d-flex justify-content-center align-items-center">
          <Card.Img
            className="p-3"
            variant="top"
            src={image}
            style={{ height: "22rem", width: "38rem" }}
          />
        </Row>
        <Row className="d-flex flex-column justify-content-between">
          <div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3">
            <Button
              variant="dark"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Github
            </Button>
            <Button
              variant="success"
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <FaExternalLinkAlt /> Deploy
            </Button>
          </div>
        </Row>
      </Col>
    </Card>
  );
}

function Portifolio() {
  return (
    <div id="Portfolio" className="text-center mb-4">
      <h2 className="mb-4">Portfólio</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          image="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_nAGFQv9.jpg"
          name="Projeto 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
          githubLink="https://github.com/seu-usuario/projeto1"
          deployLink="https://deploy-do-projeto1.com"
        />
        <ProjectCard
          image="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_nAGFQv9.jpg"
          name="Projeto 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
          githubLink="https://github.com/seu-usuario/projeto2"
          deployLink="https://deploy-do-projeto2.com"
        />
        <ProjectCard
          image="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_nAGFQv9.jpg"
          name="Projeto 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
          githubLink="https://github.com/seu-usuario/projeto3"
          deployLink="https://deploy-do-projeto3.com"
        />
      </div>
    </div>
  );
}

export default Portifolio;
