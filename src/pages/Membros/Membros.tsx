import { Card, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MemberCard({
  name,
  imgSrc,
  role,
  github,
  linkedin,
}: {
  name: string;
  imgSrc: string;
  role: string;
  github: string;
  linkedin: string;
}) {
  return (
    <Card style={{ width: "18rem", border: "none", marginTop: "1rem" }}>
      <Card.Body>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <img
              src={imgSrc}
              alt="Imagem de Perfil"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
        <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
          {name}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{role}</Card.Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="dark"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px" }}
          >
            <FaGithub /> GitHub
          </Button>
          <Button
            variant="info"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function Membros() {
  return (
    <div id="membros" className="text-center" style={{ height: "100vh" }}>
      <h2>Equipe</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        <MemberCard
          name="Nome do Membro 1"
          imgSrc="https://cdn2.iconfinder.com/data/icons/devops-outline/60/Developer-dev-male-person-user-avatar-programmer-512.png"
          role="Descrição do papel do Membro 1 na empresa."
          github="https://github.com/membro1"
          linkedin="https://linkedin.com/in/membro1"
        />
        <MemberCard
          name="Nome do Membro 2"
          imgSrc="https://cdn2.iconfinder.com/data/icons/devops-outline/60/Developer-dev-male-person-user-avatar-programmer-512.png"
          role="Descrição do papel do Membro 2 na empresa."
          github="https://github.com/membro2"
          linkedin="https://linkedin.com/in/membro2"
        />
      </div>
    </div>
  );
}

export default Membros;
