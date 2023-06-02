import { Container, Row, Col,Button } from "react-bootstrap";

const Intro = () =>{
   return(
    <div className=" intro">
    <Container className="text-white text-center d-flex justify-content-center align-item-center">
      <Row>
        <Col>
        <div className="title">Welcome to</div>
        <div className="title"> My Gallery</div>
        <div className="introButton mt-4 text-center">
            <Button variant="dark">Check collections</Button>
        </div>
        </Col>
      </Row>
    </Container>
  </div>
   )
}

export default Intro