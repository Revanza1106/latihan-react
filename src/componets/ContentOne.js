import {Card, Row,Container,Col,Image} from "react-bootstrap";
import icm from "../assets/fnb/Ice Cream Monster.png";
import ic from "../assets/fnb/Ice Cream.jpg";
import pep from "../assets/fnb/pepsi.jpg";

const ContentOne = () => {
  return (
    <div>
      <br/>
      <Container>
        <h1 className="text-white">F&B Logo </h1>
        <br/>
        <Row>
          <Col md={4}  className="movieWrapper" id="ContentOne" >
            <Card className="movieImg">
            <Image src={icm} alt="The Moon Guy" className="images"/>
            <div className="bg-white">
              <div className="text-dark text-center p-2 m-1">
                <Card.Title className="text-center">The Monstart ice cream</Card.Title>
                <Card.Text className="text-start">
                  This is a wider card with jndkjandkjmdnxm.
                </Card.Text>
                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper" >
            <Card className="movieImg">
            <Image src={ic} alt="The Moon Guy" className="images"/>
            <div className="bg-white">
              <div className="text-dark text-center p-2 m-1">
                <Card.Title className="text-center"> ice cream</Card.Title>
                <Card.Text className="text-start">
                  This is a wider card with jndkjandkjmdnxm.
                </Card.Text>
                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper" >
            <Card className="movieImg">
            <Image src={pep} alt="The Moon Guy" className="images"/>
            <div className="bg-white">
              <div className="text-dark text-center p-2 m-1">
                <Card.Title className="text-center">The Pepsco</Card.Title>
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

export default ContentOne;
