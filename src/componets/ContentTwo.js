import {Card, Row,Container,Col,Image} from "react-bootstrap";
import bam from "../assets/fns/Business Acounting Money Logo Vector Template Stock Vector (Royalty Free) 1176491542 _ Shutterstock.png";
import pla from "../assets/fns/Logo Plantilla Contabilidad Plantilla De Logotipo Financiera PNG , Resumen, Contabilidad, Flecha PNG y Vector para Descargar Gratis _ Pngtree.jpg";
import rs from "../assets/fns/Rising Up Statistic Bar Business Consulting Logo Template Download on Pngtree.jpg";

const ContentTwo = () => {
  return (
    <div>
      <br/>
      <Container>
        <h1 className="text-dark">Financial Logo </h1>
        <br/>
        <Row>
          <Col md={4}  className="movieWrapper" id="ContentTwo">
            <Card className="movieImg1">
            <Image src={bam} alt="" className="images"/>
            <div className="bg-dark">
              <div className="text-light text-center p-2 m-1">
                <Card.Title className="text-center">money management</Card.Title>
                <Card.Text className="text-start">
                  This is a wider card with jndkjandkjmdnxm.
                </Card.Text>
                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper" >
            <Card className="movieImg1">
            <Image src={pla} alt="" className="images"/>
            <div className="bg-dark">
              <div className="text-light text-center p-2 m-1">
                <Card.Title className="text-center">Financial up</Card.Title>
                <Card.Text className="text-start">
                  This is a wider card with jndkjandkjmdnxm.
                </Card.Text>
                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper" >
            <Card className="movieImg1">
            <Image src={rs} alt="" className="images"/>
            <div className="bg-dark">
              <div className="text-light text-center p-2 m-1">
                <Card.Title className="text-center">Financial rise</Card.Title>
                <Card.Text className="text-start">
                  This is a wider card with jndkjandkjmdnxm.
                </Card.Text>
                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentTwo;
