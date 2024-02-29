import { Row, Col } from "react-bootstrap";

function Sobre() {
  return (
    <>
      {/* Seção "Sobre" */}
      <Row id="sobre" className="mt-5" style={{ height: "100vh" }}>
        <Col lg={{ span: 8, offset: 2 }}>
          <div className="text-center">
            <h2>Sobre nós</h2>
            <p>
              A Dev Piauí é uma empresa de tecnologia dedicada a fornecer
              soluções inovadoras para os desafios de nossos clientes. Nosso
              objetivo é criar um ambiente de aprendizado e colaboração para
              todos os interessados em tecnologia na região do Piauí.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Sobre;
